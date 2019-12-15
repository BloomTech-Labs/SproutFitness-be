exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('specialties').del()
    .then(function () {
      // Inserts seed entries
      return knex('specialties').insert([
        {
          id: '2e91c857-acc4-4126-a2f2-8f64fb43a82e',
          name: 'Holistic',
          icon_url: 'link'
        },
        {
          id: '27e866be-37af-466e-8d81-ff331cddf0d6',
          name: 'Wellness',
          icon_url: 'link'
        },
        {
          id: '08ea05a4-2ea0-4e15-80a0-236b86e2fb99',
          name: 'Primal/Paleo',
          icon_url: 'link'
        },
      ]);
    });
};