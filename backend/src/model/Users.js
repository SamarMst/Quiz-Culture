const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    score: { type: Number, default: 0 },
    joinedAt: { type: Date, default: Date.now },
});

mongoose.exports = mongoose.model('Users', usersSchema);