const Event = require("../models/Event");

exports.getSessions = async (req, res) => {
  try {
    const sessions = await Event.aggregate([
      {
        $group: {
          _id: "$sessionId",

          totalEvents: {
            $sum: 1,
          },

          startedAt: {
            $min: "$timestamp",
          },

          lastActivity: {
            $max: "$timestamp",
          },
        },
      },

      {
        $project: {
          _id: 0,
          sessionId: "$_id",
          totalEvents: 1,
          startedAt: 1,
          lastActivity: 1,
        },
      },

      {
        $sort: {
          lastActivity: -1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      count: sessions.length,
      data: sessions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
