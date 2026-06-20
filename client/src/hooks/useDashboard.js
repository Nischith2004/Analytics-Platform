import { useEffect, useState } from "react";

import {
  getDashboardSummary,
  getDashboardChart,
  getSessions,
} from "../services/analyticsService";

export default function useDashboard() {
  const [summary, setSummary] = useState(null);

  const [chart, setChart] = useState([]);

  const [sessions, setSessions] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const [summaryData, chartData, sessionData] = await Promise.all([
          getDashboardSummary(),

          getDashboardChart(),

          getSessions(),
        ]);

        setSummary(summaryData);

        setChart(chartData);

        setSessions(sessionData.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    summary,

    chart,

    sessions,

    loading,

    error,
  };
}
