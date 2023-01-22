const express = require("express");
const router = express.Router();
let appInsights = require("applicationinsights");
let appInsightsAvailability = require('../service/availability')

appInsights.setup().setSendLiveMetrics(true).start();
let client = appInsights.defaultClient;

router.get("/add", (req, res) => {

  const dataJson = {
    id: "123",
    name: "localhost",
    message: "Questa è una prova",
    duration: 100,
    success: true,
    runLocation: "westeurope"
  }
  appInsightsAvailability.pushAvailabilityEvent(client, dataJson)
  console.log("Aval")
  res.status(200).send("Push Availability: ok")
});

module.exports = router;
