import { useState, useEffect } from "react";

import { getHeatmap, getPages } from "../services/analyticsService";

export default function useHeatmap() {
  const [page, setPage] = useState("http://localhost:5500/");

  const [points, setPoints] = useState([]);

  const [pages, setPages] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [heat, p] = await Promise.all([getHeatmap(page), getPages()]);

      setPoints(heat);

      setPages(p);

      setLoading(false);
    }

    load();
  }, [page]);

  return {
    page,

    setPage,

    pages,

    points,

    loading,
  };
}
s;
