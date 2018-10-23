const express = require("express");
const bodyParser = require("body-parser");

const backtests = require("./routes/api/backtests");
const imports = require("./routes/api/imports");
const strategies = require("./routes/api/strategies");
const data = require("./routes/api/data");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "variables.env" });
}

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!!"));

// Use Routes
app.use("/api/backtests", backtests);
app.use("/api/imports", imports);
app.use("/api/strategies", strategies);
app.use("/api/data", data);

const port = process.env.PORT || 7777;

app.listen(port, () => console.log(`Server running on port ${port}`));
