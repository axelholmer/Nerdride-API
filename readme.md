# Nerdride-backend-API

## About
This is part of the Nerdride APP. This API presents Rides and Users which are stored in a PostgreSQL databaste 
Frontend is possible with the use of React. 
The backend is delivered with docker. 

The API does not implement basic CRUD system but instead have other functionalities such as:  
1. All the rides for a user containing distance, duration, discharge, max current and min current, start and end date
2. Raw data for a particular ride
3. Total ridden distance and duration for a user as well as total number of rides
4. Ridden distance and duration per month for a user

## Setup
Install package docker   

Build Docker image from the Dockerfil
$docker build -t nerdride

Start Backend server  with:    
$docker run --rm -it -p 3000:3000 --env-file=.env nerdride:latest

The startup process can take awhile.  

Beware: The docker-compose file is not used for anything.

## Backend Featues 
Access the API by "http://localhost:3000"  

The API uses JWT for authorization in req.
Bearer token:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhYmFzZSI6Im5lcmRyaWRlIiwiaWF0IjoxNjM5NDM2OTE0fQ.RvPAxU6h9bPcBvKVaUtDqd7UySNjK2zFWL0C0BD3in0

## Routes
1. http://localhost:3000/nerdrideapi/users/:user_id -> Get req: Needs id of specific user from DB. Response of the request is an array of all rides in a readable format of a given user.
2. http://localhost:3000/nerdrideapi/rides/:ride_id -> Get req: Needs id of specific ride. Response of the request is an array of all rides in JSON.  
3. http://localhost:3000/nerdrideapi/users/:user_id/stats -> Get req: Needs id of specific user from DB. Response of the request is a JSON of lifetime user stats
4. http://localhost:3000/nerdrideapi/users/:user_id/stats/monthly -> Get req: Needs id of specific user from DB. Response of the request is a JSON of monthly user stats



