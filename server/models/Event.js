const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      index: true,
    },

    eventType: {
      type: String,
      enum: ["page_view", "click"],
      required: true,
    },

    pageUrl: {
      type: String,
      required: true,
      index: true,
    },

    timestamp: {
      type: Date,
      default: Date.now,
    },

    click: {
      x: Number,
      y: Number,
    },

    userAgent: String,

    screen: {
      width: Number,
      height: Number,
    },

    viewport: {
      width: Number,
      height: Number,
    },

    referrer: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Event", eventSchema);
