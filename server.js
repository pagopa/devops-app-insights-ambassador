const express = require("express");
const app = express();
app.use(express.json());

// Routes
const availabilityRouter = require("./routes/availability");

app.get("/", (req, res) => {
  console.log("Here");
  res.json({ message: "Hi" });

});

app.use("/availability", availabilityRouter);

app.listen(3000);
