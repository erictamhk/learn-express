const express = require("express");
const router = express.Router();

// @route   GET api/imports/test
// @desc    Tests imports route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Imports Works" }));

module.exports = router;
