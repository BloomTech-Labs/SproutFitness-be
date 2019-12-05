exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('coach_specialty_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('coach_specialty_details').insert([
        {
          id: '9878-yuiyuer-fddf-1',
          coach_id: '545asd45x5x5x5x',
          specialty_id: '2344sdsdmn-asd-xxccc-1'
        },
        {
          id: '9878-yuiyuer-fddf-2',
          coach_id: '545232323x5x5x',
          specialty_id: '2344sdsdmn-asd-xxccc-2'
        },
        {
          id: '9878-yuiyuer-fddf-3',
          coach_id: 'tyutyu',
          specialty_id: '2344sdsdmn-asd-xxccc-3'
        },

      ]);
    });
};