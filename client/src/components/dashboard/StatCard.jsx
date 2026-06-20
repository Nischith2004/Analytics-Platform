import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon,
  color = "from-blue-500 to-cyan-400",
  percentage = "+12.4%",
}) {
  const sparkline = [18, 24, 20, 35, 28, 42, 38];

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
    >
      {/* Glow */}

      <div
        className={`
                absolute
                -right-12
                -top-12
                h-40
                w-40
                rounded-full
                bg-gradient-to-br
                ${color}
                opacity-10
                blur-3xl
            `}
      />

      {/* Top */}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mt-3 text-5xl font-extrabold tracking-tight"
          >
            {value}
          </motion.h2>
        </div>

        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.15,
          }}
          className={`
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        ${color}
                        text-white
                        shadow-lg
                    `}
        >
          {icon}
        </motion.div>
      </div>

      {/* Bottom */}

      <div className="mt-8 flex items-end justify-between">
        {/* Growth */}

        <div>
          <div className="flex items-center gap-2 text-green-400">
            <TrendingUp size={18} />

            <span className="font-semibold">{percentage}</span>
          </div>

          <p className="mt-1 text-xs text-slate-500">Compared to last week</p>
        </div>

        {/* Sparkline */}

        <svg width="90" height="45" viewBox="0 0 90 45">
          <polyline
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={sparkline

              .map((v, i) => `${i * 15},${45 - v}`)

              .join(" ")}
          />
        </svg>
      </div>

      {/* Bottom Gradient */}

      <div
        className={`
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-full
                    bg-gradient-to-r
                    ${color}
                `}
      />
    </motion.div>
  );
}
