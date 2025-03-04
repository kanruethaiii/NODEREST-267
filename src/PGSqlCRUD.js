const express = require('express');
const Sequelize = require('sequelize');
const app = express();

// Parse incoming requests
app.use(express.json());

// Set DB URL
const dbUrl = 'postgres://webadmin:';

// Create a connection to the database
const sequelize = new Sequelize(dbUrl);
