const express = require("express");
const app = express();

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
app.use(express.json());

// Routes
const availabilityRouter = require("./routes/availability");

app.get("/", (req, res) => {
  console.log("Here");
  res.json({ message: "Hi" });

});

app.use("/availability", availabilityRouter);

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
