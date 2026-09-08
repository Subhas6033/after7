import { describe, expect, it } from "vitest";
import request from "supertest";
import app from "../../Server/index.ts";

describe("Health API", () => {
  it("GET /health should return 200", async () => {
    const response = await request(app).get("/health");

    console.log("STATUS:", response.status);
    console.log("BODY:", response.body);

    expect(response.status).toBe(200);
  });
});
