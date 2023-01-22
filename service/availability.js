const appInsights = require("applicationinsights");
const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
  type: "object",
  properties: {
    id: {type: "string"},
    name: {type: "string"},
    message: {type: "string"},
    duration: {type: "integer"},
    success: {type: "boolean"},
    runLocation: {type: "string"},
  },
  required: ["id", "name", "message", "duration", "success", "runLocation"],
  additionalProperties: false
}

const validate = ajv.compile(schema)


function pushAvailabilityEvent(client, data) {

  const valid = validate(data)

  if(!valid){
    console.error("Data object don't respect availability attributes")
    throw new Error("Data object don't respect availability attributes")
  } else {

    const avItem = (appInsights.Contracts.AvailabilityTelemetry = {
      id: data.id,
      name: data.name,
      message: data.message,
      duration: data.duration,
      success: data.success,
      runLocation: data.runLocation,
    });

    client.trackAvailability(avItem);
    client.flush();
  }
}

module.exports = { pushAvailabilityEvent }

