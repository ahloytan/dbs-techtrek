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
    // test("POST country", async () => {
    //     const response = await request(app)
    //                             .post("/countries")
    //                             .send({ name });

    //     expect(response.statusCode).toBe(200);
    //     expect(response.body.message).toEqual(`Country: ${name} has been successfully created!`);
    // });

    test("POST country - duplicate", async () => {
        const response = await request(app)
                                .post("/countries")
                                .send({ name: 'Singapore' });

        expect(response.statusCode).toBe(500);
        expect(response.body.message).toEqual(`Country already exist!`);
    });

    // test("DELETE countries", async () => {
    //     const response = await request(app)
    //                             .delete("/countries")
    //                             .send({ names: [name] });

    //     expect(response.statusCode).toBe(200);
    //     expect(response.body.message).toEqual(`Countries with names: ${name} has been successfully deleted!`);
    // });

    test("GET countries", async () => {
        const response = await request(app).get("/countries");
        const singapore = {id: 1, name: 'Singapore'};
        expect(response.statusCode).toBe(200);
        expect(response.body.countries).toHaveLength(7);
        expect(response.body.countries).toContainEqual(singapore);
    });

});

describe("Test dashboard API", () => {
    test("GET dashboard", async () => {
        const response = await request(app).get("/dashboard");
        expect(response.statusCode).toBe(200);
        expect(response.body.dashboard).toEqual(
            expect.objectContaining({
                'totalBudget': expect.any(Number),
                'uniqueCustomers': expect.any(Number),
                'totalCost': expect.any(Number),
                'trafficByCountry': expect.arrayContaining([])
            })
        );
        expect(response.body.dashboard.trafficByCountry).toHaveLength(3);
    });
});

describe("Test login API", () => {
    test("Wrong password", async () => {
        const response = await request(app).post("/login",{
            "username": "wrong",
            "password": "wrong"
        });
        expect(response.statusCode).toBe(404);
    });
});

