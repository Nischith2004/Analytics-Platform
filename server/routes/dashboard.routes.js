const express = require("express");

const router = express.Router();

const {
  getSummary,
  getChartData,
  getPages,
} = require("../controllers/dashboardController");

router.get("/summary", getSummary);
router.get("/chart", getChartData);
router.get("/pages", getPages);

module.exports = router;
