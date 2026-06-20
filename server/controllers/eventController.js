const Event = require("../models/Event");

exports.receiveEvent = async (req, res) => {
  try {
    const { sessionId, eventType, pageUrl } = req.body;

    if (!sessionId || !eventType || !pageUrl) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const event = await Event.create(req.body);

    res.status(201).json({
      success: true,
      data: event,
    });
  } catch (error) {
    console.log("EVENT ERROR:");
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
