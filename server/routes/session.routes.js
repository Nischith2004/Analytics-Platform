const express = require("express");

const router = express.Router();

const {
  getSessions,
  getSessionDetails,
} = require("../controllers/sessionController");

router.get("/", getSessions);
router.get("/:sessionId", getSessionDetails);

module.exports = router;
