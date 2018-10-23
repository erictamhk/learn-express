const express = require("express");
const router = express.Router();

// @route   GET api/data/test
// @desc    Tests data route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Data Works" }));

module.exports = router;
