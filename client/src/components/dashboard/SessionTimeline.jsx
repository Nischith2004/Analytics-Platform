import { motion } from "framer-motion";

import {
  MousePointerClick,
  Globe,
  ScrollText,
  CircleDot,
  Clock3,
} from "lucide-react";

export default function SessionTimeline({ events = [] }) {
  if (!events.length) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center text-slate-400">
        No events available.
      </div>
    );
  }

  const getEventConfig = (eventType) => {
    switch (eventType?.toLowerCase()) {
      case "click":
        return {
          icon: MousePointerClick,

          color: "text-blue-400",

          bg: "bg-blue-500/10",

          title: "Mouse Click",
        };

      case "pageview":

      case "page_view":
        return {
          icon: Globe,

          color: "text-green-400",

          bg: "bg-green-500/10",

          title: "Page View",
        };

      case "scroll":
        return {
          icon: ScrollText,

          color: "text-orange-400",

          bg: "bg-orange-500/10",

          title: "Scroll",
        };

      default:
        return {
          icon: CircleDot,

          color: "text-purple-400",

          bg: "bg-purple-500/10",

          title: eventType || "Event",
        };
    }
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">User Journey Timeline</h2>

        <p className="text-slate-400 mt-2">
          Complete sequence of user interactions.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}

        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent" />

        {events.map((event, index) => {
          const config = getEventConfig(event.eventType);

          const Icon = config.icon;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,

                x: -30,
              }}
              animate={{
                opacity: 1,

                x: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="relative flex gap-6 mb-8"
            >
              {/* Icon */}

              <div
                className={`

                                        z-10

                                        flex

                                        h-16

                                        w-16

                                        items-center

                                        justify-center

                                        rounded-2xl

                                        ${config.bg}

                                        border

                                        border-slate-700

                                    `}
              >
                <Icon size={24} className={config.color} />
              </div>

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -4,

                  scale: 1.01,
                }}
                className="flex-1 rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-lg transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{config.title}</h3>

                    <p className="text-slate-400 mt-1">{event.pageUrl}</p>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock3 size={16} />

                    {new Date(event.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",

                      minute: "2-digit",

                      second: "2-digit",
                    })}
                  </div>
                </div>

                {/* Details */}

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.target && (
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Target
                      </p>

                      <p className="mt-1 font-medium break-all">
                        {event.target}
                      </p>
                    </div>
                  )}

                  {event.element && (
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Element
                      </p>

                      <p className="mt-1 font-medium">{event.element}</p>
                    </div>
                  )}

                  {event.x !== undefined && event.y !== undefined && (
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Coordinates
                      </p>

                      <p className="mt-1">
                        ({event.x}, {event.y})
                      </p>
                    </div>
                  )}

                  {event.eventType && (
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Event Type
                      </p>

                      <p className="mt-1">{event.eventType}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
