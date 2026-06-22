const express = require('express');
const router = express.Router();

const authentication = require("../security/authentication.security");

router.post("/register", authentication.registerApi);

router.post("/login", authentication.loginApi);

module.exports = router;