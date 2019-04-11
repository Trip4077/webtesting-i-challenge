
exports.up = function(knex, Promise) {
    return knex.schema.createTable('items', tbl => {
        tbl.increments();

        tbl.string('name', 128).unique().notNullable();

        tbl.int('enhancement');
        tbl.int('durability');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('items')
};
