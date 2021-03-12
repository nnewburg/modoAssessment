exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('modo_vehicles').del()
    .then(function () {
      // Inserts seed entries
      return knex('modo_vehicles').insert([
        {id: 1, make: 'honda', model: 'civic', year: '2009', colour: 'silver', location_id: '4', location_description: 'Downtown Vancouver - Modo Office'},
        {id: 2, make: 'ford', model: 'focus', year: '2015', colour: 'navy', location_id: '7', location_description: 'Burnaby - Metrotown Towers'},
        {id: 3, make: 'nissan', model: 'versa', year: '2008', colour: 'white', location_id: '3', location_description: 'Downtown Vancouver - Pacific Center'},
        {id: 4, make: 'mazda', model: 'crx', year: '2015', colour: 'black', location_id: '4', location_description: 'Downtown Vancouver - Yaletown'},
        {id: 5, make: 'kia', model: 'sportage', year: '2015', colour: 'blue', location_id: '11', location_description: 'North Vancouver - The Key'},
        {id: 6, make: 'toyota', model: 'tercel', year: '2004', colour: 'green', location_id: '13', location_description: 'Richmond - Aberdeen'},
        {id: 7, make: 'volkswagen', model: 'golf', year: '2011', colour: 'red', location_id: '9', location_description: 'Vancouver - City Hall'}
      ]);
    });
};


