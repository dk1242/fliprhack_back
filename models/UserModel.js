const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        username: {
            type: String,
            trim: true,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            trim: true,
            required: 'Email address is required',
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            possibleValues: ['Teacher', 'Student'],
        },
        subjects: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
