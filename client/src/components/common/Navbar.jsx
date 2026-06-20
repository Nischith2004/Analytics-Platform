import { motion } from "framer-motion";

import { Search, Bell, ChevronDown, Sparkles } from "lucide-react";

export default function Navbar() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="sticky top-0 z-40 backdrop-blur-xl bg-[#020817]/80 border-b border-slate-800"
    >
      <div className="h-20 px-10 flex items-center justify-between">
        {/* Left */}

        <div>
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-cyan-400" />

            <span className="text-sm text-slate-400">{greeting}, XYZ 👋</span>
          </div>

          <h1 className="text-3xl font-bold mt-1">Analytics Dashboard</h1>
        </div>

        {/* Right */}

        <div className="flex items-center gap-5">
          {/* Search */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="hidden lg:flex items-center w-80 px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800"
          >
            <Search size={18} className="text-slate-500" />

            <input
              type="text"
              placeholder="Search sessions..."
              className="ml-3 w-full bg-transparent outline-none placeholder:text-slate-500"
            />
          </motion.div>

          {/* Live */}

          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

            <span className="text-green-400 text-sm">Live</span>
          </div>

          {/* Notification */}

          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.92,
            }}
            className="relative w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center"
          >
            <Bell size={20} />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
          </motion.button>

          {/* Profile */}

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="flex items-center gap-3 cursor-pointer bg-slate-900 border border-slate-800 rounded-2xl px-3 py-2"
          >
            <img
              src="https://ui-avatars.com/api/?background=2563eb&color=fff&name=N"
              alt="Profile"
              className="w-11 h-11 rounded-full"
            />

            <div className="hidden md:block">
              <h4 className="font-semibold">XYZ</h4>

              <p className="text-xs text-slate-400">Admin</p>
            </div>

            <ChevronDown size={18} className="text-slate-500" />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
