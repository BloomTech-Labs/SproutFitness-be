exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('coach_certifications').del()
    .then(function () {
      // Inserts seed entries
      return knex('coach_certifications').insert([
        {
          id: 'b75e4aed-b928-430b-a71e-0c46138b9760',
          name: 'NSHC – National Society of Health Coaches',
          coach_id: 'adf4b829-9d72-406f-8db2-de69e9655c60'
        },

        {
          id: 'f2ee60db-f87f-4869-b362-503e67f5831b',
          name: 'American Council on Exercise (ACE)',
          coach_id: 'adf4b829-9d72-406f-8db2-de69e9655c60'
        },
        {
          id: '57ed9e0b-884e-4bf4-90b5-ba4afe5fd994',
          name: 'International Association for Worksite Health Promotion',
          coach_id: '0dd171a1-37f7-4a71-9bc3-06c30fbb623b'
        },
        {
          id: 'a8ff37bb-d034-4d75-ab81-585d77efc481',
          name: 'American Fitness Professionals & Associates',
          coach_id: '0dd171a1-37f7-4a71-9bc3-06c30fbb623b'
        },

      ]);
    });
};