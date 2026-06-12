const taskModel = require("../models/tasks.model");

// GET
const getallTask = async (req, res) => {
    try {
        const tasks = await taskModel.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Server error, please try again after sometimes" });
    }
};


// POST
const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;

        const newTask = await taskModel.create({ title, description, status });

        res.status(201).json(newTask);

    } catch (err) {
        res.status(500).json({ message: "Server error, please try again after sometimes", message: err.message });
    }
}

// PUT
const updateTask = async (req, res) => {
    try{
        const updatedTask = await taskModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({message: "Task updated"});
    }catch(err){
        res.status(500).json({message: "Server error, please try again after sometimes"});
    }
};

// DELETE
const deleteTask = async (req, res) => {
    try{
        await taskModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Task deleted"});
    }catch(err){
        res.status(500).json({message: "Server error, please try again after sometimes"});
    }
};

module.exports = { getallTask, createTask, updateTask, deleteTask };