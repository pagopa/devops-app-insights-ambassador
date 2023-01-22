const express = require("express");
const router = express.Router();
let appInsights = require("applicationinsights");
let appInsightsAvailability = require('../service/availability');
const { Error } = require("applicationinsights/out/Declarations/Contracts/Generated/SeverityLevel");

appInsights.setup().setSendLiveMetrics(true).start();
let client = appInsights.defaultClient;

router.post("/add", (req, res) => {

  // const rawJson = {
  //   id: "123",
  //   name: "localhost",
  //   message: "Questa è una prova",
  //   duration: 100,
  //   success: true,
  //   runLocation: "westeurope"
  // }
  const rawJson =req.body

  try {
    appInsightsAvailability.pushAvailabilityEvent(client, rawJson)
    console.log(`Availability: ${JSON.stringify(rawJson)}`)
    res.status(200).send("Put event ok")
  } catch (error) {
    res.status(500).send(error)
  }
});

module.exports = router;
