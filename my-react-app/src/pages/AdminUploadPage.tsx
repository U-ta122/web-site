import { useState } from 'react';
import { Link } from 'react-router-dom';

type UploadResult = {
  secure_url: string;
  public_id: string;
  original_filename?: string;
};

export default function AdminUploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedImage, setUploadedImage] = useState<UploadResult | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpload = async () => {
    if (!selectedFile) {
      setErrorMessage('先に画像を選択してください。');
      return;
    }

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      setErrorMessage('.env の Cloudinary 設定が不足しています。');
      return;
    }

    setIsUploading(true);
    setErrorMessage('');
    setUploadedImage(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', uploadPreset);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error?.message || 'アップロードに失敗しました。');
      }

      setUploadedImage({
        secure_url: data.secure_url,
        public_id: data.public_id,
        original_filename: data.original_filename,
      });
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('不明なエラーが発生しました。');
      }
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffdf9] text-zinc-900">
      <header className="border-b border-zinc-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Admin
            </p>
            <h1 className="text-xl font-bold">作例画像アップロード</h1>
          </div>

          <Link
            to="/"
            className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
          >
            ホームへ戻る
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Cloudinary Upload
          </p>
          <h2 className="mt-3 text-3xl font-bold">作例画像をアップロード</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
            画像を選んで Cloudinary に保存します。アップロード後に表示されるURLを、
            作例一覧ページのデータに貼ればすぐ使えます。
          </p>

          <div className="mt-8 rounded-3xl bg-zinc-50 p-6">
            <label className="block text-sm font-semibold text-zinc-700">
              画像を選択
            </label>
            <input
              type="file"
              accept="image/*"
              className="mt-3 block w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                setSelectedFile(file);
                setUploadedImage(null);
                setErrorMessage('');
              }}
            />

            {selectedFile && (
              <p className="mt-3 text-sm text-zinc-600">
                選択中: {selectedFile.name}
              </p>
            )}

            <button
              type="button"
              onClick={handleUpload}
              disabled={isUploading}
              className="mt-6 inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-7 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isUploading ? 'アップロード中...' : 'Cloudinary に保存する'}
            </button>

            {errorMessage && (
              <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMessage}
              </div>
            )}
          </div>

          {uploadedImage && (
            <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-zinc-100">
                <img
                  src={uploadedImage.secure_url}
                  alt="アップロード済み画像"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Upload Result
                </p>

                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-700">
                  <div>
                    <p className="font-semibold text-zinc-900">secure_url</p>
                    <p className="mt-1 break-all">{uploadedImage.secure_url}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-zinc-900">public_id</p>
                    <p className="mt-1 break-all">{uploadedImage.public_id}</p>
                  </div>

                  {uploadedImage.original_filename && (
                    <div>
                      <p className="font-semibold text-zinc-900">original_filename</p>
                      <p className="mt-1">{uploadedImage.original_filename}</p>
                    </div>
                  )}
                </div>

                <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
                  <p className="text-sm font-semibold text-zinc-900">
                    次にやること
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    この secure_url をコピーして、WorksPage.tsx の作例データの
                    <code className="mx-1 rounded bg-zinc-200 px-1.5 py-0.5">src</code>
                    に貼れば、作例一覧に表示できます。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}