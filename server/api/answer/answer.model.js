'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AnswerSchema = new Schema({
	_question: {type: Schema.ObjectId, ref: 'Question'},
	user: String,
 	answer: String,
 	description: String,
 	like: Number,
 	created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Answer', AnswerSchema);