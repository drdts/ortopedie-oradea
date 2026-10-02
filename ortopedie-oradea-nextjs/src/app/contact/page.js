export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Contact și Programări</h1>
        <p className="text-slate-600">Contactați direct cabinetul pentru programarea unei consultații în Oradea.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Date de Contact</h2>
          
          <div className="space-y-4 text-slate-700">
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Medic titular</p>
              <p className="text-lg font-bold text-slate-900">Dr. Dejeu Tudor Sergiu</p>
            </div>
            
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Telefon Programări</p>
              <p className="text-xl font-bold text-blue-600"><a href="tel:0747980848" className="hover:underline">0747 980 848</a></p>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">E-mail</p>
              <p className="font-medium text-slate-900">dejeutudor.sergiu@gmail.com</p>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Locație Spital</p>
              <p className="font-medium text-slate-900">Spitalul Clinic Pelican Oradea</p>
              <p className="text-sm text-slate-500">Str. Corneliu Coposu, Nr. 2, Oradea, Bihor</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Locație pe Hartă</h2>
          <div className="w-full h-80 rounded-xl overflow-hidden shadow-inner bg-slate-100 relative border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m4!2s0x474647fb3856b3ab%3A0xb3debb7d0a649392!2sSpitalul+Clinic+Pelican!5m2!1sro!2sro" 
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}