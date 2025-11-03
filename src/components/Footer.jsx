import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">KindBridge</h3>
            <p className="mt-2 text-sm text-slate-600">A simple way to connect donations with real needs.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">For donors</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a href="#donate" className="hover:text-emerald-700">Post a donation</a></li>
              <li><a href="#" className="hover:text-emerald-700">How matching works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">For NGOs</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-600">
              <li><a href="#ngos" className="hover:text-emerald-700">Get verified</a></li>
              <li><a href="#" className="hover:text-emerald-700">Logistics & pickup</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Connect</h4>
            <div className="mt-2 flex items-center gap-3 text-slate-600">
              <a href="#" aria-label="Email" className="hover:text-emerald-700"><Mail className="h-5 w-5" /></a>
              <a href="#" aria-label="GitHub" className="hover:text-emerald-700"><Github className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500">© {new Date().getFullYear()} KindBridge. All rights reserved.</div>
      </div>
    </footer>
  );
}
