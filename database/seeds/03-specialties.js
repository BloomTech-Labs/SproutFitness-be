exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('specialties').del()
    .then(function () {
      // Inserts seed entries
      return knex('specialties').insert([
        {
          name: 'Health coach',
          icon_url: 'link'
        },
        {
          name: 'Holistic health coach',
          icon_url: 'link'
        },
        {
          name: 'Wellness health coach',
          icon_url: 'link'
        },
        {
          name: 'Primal/Paleo health coach',
          icon_url: 'link'
        },
      ]);
    });
};