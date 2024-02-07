const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../server");
chai.should();

const server = setupServer();

describe("booklist API Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("GET /api/books", () => {
    it("should return status 200", async () => {
      const res = await request.get("/api/books");
      res.should.have.status(200);
    });
    it("should return valid book", async () => {
      const res = await request.get("/api/books");
      res.should.not.equal("");
    });
  });
  describe("POST /api/additions", () => {
    // it("should return status 201", async () => {
    //   const res = await request.post("/api/additions").send(body);
    //   console.log(res);
    //   res.should.have.status(201);
    // });
    it("should return inserted book", async () => {
      const expected = {
        book_name: "test533",
        author: "satoru noda",
        date_reading: "2023-11-12",
        genre: "comics",
        memo: "",
      };
      const res = await request.post("/api/additions").send(expected);
      res.should.not.equal("");
      res.should.have.status(201);
    });
  });

  describe("PATCH /api/updates/:id", () => {
    // it("should return status 200", async () => {
    //   const res = await request.patch("/api/updates/:id");
    //   res.should.have.status(200);
    // });
    it("should return valid book", async () => {
      // const modificateBookname = request.patch("/api/updates/:id").send(body);
      const expected = {
        id: 6,
        book_name: "test33",
        author: "satoru noda",
        date_reading: "2023-11-11",
        genre: "comics",
        memo: "",
      };
      const res = await request.patch("/api/updates/6").send(expected);
      // res.body.should.deep.equal(expected);
      res.should.have.status(200);
    });
  });

  describe("DELETE /api/deletes/:id", () => {
    it("should delete target book", async () => {
      const expected = {
        book_name: "test533",
        author: "satoru noda",
        date_reading: "2023-11-12",
        genre: "comics",
        memo: "",
      };
      const res = await request.delete("/api/deletes/20").send(expected);
      res.should.have.status(200);
    });
  });
});
