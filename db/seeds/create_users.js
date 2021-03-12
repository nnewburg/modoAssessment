exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('modo_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('modo_users').insert([
        {id: 1, email: 'test@example.com', password: '3790a6b3c999dee0d0584bcd643bead7d33db32401b59bdf1f53f5e42ae4ccb4', timestamp: '2020-05-27 17:32'},
        {id: 2, email: 'test2@example.com', password: '3790a6b3c999dee0d0584bcd643bead7d33db32401b59bdf1f53f5e42ae4ccb4', timestamp: '2020-07-13 1:09'}
      ]);
    });
};

