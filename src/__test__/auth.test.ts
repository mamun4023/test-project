import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
const request = require("supertest");
const app = require("../app");

describe("Authentication testing", () => {
    // beforeAll(async () => {
    //     const mongoServer = await MongoMemoryServer.create();
    //     await mongoose.connect(mongoServer.getUri());
    // });

    // afterAll(async () => {
    //     await mongoose.disconnect();
    //     await mongoose.connection.close();
    // });

    // it("test", () => {
    //     request(app)
    //         .get("/test")
    //         .expect(200)
    //         .end((err, res) => {
    //             if (err) throw err;
    //         });
    // });

    // it("Sign Up", () => {
    //     request(app)
    //         .post("/user/sigin-up", {
    //             name: "Tohid hasan",
    //             email: "test@gmail.com",
    //             password: "123",
    //         })
    //         .expect(404)
    //         .end((err, res) => {
    //             if (err) throw err;
    //         });
    // });

    // it("Sign In", () => {
    //     request(app)
    //         .post("/user/sigin-in", {
    //             email: "test@gmail.com",
    //             password: "123",
    //         })
    //         .expect(404)
    //         .end((err, res) => {
    //             if (err) throw err;
    //         });
    // });

    // it("Analyzer Test", () => {
    //     request(app)
    //         .post("/analyzer")
    //         .send()
    //         .expect(200)
    //         .end((err, res) => {
    //             if (err) throw err;
    //         });
    // });
});
