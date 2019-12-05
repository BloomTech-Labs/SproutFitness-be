exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('specialties').del()
    .then(function () {
      // Inserts seed entries
      return knex('specialties').insert([
        {
          id: '2344sdsdmn-asd-xxccc-1',
          name: 'Holistic',
          icon_url: 'link'
        },
        {
          id: '2344sdsdmn-asd-xxccc-2',
          name: 'Wellness',
          icon_url: 'link'
        },
        {
          id: '2344sdsdmn-asd-xxccc-3',
          name: 'Primal/Paleo',
          icon_url: 'link'
        },
      ]);
    });
};