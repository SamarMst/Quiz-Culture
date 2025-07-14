const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
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

module.exports = mongoose.model("UserInfo", userInfoSchema);