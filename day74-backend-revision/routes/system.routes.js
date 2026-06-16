const os = require("os");
const express = require("express");
const router = express.Router();

router.get("/my-info", (req, res) => {
    let platform = os.platform();
    let version = os.version();
    let arch = os.arch();
    res.status(200).json({systemPlatform: platform, currentVersion: version, architecture: arch});
});

module.exports = router;