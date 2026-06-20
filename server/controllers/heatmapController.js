const Event = require("../models/Event");

exports.getHeatmap = async (req, res) => {
  try {
    const { page } = req.query;

    if (!page) {
      return res.status(400).json({
        success: false,
        message: "Page URL is required",
      });
    }

    const clicks = await Event.find({
      pageUrl: page,

      eventType: "click",
    }).select("click -_id");

    res.status(200).json({
      success: true,

      totalClicks: clicks.length,

      data: clicks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};
