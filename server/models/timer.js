// Timer.js
import mongoose from "mongoose";

const timerSchema = new mongoose.Schema({
  name: String,
  duration: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Timer = mongoose.model("Timer", timerSchema);
export default Timer;  // ✅ Must have this
