const express = require("express");
const router = express.Router();

// @route   GET api/backtests/test
// @desc    Tests backtests route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Backtests Works" }));

module.exports = router;
