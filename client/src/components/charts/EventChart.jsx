import { useState } from "react";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

import { Activity } from "lucide-react";

const sampleData = [
  { day: "Mon", events: 22 },
  { day: "Tue", events: 38 },
  { day: "Wed", events: 31 },
  { day: "Thu", events: 54 },
  { day: "Fri", events: 48 },
  { day: "Sat", events: 72 },
  { day: "Sun", events: 60 },
];

export default function EventChart({ data = sampleData }) {
  const [filter, setFilter] = useState("Week");

  const filters = ["Today", "Week", "Month"];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 shadow-xl overflow-hidden">
      {/* Header */}

      <div className="flex items-center justify-between p-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="text-cyan-400" size={20} />

            <h2 className="text-xl font-bold">Events Analytics</h2>
          </div>

          <p className="text-slate-400 text-sm mt-2">User activity over time</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

            <span className="text-green-400 text-xs">Live</span>
          </div>

          <div className="flex rounded-xl bg-slate-950 p-1">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`

                                        px-4

                                        py-2

                                        rounded-lg

                                        text-sm

                                        transition

                                        ${
                                          filter === item
                                            ? "bg-blue-600 text-white"
                                            : "text-slate-400 hover:text-white"
                                        }

                                    `}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-3 border-b border-slate-800">
        <div className="p-6">
          <p className="text-slate-500 text-sm">Total Events</p>

          <h3 className="text-3xl font-bold mt-2">324</h3>
        </div>

        <div className="p-6 border-x border-slate-800">
          <p className="text-slate-500 text-sm">Avg / Day</p>

          <h3 className="text-3xl font-bold mt-2">46</h3>
        </div>

        <div className="p-6">
          <p className="text-slate-500 text-sm">Growth</p>

          <h3 className="text-3xl font-bold mt-2 text-green-400">+18%</h3>
        </div>
      </div>

      {/* Chart */}

      <div className="h-[360px] p-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,

              right: 20,

              left: 20,

              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorEvents" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.45} />

                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              stroke="#94A3B8"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#0F172A",

                border: "1px solid #1E293B",

                borderRadius: "16px",

                color: "#fff",
              }}
              cursor={{
                stroke: "#3B82F6",

                strokeWidth: 1,
              }}
            />

            <Area
              type="monotone"
              dataKey="events"
              stroke="#3B82F6"
              strokeWidth={4}
              fill="url(#colorEvents)"
              animationDuration={1200}
              activeDot={{
                r: 7,

                fill: "#fff",

                stroke: "#3B82F6",

                strokeWidth: 3,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
