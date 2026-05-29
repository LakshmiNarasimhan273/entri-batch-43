const employeeModel = require("../models/employee.model");

// GET API
// Retrive all employees data from model
const allEmployees = (req, res) => {
    
    if(employeeModel.length === 0){
        return res.status(200).json({message: "No Employee Found in database"})
    }

    res.status(200).json(employeeModel);
}

// POST API
// Create a new employee record in our database(model array)
const createEmployee = (req, res) => {
    const { name, email, role } = req.body;

    const newEmployee = {
        // id: employeeModel.length + 1,
        id: Date.now().toString(),
        name,
        email,
        role
    };
    employeeModel.push(newEmployee);

    res.status(201).json({ message: "Employee data Added" });
};

// PUT API
// Update(some changes) the existing records
const updateEmployee = (req, res) => {
    const id = req.params.id;
    const { name, email, role } = req.body;

    const employee = employeeModel.find(data => data.id === id);

    if (!employee) {
        return res.status(404).json({ message: "Employee Profile Not Found" });
    };

    // update logic
    employee.name = name || employee.name;
    employee.email = email || employee.email;
    employee.role = role || employee.role;

    res.status(200).json({ message: "Employee data updated" });

};

// DELETE API
// remove the details of respective employee id
const deleteEmployee = (req, res) => {
    const id = req.params.id;

    const employee = employeeModel.findIndex(data => data.id === id);

    if (employee === -1) {
        return res.status(404).json({ message: "Employee Profile Not Found" });
    }

    const deletedEmployee = employeeModel.splice(employee, 1);
    res.status(200).json({ message: "Employee data removed" });
};

module.exports = { allEmployees, createEmployee, updateEmployee, deleteEmployee };