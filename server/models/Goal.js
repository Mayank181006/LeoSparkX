// models/Goal.js
const mongoose = require('mongoose');


const GoalSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
title: { type: String, required: true },
description: { type: String },
targetDate: { type: Date },
isCompleted: { type: Boolean, default: false },
createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Goal', GoalSchema);