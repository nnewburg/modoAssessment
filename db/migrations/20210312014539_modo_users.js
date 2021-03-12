exports.up = function(knex) {
  return knex.schema.createTable('modo_users', function (table) {
    table.increments('id');
    table.string('email');
    table.string('password');
    table.timestamp('timestamp');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('modo_users');
};
