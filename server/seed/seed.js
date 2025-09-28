// import dotenv from "dotenv";
// import connectDB from "../config/db.js";
// import bcrypt from "bcryptjs";

// // Import all models






// // import Project from "../models/Project.js";

// import Goal from "../models/Goal.js";
// import Habit from "../models/Habit.js";
// import Link from "../models/Link.js";
// import Note from "../models/Note.js";
// import Task from "../models/Task.js";
// import Timer from "../models/Timer.js";
// import User from "../models/User.js";

// dotenv.config();

// const importData = async () => {
//   try {
//     // Connect to DB
//     await connectDB();

//     // Clear existing collections
//     await Promise.all([
//       User.deleteMany(),
//       Goal.deleteMany(),
//       Task.deleteMany(),
//       Note.deleteMany(),
//       Link.deleteMany(),
//       Habit.deleteMany(),
//       Project.deleteMany(),
//       Timer.deleteMany(),
//     ]);
//     console.log("✅ Existing collections cleared");

//     // Hash passwords before inserting users
//     const users = await User.insertMany([
//       {
//         name: "John Doe",
//         email: "john@example.com",
//         password: await bcrypt.hash("123456", 10),
//       },
//       {
//         name: "Jane Doe",
//         email: "jane@example.com",
//         password: await bcrypt.hash("abcdef", 10),
//       },
//     ]);
//     console.log("✅ Users Imported");

//     // Insert sample Goals
//     await Goal.insertMany([
//       { title: "Learn Node.js", user: users[0]._id },
//       { title: "Finish Project", user: users[1]._id },
//     ]);
//     console.log("✅ Goals Imported");

//     // Insert sample Tasks
//     await Task.insertMany([
//       { title: "Task 1", completed: false, user: users[0]._id },
//       { title: "Task 2", completed: true, user: users[1]._id },
//     ]);
//     console.log("✅ Tasks Imported");

//     // Insert other sample data
//     await Promise.all([
//       Note.insertMany([{ title: "Note 1", content: "Sample note", user: users[0]._id }]),
//       Link.insertMany([{ title: "Google", url: "https://google.com", user: users[0]._id }]),
//       Habit.insertMany([{ name: "Meditation", frequency: "Daily", user: users[0]._id }]),
//       Project.insertMany([{ name: "Project Alpha", description: "Test project", user: users[0]._id }]),
//       Timer.insertMany([{ name: "Pomodoro", duration: 25, user: users[0]._id }]),
//     ]);
    
//     console.log("✅ Other collections Imported");

//     console.log("🎉 All data imported successfully!");
//     process.exit();
//   } catch (error) {
//     console.error("❌ Error importing data:", error);
//     process.exit(1);
//   }
// };

// importData();




import dotenv from "dotenv";
import connectDB from "../config/db.js";
import bcrypt from "bcryptjs";

// Import all models
import Goal from "../models/Goal.js";
import Habit from "../models/Habit.js";
import Link from "../models/Link.js";
import Note from "../models/Note.js";
import Task from "../models/Task.js";
// import Timer from "../models/Timer.js";

import User from "../models/User.js";

dotenv.config();

const importData = async () => {
  try {
    // 1️⃣ Connect to MongoDB
    await connectDB();

    // 2️⃣ Clear existing collections
    console.log("🧹 Clearing existing collections...");
    await Promise.all([
      User.deleteMany(),
      Goal.deleteMany(),
      Task.deleteMany(),
      Note.deleteMany(),
      Link.deleteMany(),
      Habit.deleteMany(),
      Project.deleteMany(),
      Timer.deleteMany(),
    ]);
    console.log("✅ Collections cleared");

    // 3️⃣ Create sample users with hashed passwords
    console.log("👥 Importing users...");
    const users = await User.insertMany([
      { name: "John Doe", email: "john@example.com", password: await bcrypt.hash("123456", 10) },
      { name: "Jane Doe", email: "jane@example.com", password: await bcrypt.hash("abcdef", 10) },
    ]);
    console.log("✅ Users imported");

    // 4️⃣ Import Goals
    console.log("🎯 Importing goals...");
    await Goal.insertMany([
      { title: "Learn Node.js", user: users[0]._id },
      { title: "Finish Project", user: users[1]._id },
    ]);
    console.log("✅ Goals imported");

    // 5️⃣ Import Tasks
    console.log("📝 Importing tasks...");
    await Task.insertMany([
      { title: "Task 1", completed: false, user: users[0]._id },
      { title: "Task 2", completed: true, user: users[1]._id },
    ]);
    console.log("✅ Tasks imported");

    // 6️⃣ Import Notes, Links, Habits, Projects, Timers
    console.log("📦 Importing other collections...");
    await Promise.all([
      Note.insertMany([{ title: "Note 1", content: "Sample note", user: users[0]._id }]),
      Link.insertMany([{ title: "Google", url: "https://google.com", user: users[0]._id }]),
      Habit.insertMany([{ name: "Meditation", frequency: "Daily", user: users[0]._id }]),
      Project.insertMany([{ name: "Project Alpha", description: "Test project", owner: users[0]._id }]),
      Timer.insertMany([{ name: "Pomodoro", duration: 25, user: users[0]._id }]),
    ]);
    console.log("✅ Other collections imported");

    console.log("🎉 All data imported successfully!");
    process.exit();

  } catch (error) {
    console.error("❌ Error importing data:", error.message);
    process.exit(1);
  }
};

importData();
