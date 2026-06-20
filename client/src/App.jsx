import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Sessions from "./pages/Sessions";
import SessionDetails from "./pages/SessionDetails";
import Heatmap from "./pages/Heatmap";

import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/sessions" element={<Sessions />} />

          <Route path="/sessions/:id" element={<SessionDetails />} />

          <Route path="/heatmap" element={<Heatmap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
