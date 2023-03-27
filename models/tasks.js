const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlength: [20, "can not be less than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model("Task", TaskSchema)
