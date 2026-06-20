import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-slate-950 text-white overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
