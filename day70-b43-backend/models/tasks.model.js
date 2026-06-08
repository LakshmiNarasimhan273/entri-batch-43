/*
    OLDER Model Method

    let tasks = [];

    module.exports = tasks;
 */

    // NEW Method for Database

const mongoose = require("mongoose");

// data structure definition
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        // validation rule
        // not-started, in-progress, completed
        enum: ["not-started", "in-progress", "completed"],
        required: true
    }
});

// collection creator
const Task = mongoose.model("tasks", taskSchema);
module.exports = Task;