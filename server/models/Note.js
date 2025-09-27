// models/Note.js
const mongoose = require('mongoose');


const NoteSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
title: { type: String },
content: { type: String },
tags: [String],
createdAt: { type: Date, default: Date.now },
updatedAt: { type: Date }
});


module.exports = mongoose.model('Note', NoteSchema);