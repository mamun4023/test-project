import mongoose from "mongoose";
const request = require("supertest");
const app = require("../server");

const DB_URI = "mongodb://127.0.0.1:27017/test";
const userData = {
    name: "tohid",
    email: "test@gmail.com",
    password: "123",
};

beforeAll(async () => {
    await mongoose.connect(DB_URI);
});

afterAll(async () => {
    await mongoose.disconnect();
});

describe("app", () => {
    test("test", () => {
        request(app).post("/test").expect(200);
    });

    test("Sign Up", async () => {
        await request(app).post("/user/sign-up").send(userData).expect(404);
    });

    test("Sign In", async () => {
        const response = await request(app).post("/user/sign-in").send(userData).expect(404);
    });

    test("Analyzer", async () => {
        const response = await request(app)
            .post("/analyzer")
            .send({ text: "hello test" })
            .expect(404);
    });
});
