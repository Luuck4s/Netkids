const request = require("supertest");
const app = require("../../src/app");

describe("Film", () => {
  it('should successfully list films', async () => {
     const response = await request(app).get("/api/v1/film");
    expect(response.status).toEqual(200);
  });
})