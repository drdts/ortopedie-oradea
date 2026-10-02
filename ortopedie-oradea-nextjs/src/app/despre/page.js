export default function Despre() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Despre Dr. Dejeu Tudor Sergiu</h1>
        <p className="text-xl text-blue-700 font-medium">Medic Primar Ortopedie - Traumatologie</p>
      </header>

      <section className="prose max-w-none text-slate-700 space-y-6 leading-relaxed">
        <p>
          Sunt <strong>Dr. Dejeu Tudor Sergiu</strong>, medic primar în specialitatea Ortopedie și Traumatologie, cu activitate chirurgicală principală concentrată în cadrul Spitalului Clinic Pelican din Oradea.
        </p>
        <p>
          Misiunea mea este de a oferi fiecărui pacient o evaluare amănunțită și soluții terapeutice personalizate, de la tratamente conservatoare moderne până la intervenții chirurgicale de înaltă performanță. Utilizarea tehnicilor chirurgicale avansate, minim invazive, permite reducerea durerilor postoperatorii și o reintegrare rapidă în viața activă.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 pt-4 border-b pb-2">Domenii de Expertiză și Competențe</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Artroplastia totală de șold:</strong> Protezarea șoldului prin tehnici clasice și aborduri minim invazive.</li>
          <li><strong>Artroplastia de genunchi:</strong> Protezarea primară și de revizie a genunchiului pentru coxartroză / gonartroză avansată.</li>
          <li><strong>Chirurgie artroscopică:</strong> Intervenții minim invazive la nivelul genunchiului (suturi și rezecții parțiale de menisc, reconstrucții de ligament încrucișat anterior - LIA).</li>
          <li><strong>Traumatologie osteoarticulară:</strong> Tratarea de urgență sau cronică a fracturilor aparatului locomotor, osteosinteze stabile cu implanturi de ultimă generație.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-4 border-b pb-2">Locație Activitate</h2>
        <p>
          Consultațiile, investigațiile imagistice (Radiologie, RMN, CT) și intervențiile chirurgicale se realizează în mediu spitalicesc complet, beneficiind de dotările de top din cadrul <strong>Spitalului Clinic Pelican Oradea</strong> (Str. Corneliu Coposu, Nr. 2).
        </p>
      </section>
    </div>
  );
}