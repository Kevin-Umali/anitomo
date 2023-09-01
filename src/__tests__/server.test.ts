import request from "supertest";
import app from "../server"; // adjust the path as necessary

describe("Server Routes", () => {
  it("should return welcome message on base route", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);

    // Parse the response body as JSON
    const responseBody = JSON.parse(res.text);

    expect(responseBody.data.intro).toBe("Welcome to the anime API");
    expect(responseBody.success).toBe(true);
  });

  it("should return error for invalid routes", async () => {
    const res = await request(app).get("/invalidRoute");
    expect(res.status).toBe(404);

    // Parse the response body as JSON
    const responseBody = JSON.parse(res.text);

    expect(responseBody).toHaveProperty("error", "API Path Not Found");
  });
});
