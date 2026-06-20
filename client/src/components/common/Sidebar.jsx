import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

import {
  LayoutDashboard,
  Users,
  MousePointerClick,
  Settings,
  BarChart3,
  ChevronRight,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Sessions",
    icon: Users,
    path: "/sessions",
  },
  {
    title: "Heatmap",
    icon: MousePointerClick,
    path: "/heatmap",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-[#071120] border-r border-slate-800 flex flex-col">
      {/* Logo */}

      <div className="h-24 px-8 flex items-center border-b border-slate-800">
        <motion.div
          whileHover={{
            rotate: 360,
          }}
          transition={{
            duration: 0.7,
          }}
          className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center"
        >
          <BarChart3 className="text-white" />
        </motion.div>

        <div className="ml-4">
          <h1 className="text-xl font-bold">Analytics</h1>

          <p className="text-xs text-slate-400">User Tracking</p>
        </div>
      </div>

      {/* Menu */}

      <div className="flex-1 px-4 py-6">
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-4 px-3">
          Navigation
        </p>

        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  "relative flex items-center gap-4 px-4 py-4 rounded-2xl mb-3 transition-all",

                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white",
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="active"
                      className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-white"
                    />
                  )}

                  <Icon size={20} />

                  <span className="font-medium">{item.title}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800 p-5">
        <div className="bg-slate-900 rounded-2xl p-4">
          <div className="flex items-center">
            <img
              src="https://ui-avatars.com/api/?name=N"
              className="w-12 h-12 rounded-full"
            />

            <div className="ml-3">
              <h3 className="font-semibold">XYZ</h3>

              <p className="text-xs text-slate-400">ABC</p>
            </div>
          </div>

          <button className="mt-5 w-full bg-slate-800 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-blue-600 transition">
            <Settings size={18} />
            login Settings
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}
