/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("book").del();
  await knex("book").insert([
    {
      id: 1,
      book_name: "ONE PIECE 107",
      author: "eiichiro oda",
      date_reading: "2023-12-31",
      genre: "comic",
      memo: "Amazing!!",
    },
    {
      id: 2,
      book_name: "Masquerade Hotel",
      author: "keigo higashino",
      date_reading: "2022-10-20",
      genre: "novel",
      memo: "Looking forward to the sequel",
    },
    {
      id: 3,
      book_name: "HEART DRIVEN",
      author: "genki shiota",
      date_reading: "2019-11-10",
      genre: "business",
      memo: "I learned a lot.",
    },
  ]);
};
