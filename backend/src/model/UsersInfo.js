const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersInfoSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
        min: 8,
        max: 120,
    },
    country: {
        type: String,
        required: true,
    },
    interests: {
        type: [String],
        required: true,
    },
});

model.exports = mongoose.model("UsersInfo", usersInfoSchema);