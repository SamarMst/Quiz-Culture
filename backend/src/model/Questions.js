const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: {
    type: String,
    required: true},
    answer: {
    type: String,
    required: true},
    category: {
    type: String,
    required: true},
    difficulty: {
    type: String,
    required: true,
    enum: ['easy', 'medium', 'hard']
    },
    options: {
    type: [String],}
    })

module.exports = mongoose.model('Questions', questionSchema);