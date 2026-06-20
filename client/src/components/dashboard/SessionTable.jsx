import { motion } from "framer-motion";

import { Eye, Clock3, MousePointerClick, ArrowUpRight } from "lucide-react";

import { Link } from "react-router-dom";

export default function SessionTable({ sessions = [] }) {
  return (
    <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
      {/* Header */}

      <div className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <div>
          <h2 className="text-2xl font-bold">Recent Sessions</h2>

          <p className="text-slate-400 text-sm mt-1">
            Latest user activity captured by tracker
          </p>
        </div>

        <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
          View All
        </button>
      </div>

      {/* Body */}

      <div className="p-5 space-y-4">
        {sessions.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            No sessions found.
          </div>
        ) : (
          sessions.map((session, index) => (
            <motion.div
              key={session.sessionId}
              initial={{
                opacity: 0,

                y: 20,
              }}
              animate={{
                opacity: 1,

                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -3,
              }}
              className="rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500 transition-all"
            >
              <div className="flex items-center justify-between p-6">
                {/* Left */}

                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

                    <h3 className="font-semibold text-lg">
                      {session.sessionId.slice(0, 18)}...
                    </h3>
                  </div>

                  <p className="text-slate-500 mt-2">Session ID</p>
                </div>

                {/* Center */}

                <div className="hidden lg:flex items-center gap-12">
                  {/* Events */}

                  <div className="flex items-center gap-3">
                    <MousePointerClick className="text-cyan-400" size={18} />

                    <div>
                      <p className="text-slate-400 text-sm">Events</p>

                      <h4 className="font-semibold">{session.totalEvents}</h4>
                    </div>
                  </div>

                  {/* Started */}

                  <div className="flex items-center gap-3">
                    <Clock3 className="text-orange-400" size={18} />

                    <div>
                      <p className="text-slate-400 text-sm">Started</p>

                      <h4 className="font-semibold">
                        {new Date(session.startedAt).toLocaleTimeString()}
                      </h4>
                    </div>
                  </div>

                  {/* Last */}

                  <div>
                    <p className="text-slate-400 text-sm">Last Activity</p>

                    <h4 className="font-semibold">
                      {new Date(session.lastActivity).toLocaleTimeString()}
                    </h4>
                  </div>
                </div>

                {/* Right */}

                <Link to={`/sessions/${session.sessionId}`}>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl"
                  >
                    <Eye size={18} />
                    View
                    <ArrowUpRight size={16} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
