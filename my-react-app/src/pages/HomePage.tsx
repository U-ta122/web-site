import { Link } from 'react-router-dom';

type ArrangementCardProps = {
  src?: string;
  title: string;
  price: string;
  size: string;
  description: string;
  examples: string[];
};

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  price?: string;
  number?: string;
};

function ArrangementCard({ src, title, price, size, description, examples }: ArrangementCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Arrangement</p>
          <h3 className="mt-2 text-2xl font-bold text-zinc-900">{title}</h3>
        </div>
        <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800">
          {price}
        </div>
      </div>
      <div className="h-120 overflow-hidden bg-zinc-100  rounded-[1.75rem]">
                    <img
                      src={src}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

      <div className="mb-4 rounded-2xl bg-zinc-50 p-4">
        <p className="text-sm font-semibold text-zinc-500">サイズ感の目安</p>
        <p className="mt-2 text-lg font-bold text-zinc-900">{size}</p>
      </div>

      <p className="text-base leading-7 text-zinc-600">{description}</p>

      <ul className="mt-4 space-y-2 text-sm text-zinc-600">
        {examples.map((example) => (
          <li key={example} className="flex items-start gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
            <span>{example}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionTitle({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-zinc-600 md:text-lg">{body}</p>
    </div>
  );
}

export default function HomePage() {
  const gallery:GalleryItem[]= [
  {
    src: 'https://res.cloudinary.com/dambqzrgf/image/upload/v1773485044/kbx7ajs0ukfkzuvzlm5c.jpg',
    alt: '紫ベースの大人な花束',
    category: '花束',
    title: '紫ベースの大人な花束',
    description: '落ち着きと上品さを感じる、大人っぽい雰囲気の花束です。',
    price:'¥3,850',
    number:'3',
  },
  {
    src: 'https://res.cloudinary.com/dambqzrgf/image/upload/v1773485021/y2dnlypgvtim8iqsxbtn.jpg',
    alt: '明るい色味のお祝い用花束',
    category: '花束',
    title: '明るい色味のお祝い用花束',
    description: 'お祝いの場面に合わせやすい、元気で明るい印象の花束です。',
    price:'¥6,600',
    number:'4',
  },
  {
    src: 'https://res.cloudinary.com/dambqzrgf/image/upload/v1773484900/ncjtpcikcujdapzzdxoy.jpg',
    alt: '高級感のある',
    category: 'お供え用アレンジメント',
    title: 'アレンジメント',
    description: 'お供え物に合う、上質感のあるアレンジメントです。',
    price:'¥7150',
    number:'1'
  },
  ];

  const arrangements = [
    {
      src:"https://res.cloudinary.com/dambqzrgf/image/upload/v1774292169/lhyafbdi6vwnsxcuu4pg.jpg",
      title: "Sサイズ",
      price: "¥1,650 ~ ¥3,300",
      size: "片手で持ちやすいコンパクトサイズ",
      description:
        "ちょっとしたお礼やご自宅用に選ばれやすい、日常に取り入れやすいアレンジメントです。玄関やデスク、カウンターにも置きやすいボリューム感です。",
      examples: ["誕生日のプチギフト", "お見舞い・お礼", "自宅の玄関や受付用"],
    },
    {
      src: "https://res.cloudinary.com/dambqzrgf/image/upload/v1774291821/rh0t72ev4euhhynkfuay.jpg",
      title: "Mサイズ",
      price: "¥3,850 ~ ¥6,050",
      size: "両手で抱えるとしっかり華やかなサイズ",
      description:
        "迷ったらまず選びやすい人気サイズです。写真映えもしやすく、誕生日や記念日、お祝いの贈りものとして使いやすいバランスです。",
      examples: ["誕生日・記念日", "送別・歓迎ギフト", "お店の開店祝い"],
    },
    {
      src: "https://res.cloudinary.com/dambqzrgf/image/upload/v1774291956/jgtenrevgcoaeujeerxn.jpg",
      title: "Lサイズ",
      price: "¥6,600 ~ ¥11,000",
      size: "存在感があり、空間の主役になるサイズ",
      description:
        "特別なお祝いにふさわしい、ボリューム重視のアレンジメントです。会場装花のような華やかさを求める場面にもおすすめです。",
      examples: ["開店・開業祝い", "舞台・発表会", "プロポーズや大切な記念日"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf9] text-zinc-900">
      <header className="border-b border-zinc-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">大石生花店</p>
            <h1 className="text-xl font-bold">花と、気持ちを届けるお店</h1>
          </div>
          <a
            href="https://line.me/R/ti/p/@364jfrxc"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            LINEで相談する
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-rose-50" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:items-center md:py-28">
            <div className="text-center">
              <p className="inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800">
                誕生日・記念日・お祝いの花を、ひとつずつ丁寧に。
              </p>
              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-zinc-900 md:text-6xl">
                {/* 大石生花店 */}
                <span className="block text-emerald-700">想いを聞き、イメージにぴったりのお花をご提案します。</span>
              </h2>
              <h3 className="mt-8 text-lg text-zinc-600 text-center">
                お祝いの花束から日常を彩るアレンジメントまで、ご希望やご予算に合わせてご提案しています！写真での相談もできるので、初めての方でも安心してつかっていただけます！
              </h3>

              <div className="mt-8 flex-col gap-4 sm:flex-row items-center">
                      <a 
                        href="tel:0548220688" 
                        className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700">
                        お電話で注文・相談する：0548-22-0688
                      </a>
              </div>

              <div className="mt-8 flex-col gap-4 sm:flex-row items-center">
                <a
                        href="https://line.me/R/ti/p/@364jfrxc"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
                      >
                        LINE公式アカウントで注文・相談する
                      </a>
              </div>
              <div>
                <Link
                  to="/works"
                  className="mt-8 inline-flex items-center justify-center rounded-2xl border border-zinc-300 bg-white px-7 py-4 text-base font-semibold text-zinc-800 transition hover:bg-zinc-50"
                >
                  作例一覧を確認する
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "相談方法", value: "LINE・店頭・電話" },
                  { label: "対応内容", value: "花束・フラワーアレンジメント・スタンド生花" },
                  { label: "おすすめ", value: "写真相談" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm">
                    <p className="text-sm text-zinc-500">{item.label}</p>
                    <p className="mt-2 text-lg font-bold text-zinc-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          <div className="mt-8 text-lg text-zinc-600 text-center">
              ＊「ピンク系でおまかせ」や「２０代女性が好きそうなイメージ」などお渡しする方へのイメージや好きな色などをお伝えいただければ、ピッタリのお花をお作りいたします！
          </div>
          </div>
        </section>

        <section id="sizes" className="mx-auto max-w-6xl px-6 py-20">
          <SectionTitle
            eyebrow="Size Guide"
            title="花束・フラワーアレンジメントのサイズ感"
            body="LINEで相談する際には、このサイズ感を基準にお伝えください。"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {arrangements.map((item) => (
              <ArrangementCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-emerald-600 p-8 text-white shadow-xl shadow-emerald-200">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="mt-3 text-2xl font-bold md:text-3xl">サイズに迷ったら、LINEで写真と一緒に相談がおすすめです。</h3>
                <p className="mt-3 text-base leading-8 text-emerald-50">
                  用途・予算・色味の希望を送っていただければ、イメージに近い提案につなげやすくなります。
                </p>
              </div>
              <a
                href="https://line.me/R/ti/p/@364jfrxc"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-bold text-emerald-700 transition hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                LINEで相談する
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf3] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle
              eyebrow="Gallery"
              title="ギャラリー"
              body="人気の雰囲気や作例を確認できます。このギャラリーやInstagramを参考にお伝えください。"
            />
            <div className="mt-10 flex justify-center">
              <Link
                to="/works"
                className="inline-flex items-center justify-center rounded-2xl border border-zinc-300 bg-white px-7 py-4 text-base font-semibold text-zinc-800 transition hover:bg-zinc-50"
              >
                作例一覧を確認する
              </Link>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((image) => (
                <div
                  key={image.title}
                  className="group overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-120 overflow-hidden bg-zinc-100">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      {image.category}
                      {image.number}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-zinc-900">{image.title}</h3>
                    {image.price && (
                      <p className="mt-2 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-800">
                        {image.price}
                      </p>
                    )}
                    <p className="mt-2 text-base font-medium leading-7 text-zinc-700">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Point</p>
                  <h3 className="mt-3 text-2xl font-bold text-zinc-900">好みの雰囲気に近い画像があれば、そのままLINEでお伝えください。</h3>
                  <p className="mt-3 text-base leading-8 text-zinc-600">
                    「この写真みたいな色味で」「このボリューム感に近い感じで」など、言葉にしづらい希望も伝えやすくなります。
                  </p>
                </div>
                <a
                  href="https://line.me/R/ti/p/@364jfrxc"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  ギャラリーを見てLINEで相談する
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle
              eyebrow="Instagram"
              title="Instagramで最近の雰囲気をチェック"
              body="季節の花や直近の作例、色味の雰囲気をInstagramで確認できます。想いを形にする参考にしてください。"
            />

            <div className="mt-14 grid gap-8">
              <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 shadow-sm">
                <div className="border-b border-zinc-200 bg-white px-6 py-4">
                  <p className="text-sm font-semibold text-zinc-800">公式Instagram</p>
                </div>
                <div className="aspect-[4/3] w-full bg-white">
                  <iframe
                    title="Instagram feed"
                    src="https://www.instagram.com/oishi_seikaten/embed"
                    className="h-full w-full"
                  />
                </div>
              </div>

              {/* <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
                <h3 className="mt-3 text-2xl font-bold text-zinc-900">写真から雰囲気を選べると、注文しやすい。</h3>
                <ul className="mt-6 space-y-4 text-base leading-8 text-zinc-600">
                  <li>・色味やテイストの好みを共有しやすい</li>
                  <li>・過去の制作事例がそのまま安心材料になる</li>
                  <li>・LINE相談への導線と相性がいい</li>
                </ul>

                <div className="mt-8 rounded-3xl bg-zinc-50 p-6">
                  <p className="text-sm font-semibold text-zinc-800">おすすめ導線</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    Instagramで好みの雰囲気を見つける → LINEでその投稿を伝えて相談する、の流れにすると成約につながりやすいです。
                  </p>
                </div>

                <a
                  href="https://line.me/R/ti/p/@364jfrxc"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  LINEで相談する
                </a>
              </div> */}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border-2 border-emerald-300 bg-white px-8 py-12 text-zinc-900 shadow-2xl shadow-emerald-100 md:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
                Contact & Order
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                ご相談・ご予約方法
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-600 md:text-lg">
                用途や予定日程に合わせて連絡方法を選べます。急ぎの注文や予約、通常の相談にご利用ください。
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border-2 border-emerald-300 bg-white p-6 text-zinc-900 shadow-xl shadow-emerald-100">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  01 Consultation
                </p>
                <h3 className="mt-3 text-2xl font-bold">LINEで相談</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  色味や雰囲気、予算感など、まだ迷っている段階のご相談はこちら。画像を見ながらイメージを伝えやすい方法です。
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                  <li>・写真を見せながら相談しやすい</li>
                  <li>・通常の予約相談におすすめ</li>
                  <li>・返信は営業時間内に順次対応</li>
                </ul>
                <a
                  href="https://line.me/R/ti/p/@364jfrxc"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  LINEで相談する
                </a>
              </div>

              <div className="rounded-3xl border-2 border-emerald-400 bg-white p-6 text-zinc-900 shadow-xl shadow-emerald-300/20">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  02 Order Form
                </p>
                <h3 className="mt-3 text-2xl font-bold">予約フォーム</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  ご注文内容が決まっている方は、受取日・予算・用途などをまとめて送れる予約フォームが最短です。
                  {/* ＊配達の場合は¥3,300から配達料¥550円で承っております。また¥5,500円以上の場合配達料がかかりませんので気兼ねなくご利用ください。
                  ＊配達可能時間は17時半までで承っております。配達圏内は牧之原市と吉田町です。 */}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                  <li>・必要項目を漏れなく送れる</li>
                  <li>・注文確定までスムーズ</li>
                  <li>・いちばんおすすめの注文方法</li>
                </ul>
                <a
                  href="https://example.com/order-form"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  予約フォームへ進む
                </a>
              </div>

              <div className="rounded-3xl border-2 border-emerald-300 bg-white p-6 text-zinc-900 shadow-xl shadow-emerald-100">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  03 Urgent
                </p>
                <h3 className="mt-3 text-2xl font-bold">お急ぎの方はお電話で</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  当日受取やお急ぎのご注文は、お電話でお願いしております。営業時間内にご連絡ください。
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                  <li>・当日注文の確認がしやすい</li>
                  <li>・すぐ返答が必要な方向け</li>
                  <li>・営業時間内の対応が基本</li>
                </ul>
                <a
                  href="tel:0548-22-0688"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  電話で問い合わせ
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-sm leading-7 text-zinc-600">
              <p className="font-semibold text-zinc-900">ご案内</p>
              <p className="mt-2">
                LINEでのご相談は営業時間内に順次返信いたします。当日受取・お急ぎのご注文は、お電話でのご連絡をおすすめします。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle
              eyebrow="Store Info"
              title="店舗情報・アクセス"
              body="店頭での受け取りやご来店前の確認に必要な情報をまとめました。お急ぎのご注文はお電話、通常のご相談はLINE、内容が決まっている場合は予約フォームがおすすめです。"
            />

            <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-[2rem] border border-zinc-200 bg-[#fffdf9] p-8 shadow-sm">
                <div className="space-y-5 text-sm leading-7 text-zinc-700">
                  <div className="grid grid-cols-[96px_1fr] gap-4 border-b border-zinc-200 pb-4">
                    <p className="font-semibold text-zinc-500">店舗名</p>
                    <p className="font-medium text-zinc-900">大石生花店</p>
                  </div>

                  <div className="grid grid-cols-[96px_1fr] gap-4 border-b border-zinc-200 pb-4">
                    <p className="font-semibold text-zinc-500">住所</p>
                    <p>
                      〒421-0422
                      <br />
                      静岡県牧之原市静波2700-2
                    </p>
                  </div>

                  <div className="grid grid-cols-[96px_1fr] gap-4 border-b border-zinc-200 pb-4">
                    <p className="font-semibold text-zinc-500">営業時間</p>
                    <p>9:00〜18:00</p>
                  </div>

                  <div className="grid grid-cols-[96px_1fr] gap-4 border-b border-zinc-200 pb-4">
                    <p className="font-semibold text-zinc-500">定休日</p>
                    <p>第２第４火曜日、毎週木曜日</p>
                  </div>

                  <div className="grid grid-cols-[96px_1fr] gap-4 border-b border-zinc-200 pb-4">
                    <p className="font-semibold text-zinc-500">電話</p>
                    <p>
                      <a href="tel:0548220688" className="font-medium text-emerald-700 hover:underline">
                        0548-22-0688
                      </a>
                    </p>
                  </div>

                  <div className="grid grid-cols-[96px_1fr] gap-4 pb-1">
                    <p className="font-semibold text-zinc-500">駐車場</p>
                    <p>店舗前に３台駐車可能</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <a
                    href="https://line.me/R/ti/p/@364jfrxc"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
                  >
                    LINEで相談する
                  </a>

                  <a
                    href="https://example.com/order-form"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-zinc-300 bg-white px-6 py-4 text-base font-bold text-zinc-900 transition hover:bg-zinc-50"
                  >
                    予約フォームへ
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 shadow-sm">
                  <div className="border-b border-zinc-200 bg-white px-6 py-4">
                    <p className="text-sm font-semibold text-zinc-800">Google Map</p>
                    <p className="mt-1 text-sm text-zinc-500">
                      埋め込みURLを差し替えると、そのまま店舗地図として使えます。
                    </p>
                  </div>

                  <div className="h-[360px] w-full bg-white">
                    <iframe
                      title="大石生花店の地図"
                      src="https://www.google.com/maps?q=%E5%A4%A7%E7%9F%B3%E7%94%9F%E8%8A%B1%E5%BA%97&output=embed"
                      className="h-full w-full"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}