const express = require("express");
const router = express.Router();

const { receiveEvent } = require("../controllers/eventController");

router.post("/", receiveEvent);

module.exports = router;
