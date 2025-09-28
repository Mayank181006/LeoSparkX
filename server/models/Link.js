// models/Link.js
import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  url: { type: String, required: true },
  title: { type: String },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Link = mongoose.model('Link', LinkSchema);
export default Link;
