const express = require('express');
const router = express.Router();

const taskController = require("../controllers/tasks.controller");
const authMiddleware = require("../middleware/authz.middleware");

router.get("/", authMiddleware, taskController.getallTask);

router.post("/", authMiddleware, taskController.createTask);

router.put("/:id", authMiddleware, taskController.updateTask);

router.delete("/:id", authMiddleware, taskController.deleteTask);

module.exports = router;