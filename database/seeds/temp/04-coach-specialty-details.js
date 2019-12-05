exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('coach_specialty_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('coach_specialty_details').insert([
        {
          coach_id: 1,
          specialty_id: 1
        },
        {
          coach_id: 2,
          specialty_id: 2
        },
        {
          coach_id: 3,
          specialty_id: 2
        },

      ]);
    });
};