const taskModel = require("../models/tasks.model");

// GET
const getallTask = async (req, res) => {
    try {
        const tasks = await taskModel.find({
            user: req.userId
        }).sort({ createdAt: -1 });

        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Server error, please try again after sometimes" });
    }
};


// POST
const createTask = async (req, res) => {
    try {
        const { title, description, status } = req.body;

        const newTask = await taskModel.create(
            { title, description, status, user: req.userId }
        );

        res.status(201).json(newTask);

    } catch (err) {
        res.status(500).json({ message: "Server error, please try again after sometimes", message: err.message });
    }
}

// PUT
const updateTask = async (req, res) => {
    try {
        // ownership check
        const task = await taskModel.findOne({
            _id: req.params.id,
            user: req.userId
        });

        if (!task) {
            return res.status(401).json({ message: "Unauthorized: Access denied" });
        }

        const updatedTask = await taskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Task updated" });
    } catch (err) {
        res.status(500).json({ message: "Server error, please try again after sometimes" });
    }
};

// DELETE
const deleteTask = async (req, res) => {
    try {

        // ownership check
        const task = await taskModel.findOne({
            _id: req.params.id,
            user: req.userId
        });

        if (!task) {
            return res.status(401).json({ message: "Unauthorized: Access denied" });
        }

        await taskModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Task deleted" });
    } catch (err) {
        res.status(500).json({ message: "Server error, please try again after sometimes" });
    }
};

module.exports = { getallTask, createTask, updateTask, deleteTask };