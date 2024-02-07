const express = require("express");
const path = require("path");
const knex = require("./knex");

const setupServer = () => {
  const app = express();
  app.use(express.json());

  //DBから本の一覧を取得する
  app.get("/api/books", async (req, res) => {
    const book = await knex.select().from("book");
    res.status(200).json(book);
  });

  //読んだ本（読みたい本）を追加する
  app.post("/api/additions", async (req, res) => {
    const newBook = req.body;
    // console.log(req.body);
    // const insertedBook = await knex("book").insert(newBook).returning("*");
    const insertedBook = await knex
      .select()
      .table("book")
      .insert(newBook)
      .returning("*");

    console.log(insertedBook);
    res.status(201).json(insertedBook[0]);
  });

  //登録済みの情報を変更する
  app.patch("/api/updates/:id", async (req, res) => {
    const target = req.params.id;
    const updateData = req.body;
    // await knex("book").where("id", target).update(updateData);
    const patchedBook = await knex
      .select()
      .table("book")
      .where("id", target)
      .update(updateData)
      .returning("*");
    res.status(200).json(patchedBook[0]);
  });

  //データの削除
  app.delete("/api/deletes/:id", async (req, res) => {
    const target = req.params.id;
    const deleteData = await knex
      .select()
      .table("book")
      .where("id", target)
      .del()
      .returning("*");
    res.status(200);
  });

  // app.listen(3000, () => {
  //   console.log("Server running on port 3000");
  // });

  return app;
};

module.exports = { setupServer };
