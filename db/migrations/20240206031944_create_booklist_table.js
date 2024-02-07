/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("book", function (table) {
    table.increments("id").primary();
    table.string("book_name", 125).unique().notNullable();
    table.string("author", 80).notNullable;
    table.date("date_reading");
    table.string("genre", 80);
    table.string("memo", 125);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("book");
};
