exports.up = function(knex) {
  return knex.schema.createTable('modo_vehicles', function (table) {
    table.increments('id');
    table.string('make');
    table.string('model');
    table.integer('year');
    table.string('colour');
    table.integer('location_id');
    table.string('location_description');
    table.timestamp('timestamp');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('modo_vehicles');
};


