const Event = require("../models/Event");

exports.getSummary = async (req, res) => {
  try {
    const totalSessions = await Event.distinct("sessionId");

    const totalEvents = await Event.countDocuments();

    const totalClicks = await Event.countDocuments({
      eventType: "click",
    });

    const uniquePages = await Event.distinct("pageUrl");

    res.json({
      success: true,

      data: {
        totalSessions: totalSessions.length,

        totalEvents,

        totalClicks,

        uniquePages: uniquePages.length,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,

      message: err.message,
    });
  }
};

exports.getChartData = async (req, res) => {
  try {
    const chart = await Event.aggregate([
      {
        $group: {
          _id: {
            $dayOfWeek: "$timestamp",
          },

          events: {
            $sum: 1,
          },
        },
      },

      {
        $sort: {
          _id: 1,
        },
      },
    ]);

    const days = ["", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const data = chart.map((item) => ({
      day: days[item._id],

      events: item.events,
    }));

    res.json({
      success: true,

      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,

      message: err.message,
    });
  }
};

exports.getPages = async (req, res) => {
  try {
    const pages = await Event.distinct("pageUrl");

    res.json({
      success: true,

      data: pages,
    });
  } catch (err) {
    res.status(500).json({
      success: false,

      message: err.message,
    });
  }
};
