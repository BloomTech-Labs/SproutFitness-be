
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('families').del()
    .then(function () {
      // Inserts seed entries
      return knex('families').insert([
        {id: '85s54sd-5s4d54s-545sd4-xccc', name: 'First Family'},
      ]);
    });
};
