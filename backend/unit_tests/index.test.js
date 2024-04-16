const request = require("supertest");
const app = require("../app");
let Countries = require('../models/countries');
let Dashboard = require('../models/dashboard');

describe("Test health check", () => {
    test("It should response with 'ok'", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("ok");
    });
});

describe("Test countries API", () => {
    test("POST country", async () => {
        const response = await Countries.addCountry('Canada');

        expect(response).toHaveLength(1);
        expect(response).toContainEqual({'id': expect.any(Number), 'name': 'Canada'});
    });

    test("POST country - duplicate", async () => {
        try {
            await Countries.addCountry('Singapore');
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', `Country already exist!`);
        }
    });

    test("DELETE countries", async () => {
        await Countries.deleteCountries(['Canada']);
        const response = await Countries.getAllCountries();
        expect(response).toHaveLength(7);
    });

    test("GET countries", async () => {
        const singapore = {id: 1, name: 'Singapore'};
        const response = await Countries.getAllCountries();
        expect(response).toHaveLength(7);
        expect(response).toContainEqual(singapore);

    });

});

describe("Test dashboard API", () => {
    test("GET dashboard", async () => {
        const response = await Dashboard.getDashboardDetails();
        expect(response).toEqual(
            expect.objectContaining({
                'totalBudget': expect.any(Number),
                'uniqueCustomers': expect.any(Number),
                'totalCost': expect.any(Number),
                'trafficByCountry': expect.arrayContaining([])
            })
        );
        expect(response.trafficByCountry).toHaveLength(3);
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

