import { Link } from 'react-router-dom';

type WorkItem = {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  price?: string;
  number?: string;
};

// http://localhost:5173/admin/upload

const works: WorkItem[] = [
  {
    src: 'https://res.cloudinary.com/dambqzrgf/image/upload/v1773485095/cf9msuevplq3xvyugwsq.jpg',
    alt: 'やさしい色合いの花束',
    category: '花束',
    title: 'やさしい色合いの花束',
    description: 'やわらかい色味で、誕生日やお祝いに選ばれやすい。',
    price:'¥3,300',
    number:'1'
  },
  {
    src: 'https://res.cloudinary.com/dambqzrgf/image/upload/v1773485072/quf4ogodtm8tcru4xuyk.jpg',
    alt: '華やかな花束',
    category: '花束',
    title: '華やかな花束',
    description: '明るく華やかな印象で、贈りものとして存在感のある。',
    price:'¥3,300',
    number:'2',
  },
  {
    src: 'https://res.cloudinary.com/dambqzrgf/image/upload/v1773485044/kbx7ajs0ukfkzuvzlm5c.jpg',
    alt: '紫ベースの大人な花束',
    category: '花束',
    title: '紫ベースの大人な花束',
    description: '落ち着きと上品さを感じる、大人っぽい雰囲気の。',
    price:'¥3,850',
    number:'3',
  },
  {
    src: 'https://res.cloudinary.com/dambqzrgf/image/upload/v1773484837/zkgezyuolybulywi0xvo.jpg',
    alt: 'アレンジメント',
    category: 'フラワーアレンジメント',
    title: '正月をイメージしたアレンジメント',
    description: '季節感を意識した、アレンジメントです。',
    price:'¥3,300',
    number:'1',
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
  {
    src: 'https://res.cloudinary.com/dambqzrgf/image/upload/v1773483398/hebbuylwdk5c3xarij9u.jpg',
    alt: '',
    category: '花束',
    title: '暖かい色合いの花束',
    description: '季節感を意識した、印象に残る花束です。',
    price:'¥4,400',
    number:'5'
  },
  {
    src: 'https://res.cloudinary.com/dambqzrgf/image/upload/v1773485368/nomfmwuskiy82teevqid.jpg',
    alt: 'やさしい色合いの花束',
    category: '花束',
    title: '緑色ベースの花束',
    description: '鮮やかな色味で、誕生日やお祝いに選ばれやすい。',
    price:'¥3,850',
    number:'6'
  },
  {
    src: 'https://res.cloudinary.com/dambqzrgf/image/upload/v1773485430/ujvixrsmk9ljvoldqaag.jpg',
    alt: 'やさしい色合いの花束',
    category: '花束',
    title: 'やさしい黄色をベースにした花束',
    description: 'やわらかい色味で、誕生日やお祝いに選ばれやすい。',
    price:'¥3,300',
    number:'7'
  },
  {
    src: 'https://res.cloudinary.com/dambqzrgf/image/upload/v1773485476/jmiejxlh4btmvrfqj2tt.jpg',
    alt: '赤系の花束',
    category: '花束',
    title: '赤系の花束',
    description: 'やわらかい色味で、誕生日やお祝いに選ばれやすい。',
    price:'¥4,400',
    number:'8'
  },
];

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-[#fffdf9] text-zinc-900">
      <header className="border-b border-zinc-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <Link
            to="/"
            >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">大石生花店</p>
            <h1 className="text-xl font-bold">作例一覧</h1>
            </Link>
          </div>

          <Link
            to="/"
            className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
          >
            トップへ戻る
          </Link>
        </div>
      </header>

      <main className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Works</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
              作例一覧ページ
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600 md:text-lg">
              花束やアレンジメントの雰囲気を一覧で見られるページです。気になる作例があれば、そのままLINE相談の参考にできます。
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work) => (
              <article
                key={work.title}
                className="group overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-120 overflow-hidden bg-zinc-100">
                  <img
                    src={work.src}
                    alt={work.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    {work.category}
                    {work.number}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-zinc-900">{work.title}</h3>
                    {work.price && (
                      <p className="mt-2 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-800">
                        {work.price}
                      </p>
                    )}
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{work.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-emerald-200 bg-white p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Contact</p>
                <h3 className="mt-3 text-2xl font-bold text-zinc-900">
                  気になる雰囲気があれば、そのままLINEでご相談いただけます。
                </h3>
                <p className="mt-3 text-base leading-8 text-zinc-600">
                  「この写真みたいな色味で」「この作例に近い雰囲気で」など、画像をもとに相談するとイメージ共有がしやすくなります。

                </p>
              </div>

              <a
                href="https://line.me/R/ti/p/@364jfrxc"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                LINEで相談する
              </a>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-300 bg-white px-7 py-4 text-base font-semibold text-zinc-800 transition hover:bg-zinc-50"
            >
              ホームページへ戻る
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

