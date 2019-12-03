exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('coach_certifications').del()
    .then(function () {
      // Inserts seed entries
      return knex('coach_certifications').insert([
        {
          name: 'NSHC – National Society of Health Coaches',
          coach_id: 1
        },

        {
          name: 'American Council on Exercise (ACE)',
          coach_id: 2
        },

        {
          name: 'Dr. Sears Wellness Institute',
          coach_id: 3
        },

        {
          name: 'Wellcoaches School of Coaching',
          coach_id: 4
        },

        {
          name: 'Duke Integrative Medicine',
          coach_id: 5
        },
        {
          name: 'National Wellness Institute',
          coach_id: 6
        },
        {
          name: 'Wellness Council of America',
          coach_id: 7
        },
        {
          name: 'American College of Healthcare Sciences',
          coach_id: 8
        },
        {
          name: 'International Association for Worksite Health Promotion',
          coach_id: 9
        },
        {
          name: 'American Fitness Professionals & Associates',
          coach_id: 10
        },

      ]);
    });
};