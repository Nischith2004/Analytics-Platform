import { Globe, ChevronDown } from "lucide-react";

const pages = [
  "http://localhost:5500/",
  "http://localhost:5500/login",
  "http://localhost:5500/dashboard",
  "http://localhost:5500/products",
  "http://localhost:5500/checkout",
  "http://localhost:5500/profile",
];

export default function PageSelector({ page, setPage }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3">
        <Globe size={20} className="text-cyan-400" />

        <select
          value={page}
          onChange={(e) => setPage(e.target.value)}
          className="bg-transparent outline-none text-white appearance-none pr-8"
        >
          {pages.map((item) => (
            <option key={item} value={item} className="bg-slate-900">
              {item}
            </option>
          ))}
        </select>

        <ChevronDown size={18} className="text-slate-500" />
      </div>
    </div>
  );
}
