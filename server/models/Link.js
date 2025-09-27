

// models/Link.js
const mongoose = require('mongoose');


const LinkSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
url: { type: String, required: true },
title: { type: String },
notes: { type: String },
createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Link', LinkSchema);