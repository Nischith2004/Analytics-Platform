import { useEffect, useState } from "react";

import {
  Flame,
  RefreshCw,
  Download,
  MousePointerClick,
  MapPinned,
  Activity,
  Clock3,
} from "lucide-react";

import Loader from "../components/common/Loader";
import Error from "../components/common/Error";

import HeatmapCanvas from "../components/dashboard/HeatmapCanvas";
import PageSelector from "../components/dashboard/PageSelector";

import { getHeatmap } from "../services/analyticsService";

export default function Heatmap() {
  const [page, setPage] = useState("http://localhost:5173/");

  const [heatmap, setHeatmap] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const response = await getHeatmap(page);

        setHeatmap(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [page]);

  if (loading) return <Loader />;

  if (error) return <Error message="Unable to load heatmap." />;

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3">
              <Flame className="text-orange-500" size={28} />

              <h1 className="text-4xl font-bold">Heatmap Analytics</h1>
            </div>

            <p className="text-slate-400 mt-3">
              Visualize user click concentration across your pages.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="text-green-400">● Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar */}

      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6">
        <div className="flex flex-col lg:flex-row gap-5 justify-between">
          <PageSelector page={page} setPage={setPage} />

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700">
              <RefreshCw size={18} />
              Refresh
            </button>

            <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700">
              <Download size={18} />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Heatmap */}

      <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden">
        <HeatmapCanvas points={heatmap} />
      </div>

      {/* Bottom Stats */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Stat
          icon={<MousePointerClick />}
          title="Total Clicks"
          value={heatmap.length}
          color="text-cyan-400"
        />

        <Stat
          icon={<MapPinned />}
          title="Hot Regions"
          value="12"
          color="text-orange-400"
        />

        <Stat
          icon={<Activity />}
          title="Density"
          value="83%"
          color="text-green-400"
        />

        <Stat
          icon={<Clock3 />}
          title="Updated"
          value="Now"
          color="text-purple-400"
        />
      </div>
    </div>
  );
}

function Stat({
  icon,

  title,

  value,

  color,
}) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex justify-between">
        <div className={color}>{icon}</div>

        <span className="text-slate-500">{title}</span>
      </div>

      <h2 className="text-4xl font-bold mt-6">{value}</h2>
    </div>
  );
}
