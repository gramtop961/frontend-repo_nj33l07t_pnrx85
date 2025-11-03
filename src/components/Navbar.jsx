import { Gift, Users, Building2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <Gift className="h-6 w-6 text-emerald-600" />
          <span>KindBridge</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#donate" className="hover:text-emerald-700 transition-colors">Donate</a>
          <a href="#receive" className="hover:text-emerald-700 transition-colors">Receive</a>
          <a href="#ngos" className="hover:text-emerald-700 transition-colors flex items-center gap-1"><Building2 className="h-4 w-4"/>NGOs</a>
          <a href="#community" className="hover:text-emerald-700 transition-colors flex items-center gap-1"><Users className="h-4 w-4"/>Community</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Sign in</button>
          <button className="inline-flex items-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700">Get Started</button>
        </div>
      </div>
    </header>
  );
}
