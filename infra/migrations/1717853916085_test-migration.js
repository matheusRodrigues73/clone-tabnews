/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("users", {
    id: "id",
    username: { type: "varchar(80)" },
    email: { type: "varchar(100)" },
  });
};

exports.down = (pgm) => {};
