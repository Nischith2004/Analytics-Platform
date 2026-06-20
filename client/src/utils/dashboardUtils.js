export function calculateStats(sessions) {
  const totalSessions = sessions.length;

  const totalEvents = sessions.reduce(
    (sum, session) => sum + session.totalEvents,

    0,
  );

  return {
    totalSessions,

    totalEvents,
  };
}
