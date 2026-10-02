import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 space-y-16">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Ortopedie Oradea
        </h1>
        <p className="text-2xl md:text-3xl text-blue-700 font-semibold">
          Dr. Dejeu Tudor Sergiu
        </p>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Medic primar Ortopedie și Traumatologie. Soluții medicale avansate și tratamente personalizate pentru afecțiunile aparatului locomotor la Spitalul Clinic Pelican Oradea.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition">
            Fă o programare
          </Link>
          <Link href="/despre" className="bg-white text-slate-700 border border-slate-300 px-6 py-3 rounded-lg font-medium shadow-sm hover:bg-slate-50 transition">
            Despre mine
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-3">
          <h3 className="text-xl font-bold text-slate-900">Chirurgia Șoldului</h3>
          <p className="text-slate-600 text-sm leading-relaxed">Artroplastia totală de șold prin aborduri minim invazive pentru o recuperare rapidă și o mobilitate completă.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-3">
          <h3 className="text-xl font-bold text-slate-900">Chirurgia Genunchiului</h3>
          <p className="text-slate-600 text-sm leading-relaxed">Protezarea genunchiului (artroplastie), artroscopii, reconstrucții ligamentare (LIA) și tratamentul leziunilor de menisc.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 space-y-3">
          <h3 className="text-xl font-bold text-slate-900">Traumatologie</h3>
          <p className="text-slate-600 text-sm leading-relaxed">Tratamentul chirurgical și ortopedic al fracturilor, luxațiilor și entorselor complexe folosind tehnici moderne.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center space-y-4 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900">Cabinet Consultații</h2>
        <p className="text-slate-700">Activitatea medicală și intervențiile chirurgicale se desfășoară în cadrul <strong>Spitalului Clinic Pelican Oradea</strong>.</p>
        <div className="text-3xl font-extrabold text-blue-700 pt-2">
          <a href="tel:0747980848" className="hover:underline">0747 980 848</a>
        </div>
        <p className="text-xs text-slate-500">Sună direct pentru stabilirea unei consultații sau detalii suplimentare.</p>
      </section>
    </div>
  );
}