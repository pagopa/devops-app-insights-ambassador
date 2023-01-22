# devops-app-insights-ambassador

Application Insights Amabassador for docker and kubernetes

## How to use

### App Insights Availability

to push an event into app insight/availability, you can use this endpoint:

> <http://localhost:3000/availability/add> in POST

With this json body (all fields are mandatory):

```sh
{
  "id": "234",
  "name": "localhost",
  "message": "Questa è una prova",
  "duration": 100,
  "success": true,
  "runLocation": "westeurope"
}
```
