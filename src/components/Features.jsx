import { Gift, HandHeart, Building2, BarChart3, ShieldCheck } from "lucide-react";

const roles = [
  {
    icon: Gift,
    title: "Donors",
    desc: "Post items or funds you wish to give. Track requests and choose a receiver — or let us auto-assign a verified NGO.",
    anchor: "donate",
  },
  {
    icon: HandHeart,
    title: "Receivers",
    desc: "Request clothes, books, shoes, or essentials. Get matched quickly with nearby donations.",
    anchor: "receive",
  },
  {
    icon: Building2,
    title: "NGOs",
    desc: "Receive unclaimed donations, coordinate pickups, and distribute to communities in need.",
    anchor: "ngos",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-16" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            One platform. Three roles. Shared impact.
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Everyone plays a part — donors, receivers, and NGOs — connected by a fair and transparent matching system.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((r) => (
            <a key={r.title} href={`#${r.anchor}`} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3">
                <r.icon className="h-6 w-6 text-emerald-600" />
                <h3 className="text-lg font-semibold text-slate-900">{r.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-emerald-700 group-hover:underline">Learn more</div>
            </a>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-emerald-50 to-white">
            <div className="flex items-center gap-2 text-emerald-700 text-sm font-medium">
              <ShieldCheck className="h-4 w-4" /> Auto-assignment logic
            </div>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Unclaimed donations are never wasted</h3>
            <p className="mt-2 text-slate-600">
              When donors don’t choose a receiver, the system automatically assigns a verified NGO based on proximity, capacity, and priority needs.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-700">
              <li className="rounded-md bg-white border border-slate-200 px-3 py-2">Proximity based</li>
              <li className="rounded-md bg-white border border-slate-200 px-3 py-2">Capacity aware</li>
              <li className="rounded-md bg-white border border-slate-200 px-3 py-2">Need prioritization</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 text-slate-700 text-sm font-medium">
              <BarChart3 className="h-4 w-4 text-emerald-600" /> Admin dashboard
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Approve NGOs, monitor donations, and view real-time stats to keep the ecosystem healthy and fair.
            </p>
            <dl className="mt-4 space-y-2">
              <DashboardStat label="Total donations" value="12,534" />
              <DashboardStat label="Pending NGO approvals" value="18" />
              <DashboardStat label="Active requests" value="847" />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardStat({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2">
      <dt className="text-sm text-slate-600">{label}</dt>
      <dd className="text-sm font-semibold text-slate-900">{value}</dd>
    </div>
  );
}
