import request from "supertest";
import {serverRoutes, server} from "../src/server";

server.use("/", serverRoutes);

describe("Test server", () => {
  it("GET / - success", async () => {
    const { body } = await request(server).get("/");
    expect(body.msg).toBe("Works 🐳!");
  });
});
