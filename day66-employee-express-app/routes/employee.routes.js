const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee.controller");

// http://localhost:8080/employees
router.get("/", employeeController.allEmployees);

// http://localhost:8080/employees
router.post("/", employeeController.createEmployee);

// http://localhost:8080/employees/<id>
router.put("/:id", employeeController.updateEmployee);

// http://localhost:8080/employees/<id>
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;