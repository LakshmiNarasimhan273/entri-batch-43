/* backend express server creation
import React from "react";
import Express from "express"; */

const express = require("express");
const app = express();

// listen -> express inbuild function -> it returns the http
// 3000, 3001, 3002, 8080, 8081
let port = 8080;

app.listen(port, () => {
    console.log("Server running on", port);
});