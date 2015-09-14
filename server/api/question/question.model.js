'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
	user: String,
	question: String,
	description: String,
	created_at: { type: Date, default: Date.now },
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
});


module.exports = mongoose.model('Question', QuestionSchema);