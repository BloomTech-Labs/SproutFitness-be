exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('specialties').del()
    .then(function () {
      // Inserts seed entries
      return knex('specialties').insert([
        {
          name: 'Holistic',
          icon_url: 'link'
        },
        {
          name: 'Wellness',
          icon_url: 'link'
        },
        {
          name: 'Primal/Paleo',
          icon_url: 'link'
        },
      ]);
    });
};