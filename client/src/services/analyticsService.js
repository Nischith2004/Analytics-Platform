import api from "./api";

export const getSessions = async () => {
  const response = await api.get("/sessions");
  return response.data;
};

export const getSessionDetails = async (sessionId) => {
  const response = await api.get(`/sessions/${sessionId}`);
  return response.data;
};

export const getHeatmap = async (pageUrl) => {
  const response = await api.get("/heatmap", {
    params: {
      page: pageUrl,
    },
  });

  return response.data;
};

export const getDashboardSummary = async () => {
  const response = await api.get("/dashboard/summary");

  return response.data;
};

export const getDashboardChart = async () => {
  const { data } = await api.get("/dashboard/chart");

  return data.data;
};

export const getPages = async () => {
  const { data } = await api.get("/pages");

  return data.data;
};
