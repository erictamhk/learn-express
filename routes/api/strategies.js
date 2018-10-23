const express = require("express");
const router = express.Router();

// @route   GET api/strategies/test
// @desc    Tests strategies route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Strategies Works" }));

module.exports = router;
