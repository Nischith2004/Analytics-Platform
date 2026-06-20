import { motion } from "framer-motion";

import {
  Eye,
  ArrowUpRight,
  Clock3,
  MousePointerClick,
  Calendar,
  Circle,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function SessionRow({ session }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 transition-all hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,.15)]"
    >
      {/* Left Blue Border */}

      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition" />

      <div className="grid grid-cols-12 items-center gap-6 p-6">
        {/* Session */}

        <div className="col-span-4">
          <div className="flex items-center gap-3">
            <Circle
              size={12}
              fill="#22c55e"
              className="text-green-500 animate-pulse"
            />

            <div>
              <h3 className="font-semibold text-lg">
                {session.sessionId.slice(0, 18)}...
              </h3>

              <p className="text-xs text-slate-500 mt-1">Active Session</p>
            </div>
          </div>
        </div>

        {/* Events */}

        <div className="col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-cyan-500/10 flex items-center justify-center">
              <MousePointerClick size={18} className="text-cyan-400" />
            </div>

            <div>
              <p className="text-xs text-slate-500">Events</p>

              <h4 className="font-bold">{session.totalEvents}</h4>
            </div>
          </div>
        </div>

        {/* Started */}

        <div className="col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Calendar size={18} className="text-orange-400" />
            </div>

            <div>
              <p className="text-xs text-slate-500">Started</p>

              <h4 className="font-semibold">
                {new Date(session.startedAt).toLocaleTimeString([], {
                  hour: "2-digit",

                  minute: "2-digit",
                })}
              </h4>
            </div>
          </div>
        </div>

        {/* Last Activity */}

        <div className="col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Clock3 size={18} className="text-purple-400" />
            </div>

            <div>
              <p className="text-xs text-slate-500">Last Active</p>

              <h4 className="font-semibold">
                {new Date(session.lastActivity).toLocaleTimeString([], {
                  hour: "2-digit",

                  minute: "2-digit",
                })}
              </h4>
            </div>
          </div>
        </div>

        {/* Action */}

        <div className="col-span-2 flex justify-end">
          <Link to={`/sessions/${session.sessionId}`}>
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="group/button flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-medium shadow-lg transition"
            >
              <Eye size={18} />
              View
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
              />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
