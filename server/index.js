// had to eit package.json and fix main: to target this file
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {SERVER_PORT} = process.env;
const authCtrl = require("./controllers/authController")

// below line creates our server, allows for listening
const app = express();
// below we are adding top-level middleware to help axios work with cors
app.use(cors());
// without below code, data will still be sent, but will be ignored
app.use(express.json());

app.get("/login", authCtrl.login)
app.get("/colors", authCtrl.getColors)



app.listen(SERVER_PORT, () => console.log(`Your server is running on port: ${SERVER_PORT}`));