exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('coach_certifications').del()
    .then(function () {
      // Inserts seed entries
      return knex('coach_certifications').insert([
        {
          id: '39393-alkjaj-dsfx-1',
          name: 'NSHC – National Society of Health Coaches',
          coach_id: '545asd45x5x5x5x'
        },

        {
          id: '39393-alkjaj-dsfx-2',
          name: 'American Council on Exercise (ACE)',
          coach_id: '545232323x5x5x'
        },

        {
          id: '39393-alkjaj-dsfx-3',
          name: 'Dr. Sears Wellness Institute',
          coach_id: 'tyutyu'
        },

        {
          id: '39393-alkjaj-dsfx-4',
          name: 'Wellcoaches School of Coaching',
          coach_id: '545abnmbnm5x5x5x'
        },

        {
          id: '39393-alkjaj-dsfx-5',
          name: 'Duke Integrative Medicine',
          coach_id: '545a1232335x5x5x5x'
        },
        {
          id: '39393-alkjaj-dsfx-6',
          name: 'National Wellness Institute',
          coach_id: '5452323232323x5x5x5x'
        },
        {
          id: '39393-alkjaj-dsfx-7',
          name: 'Wellness Council of America',
          coach_id: '545asd45x5xasdasdasd5x5x'
        },
        {
          id: '39393-alkjaj-dsfx-8',
          name: 'American College of Healthcare Sciences',
          coach_id: '545asd45x232323sssdd'
        },
        {
          id: '39393-alkjaj-dsfx-9',
          name: 'International Association for Worksite Health Promotion',
          coach_id: '545xcvdfuu885x5x5x'
        },
        {
          id: '39393-alkjaj-dsfx-10',
          name: 'American Fitness Professionals & Associates',
          coach_id: '545kjlklaklsjd5x'
        },

      ]);
    });
};