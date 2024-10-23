const express = require ("express"); 
const { dbConnection } = require("./config/config");
const app = express()
require("dotenv").config();
const PORT = process.env.PORT ||  3000



dbConnection()

app.listen(PORT, () => console.log(`Server in port ${PORT}`))