import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsGrid from "../components/dashboard/StatsGrid";
import StatCard from "../components/dashboard/StatCard";
import SessionTable from "../components/dashboard/SessionTable";
import EventChart from "../components/charts/EventChart";

import Loader from "../components/common/Loader";
import Error from "../components/common/Error";

import useDashboard from "../hooks/useDashboard";

import {
  Users,
  MousePointerClick,
  Globe,
  Activity,
  TrendingUp,
  Clock,
} from "lucide-react";

import { motion } from "framer-motion";

function Dashboard() {
  const { summary, chart, sessions, loading, error } = useDashboard();

  if (loading) return <Loader />;

  if (error) return <Error message="Unable to load dashboard." />;

  const chartData = chart || [];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="space-y-8"
    >
      <DashboardHeader />

      {/* ====================== */}
      {/* Statistics */}
      {/* ====================== */}

      <StatsGrid>
        <StatCard
          title="Total Sessions"
          value={summary.totalSessions}
          icon={<Users size={30} />}
          color="from-blue-500 to-cyan-400"
          percentage="+18.4%"
        />

        <StatCard
          title="Total Events"
          value={summary.totalEvents}
          icon={<Activity size={30} />}
          color="from-violet-500 to-fuchsia-500"
          percentage="+12.2%"
        />

        <StatCard
          title="Clicks"
          value={summary.totalClicks}
          icon={<MousePointerClick size={30} />}
          color="from-green-500 to-emerald-400"
          percentage="+9.7%"
        />

        <StatCard
          title="Pages"
          value={summary.uniquePages}
          icon={<Globe size={30} />}
          color="from-orange-500 to-yellow-400"
          percentage="+5.3%"
        />
      </StatsGrid>

      {/* ====================== */}
      {/* Middle Grid */}
      {/* ====================== */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Chart */}

        <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold">Event Analytics</h2>

              <p className="text-slate-400 text-sm mt-1">
                User interaction trend this week
              </p>
            </div>

            <div className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400">
              Weekly
            </div>
          </div>

          <EventChart data={chartData} />
        </div>

        {/* Quick Insights */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <h2 className="text-xl font-bold mb-6">Quick Insights</h2>

          <div className="space-y-5">
            <div className="flex justify-between">
              <span className="text-slate-400">Avg Events / Session</span>

              <span className="font-semibold">
                {sessions.length
                  ? ((summary.totalEvents || 0) / sessions.length).toFixed(1)
                  : 0}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Active Users</span>

              <span className="font-semibold text-green-400">Online</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Growth</span>

              <span className="flex items-center gap-2 text-green-400">
                <TrendingUp size={18} />
                +12%
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Last Updated</span>

              <span className="flex items-center gap-2">
                <Clock size={16} />
                Just Now
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ====================== */}
      {/* Sessions */}
      {/* ====================== */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl">
        <div className="flex justify-between items-center p-6 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold">Recent Sessions</h2>

            <p className="text-slate-400 text-sm mt-1">
              Latest tracked user sessions
            </p>
          </div>

          <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
            View All
          </button>
        </div>

        <SessionTable sessions={sessions} />
      </div>
    </motion.div>
  );
}

export default Dashboard;
