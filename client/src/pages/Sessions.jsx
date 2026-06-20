import { useMemo, useState } from "react";

import { Search, Filter, RefreshCw } from "lucide-react";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import SessionTable from "../components/dashboard/SessionTable";

import Loader from "../components/common/Loader";
import Error from "../components/common/Error";

import useDashboard from "../hooks/useDashboard";

export default function Sessions() {
  const {
    sessions,

    loading,

    error,
  } = useDashboard();

  const [search, setSearch] = useState("");

  const filteredSessions = useMemo(() => {
    return sessions.filter((session) =>
      session.sessionId.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, sessions]);

  if (loading) return <Loader />;

  if (error) return <Error message="Unable to load sessions." />;

  return (
    <div className="space-y-8">
      <DashboardHeader
        title="User Sessions"
        subtitle="Monitor and inspect tracked user sessions."
      />

      {/* Top Stats */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400 text-sm">Total Sessions</p>

          <h2 className="text-4xl font-bold mt-3">{sessions.length}</h2>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400 text-sm">Total Events</p>

          <h2 className="text-4xl font-bold mt-3">
            {sessions.reduce(
              (sum, s) => sum + s.totalEvents,

              0,
            )}
          </h2>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-400 text-sm">Active Sessions</p>

          <h2 className="text-4xl font-bold mt-3 text-green-400">
            {sessions.length}
          </h2>
        </div>
      </div>

      {/* Toolbar */}

      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <div className="flex items-center rounded-2xl bg-slate-900 border border-slate-800 px-4 py-3 w-full lg:w-96">
          <Search size={18} className="text-slate-500" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Session ID..."
            className="ml-3 bg-transparent outline-none w-full"
          />
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500">
            <Filter size={18} />
            Filters
          </button>

          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700">
            <RefreshCw size={18} />
            Refresh
          </button>
        </div>
      </div>

      {/* Session Table */}

      <SessionTable sessions={filteredSessions} />
    </div>
  );
}
