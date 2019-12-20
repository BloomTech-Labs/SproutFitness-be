
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('families').del()
    .then(function () {
      // Inserts seed entries
      return knex('families').insert([
        {id: '6dd44455-fe43-4c23-819b-69506aaf3d6b', name: 'First Family'},
      ]);
    });
};
