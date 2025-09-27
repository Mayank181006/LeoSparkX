// tests/task.test.js
const request = require("supertest");
const app = require("../server"); // your express app
const mongoose = require("mongoose");
const User = require("../models/User");
const Task = require("../models/Task");

let token;
let userId;

beforeAll(async () => {
  // Connect to test DB
  await mongoose.connect(process.env.MONGO_URI_TEST);

  // Create a test user
  const user = await User.create({
    name: "Test User",
    email: "test@example.com",
    password: "password123",
  });
  userId = user._id;
  token = user.getSignedJwtToken();
});

afterAll(async () => {
  await User.deleteMany();
  await Task.deleteMany();
  await mongoose.connection.close();
});

describe("Task API", () => {
  it("should create a new task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .set("Authorization", `Bearer ${token}`)
      .send({ title: "Test Task", description: "Task description" });

    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toBe(true);
    expect(res.body.task.title).toBe("Test Task");
  });

  it("should get all tasks for user", async () => {
    const res = await request(app)
      .get("/api/tasks")
      .set("Authorization", `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.count).toBeGreaterThanOrEqual(1);
  });
});
