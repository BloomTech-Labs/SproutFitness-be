exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('coach_certifications').del()
    .then(function () {
      // Inserts seed entries
      return knex('coach_certifications').insert([
        {
          name: 'NSHC – National Society of Health Coaches',
          coach_id: '545asd45x5x5x5x'
        },

        {
          name: 'American Council on Exercise (ACE)',
          coach_id: '545232323x5x5x'
        },

        {
          name: 'Dr. Sears Wellness Institute',
          coach_id: 'tyutyu'
        },

        {
          name: 'Wellcoaches School of Coaching',
          coach_id: '545abnmbnm5x5x5x'
        },

        {
          name: 'Duke Integrative Medicine',
          coach_id: '545a1232335x5x5x5x'
        },
        {
          name: 'National Wellness Institute',
          coach_id: '5452323232323x5x5x5x'
        },
        {
          name: 'Wellness Council of America',
          coach_id: '545asd45x5xasdasdasd5x5x'
        },
        {
          name: 'American College of Healthcare Sciences',
          coach_id: '545asd45x232323sssdd'
        },
        {
          name: 'International Association for Worksite Health Promotion',
          coach_id: '545xcvdfuu885x5x5x'
        },
        {
          name: 'American Fitness Professionals & Associates',
          coach_id: '545kjlklaklsjd5x'
        },

      ]);
    });
};