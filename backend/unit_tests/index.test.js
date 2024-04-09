const request = require("supertest");
const app = require("../app");

describe("Test health check", () => {
    test("It should response with 'ok'", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("ok");
    });
});

describe("Test countries API", () => {
    test("GET countries", async () => {
        const response = await request(app).get("/countries");
        const singapore = {id: 1, name: 'Singapore'};
        expect(response.statusCode).toBe(200);
        expect(response.body.countries).toHaveLength(7);
        expect(response.body.countries).toContainEqual(singapore);
    });
});