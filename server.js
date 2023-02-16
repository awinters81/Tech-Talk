//Express needs to be used...
const path = require("path");
const express = require("express");
const session = require("express-session");

// And that it has to render on the local host
const app = express();
const PORT = process.env.PORT || 3001;

// I know I have to be able to create a session everytime the user logs in and out
const sequelize = require("./config/config");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
