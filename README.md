# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Author Information

Credit to [Create React App] being used as my boilerplate

Nick Newburg
March 11th 2021

React, Express, Postgres, Axios, Knex, Semantic UI built simple web app

## Dependencies

After cloning the repository run `yarn install` or `npm install`
Then run `yarn build` to unpack React modules



`   "axios": "^0.21.1",
    "bcrypt": "^5.0.1",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "knex": "^0.95.1",
    "nodemon": "^2.0.7",
    "pg": "^8.5.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^2.0.3",
    "web-vitals": "^1.0.1"
`

## PostGres Setup with Knex

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04

Then run `sudo -u postgres psql`

`CREATE DATABASE modo`

Then within the project directory "modo" run:

`knex migrate:latest`

and

`knex seed:run`

To seed the database

## Available Scripts

Scripts to launch application

In the modo directory run

 `yarn start`

To launch the express server on port: 8080

`yarn react`

To launch React client on port: 3000



