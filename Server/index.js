require('dotenv').config();
const express = require('express');
const app = express();
const router = require("./route/routes");
const cors = require("cors");
const DBconnection = require("./Database/db")
app.use(cors());
DBconnection();
const port = process.env.PORT;
app.use('/',router);
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})