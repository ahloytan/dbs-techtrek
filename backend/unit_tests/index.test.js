const request = require("supertest");
const app = require("../app");

let headers = {
    'Content-Type': 'application/json'
};

beforeAll(async () => {
    const response = await request(app).post("/account/login").send({
        "username": "admin1@admin.com",
        "password": "Password1!"
    });
    headers['Authorization'] = `Bearer ${response.body.jwt}`;
});

describe("Test health check", () => {
    test("It should response with 'ok'", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("ok");
    });
});

describe("Test countries API", () => {
    test("POST country", async () => {
        const response = await request(app)
                                .post("/countries")
                                .send({"name": "Canada"})
                                .set(headers)

        expect(response.body.message).toBe("Country: Canada has been successfully created!");
    });

    test("POST country - duplicate", async () => {
        const response = await request(app)
                                .post("/countries")
                                .send({"name": "Canada"})
                                .set(headers)

        expect(response.body.message).toBe("Country already exist!");
    });

    test("DELETE countries", async () => {
        const response = await request(app)
                                .delete("/countries")
                                .send({"names": ["Canada"]})
                                .set(headers)

        expect(response.body.message).toBe("Countries with names: Canada has been successfully deleted!")
    });

    test("GET countries", async () => {
        const singapore = {id: 1, name: 'Singapore'};
        const response = await request(app)
                                .get("/countries")
                                .set(headers)

        const { body: { countries }} = response;
        expect(countries).toHaveLength(7);
        expect(countries).toContainEqual(singapore);

    });

});

describe("Test dashboard API", () => {
    test("GET dashboard", async () => {
        const response = await request(app)
                                .get("/dashboard")
                                .set(headers);
        
        const { body: { dashboard }} = response;
        expect(dashboard).toEqual(
            expect.objectContaining({
                'totalBudget': expect.any(Number),
                'uniqueCustomers': expect.any(Number),
                'totalCost': expect.any(Number),
                'trafficByCountry': expect.arrayContaining([])
            })
        );
        expect(dashboard.trafficByCountry).toHaveLength(3);
    });
});

describe("Test login API", () => {
    test("Correct password", async () => {
        const response = await request(app)
                                .post("/account/login")
                                .send({
                                    "username": "admin1@admin.com",
                                    "password": "Password1!"
                                });

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Login successful!');
        expect(response.body).toHaveProperty('jwt');
    });
});

describe("Test login API", () => {
    test("Wrong password", async () => {
        const response = await request(app)
                                .post("/account/login")
                                .send({
                                    "username": "wrong",
                                    "password": "wrong"
                                });

        expect(response.statusCode).toBe(400);
    });
});

