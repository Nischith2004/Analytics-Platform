import { motion } from "framer-motion";

export default function HeatmapCanvas({ points = [] }) {
  return (
    <div className="relative w-full h-[650px] overflow-hidden bg-[#0B1220]">
      {/* Browser */}

      <div className="absolute inset-0">
        {/* Browser Header */}

        <div className="h-12 border-b border-slate-800 bg-slate-900 flex items-center px-6">
          <div className="ml-40 pl-40 mt-500 pt-500 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>

            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <div className="ml-8 flex-1 rounded-lg bg-slate-800 h-8 flex items-center px-4 text-sm text-slate-400">
            https://localhost:5500
          </div>
        </div>

        {/* Fake Website */}

        <div className="relative h-full p-10">
          <div className="rounded-3xl bg-slate-900 p-10 border border-slate-800 h-full">
            <div className="h-12 w-80 rounded-xl bg-slate-800 mb-8"></div>

            <div className="grid grid-cols-3 gap-6">
              <div className="h-44 rounded-2xl bg-slate-800"></div>

              <div className="h-44 rounded-2xl bg-slate-800"></div>

              <div className="h-44 rounded-2xl bg-slate-800"></div>
            </div>

            <div className="mt-10 space-y-5">
              <div className="h-6 rounded bg-slate-800 w-full"></div>

              <div className="h-6 rounded bg-slate-800 w-5/6"></div>

              <div className="h-6 rounded bg-slate-800 w-4/6"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Heat Points */}

      {points.map((point, index) => (
        <motion.div
          key={index}
          initial={{
            scale: 0,

            opacity: 0,
          }}
          animate={{
            scale: 1,

            opacity: 0.85,
          }}
          transition={{
            delay: index * 0.03,
          }}
          className="absolute"
          style={{
            left: `${point.x}px`,

            top: `${point.y}px`,
          }}
        >
          {/* Outer Glow */}

          <div
            className="absolute rounded-full"
            style={{
              width: 60,

              height: 60,

              left: -30,

              top: -30,

              background:
                "radial-gradient(circle, rgba(255,0,0,.35) 0%, rgba(255,165,0,.15) 45%, transparent 80%)",
            }}
          />

          {/* Middle */}

          <div
            className="absolute rounded-full"
            style={{
              width: 30,

              height: 30,

              left: -15,

              top: -15,

              background:
                "radial-gradient(circle, rgba(255,80,0,.55), transparent)",
            }}
          />

          {/* Center */}

          <div className="w-3 h-3 rounded-full bg-red-500" />
        </motion.div>
      ))}

      {/* Legend */}

      <div className="absolute bottom-8 right-8 rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
        <h3 className="font-semibold mb-4">Heat Intensity</h3>

        <div className="flex items-center gap-3">
          <span className="text-sm">Low</span>

          <div className="w-36 h-3 rounded-full bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600"></div>

          <span className="text-sm">High</span>
        </div>
      </div>
    </div>
  );
}
