const express = require("express");
const supertest = require("supertest");

let server;

describe("Server should", () => {

    beforeEach(() => {
        server = require("../src/server");
    })

    afterEach((done) => {
        server.close(done);
    })

    it("Starts properly", (done => {
        supertest(server)
        .get("/")
        .expect(200, done);
    }))

})

