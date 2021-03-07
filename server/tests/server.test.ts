import request from "supertest";
import {serverRoutes, server} from "../src/server";

server.use("/test", serverRoutes);

describe("Test server", () => {
  it("GET /test - success", async () => {
    const { body } = await request(server).get("/test");
    expect(body.msg).toBe("Works 🐳!");
  });
});
