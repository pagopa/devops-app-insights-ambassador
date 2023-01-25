# devops-app-insights-ambassador

Application Insights Amabassador for docker and kubernetes

## How to use

### Pre-requisites

1. add this env variable to your terminal `APPLICATIONINSIGHTS_CONNECTION_STRING`, is the applications insights connection string. Without this the app cannot run.

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

## Tests

### Thunder tests

Inside the folder thunder-tests you can find the collection with tests for Thunder extension

### Docker compose

To use docker compose for tests you can launch into the root folder this command (and force every time the docker build)

```sh
docker-compose up  --build 
```
