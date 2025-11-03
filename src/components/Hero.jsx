import { HandHeart, ArrowRight, ShieldCheck, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-emerald-700 text-xs font-medium">
              <ShieldCheck className="h-4 w-4" />
              Trusted by donors & NGOs
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Bridge generosity with real needs
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              KindBridge connects donors, receivers, and NGOs to make giving simple, transparent, and impactful. Donate items or funds, request what you need, and let our system match help where it matters most.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#donate" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700">
                <HandHeart className="h-5 w-5" /> Donate now
              </a>
              <a href="#ngos" className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-slate-800 font-medium hover:bg-slate-50">
                <Building2 className="h-5 w-5" /> For NGOs
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              If a donation remains unclaimed, we auto-assign a verified NGO to collect and distribute it.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-12 -z-0 bg-emerald-200/50 rounded-full blur-3xl" />
            <div className="relative rounded-2xl border border-emerald-200 bg-white p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <StatCard label="Active donations" value="1,284" trend="up" />
                <StatCard label="NGOs onboard" value="312" trend="up" />
                <StatCard label="Items matched" value="9,742" trend="up" />
                <StatCard label="Avg pickup time" value="24h" />
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm/5 opacity-90">Smart matching</p>
                    <p className="text-lg font-semibold">Auto-assign to verified NGOs</p>
                  </div>
                  <ArrowRight className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, trend }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <div className="mt-1 flex items-baseline gap-2">
        <p className="text-2xl font-semibold text-slate-900">{value}</p>
        {trend === "up" && (
          <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">+</span>
        )}
      </div>
    </div>
  );
}
