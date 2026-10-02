import Link from 'next/link';

export default function Articole() {
  const posts = [
    {
      slug: "artroplastia-sold",
      title: "Artroplastia de Șold (Proteza de Șold) - Ce trebuie să știi?",
      excerpt: "Aflați care sunt indicațiile majore pentru protezarea șoldului, în ce constă intervenția chirurgicală și cum decurge procesul de recuperare postoperator.",
      date: "2026"
    },
    {
      slug: "leziunile-de-menisc",
      title: "Leziunile de Menisc: Simptome, Diagnostic și Tratament Artroscopic",
      excerpt: "Durerea de genunchi la răsucire sau blocajul articular pot ascunde o ruptură de menisc. Descoperiți avantajele chirurgiei artroscopice moderne.",
      date: "2026"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Articole Medicale & Sfaturi Utile</h1>
        <p className="text-slate-600">Informații medicale explicate pe înțelesul tuturor pentru sănătatea aparatului tău locomotor.</p>
      </header>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-3">
            <span className="text-xs font-semibold text-slate-400">{post.date}</span>
            <h2 className="text-2xl font-bold text-slate-950 hover:text-blue-600 transition">
              {post.title}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {post.excerpt}
            </p>
            <div className="pt-2">
              <span className="text-blue-600 font-semibold text-sm hover:underline cursor-pointer">
                Citește tot articolul →
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}