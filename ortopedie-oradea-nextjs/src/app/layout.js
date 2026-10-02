import "./globals.css"; 
import Link from 'next/link';

export const metadata = {
  title: "Dr. Dejeu Tudor Sergiu | Ortopedie Oradea",
  description: "Medic primar Ortopedie si Traumatologie in Oradea. Consultatii si interventii chirurgicale la Spitalul Pelican.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="bg-slate-50 text-slate-800 font-sans flex flex-col min-h-screen">
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="font-bold text-xl text-blue-900 tracking-tight">
              DR. DEJEU TUDOR
            </Link>
            <div className="space-x-6 font-medium text-sm md:text-base">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/despre" className="hover:text-blue-600 transition">Despre</Link>
              <Link href="/articole" className="hover:text-blue-600 transition">Articole</Link>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
            <p className="font-semibold text-lg">DR. DEJEU TUDOR SERGIU</p>
            <p className="text-slate-400 text-sm">Medic primar Ortopedie si Traumatologie • Oradea</p>
            <p className="text-sm">Programări: <a href="tel:0747980848" className="text-blue-400 font-bold hover:underline">0747 980 848</a> | dejeutudor.sergiu@gmail.com</p>
            <p className="text-xs text-slate-500 pt-4">&copy; {new Date().getFullYear()} Ortopedie Oradea. Toate drepturile rezervate.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}