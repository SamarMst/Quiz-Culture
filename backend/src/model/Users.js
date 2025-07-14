const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    score: { type: Number, default: 0 },
    joinedAt: { type: Date, default: Date.now },
    lastVisit: { type: Date, default: Date.now },
    userInfo : {
        type: Schema.Types.ObjectId,
        ref: 'UserInfo',
    }
});

module.exports = mongoose.model('User', userSchema);