exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('coach_specialty_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('coach_specialty_details').insert([
        {
          id: '62ae9ed9-1a55-4aad-886b-780077d6c2cc',
          coach_id: 'adf4b829-9d72-406f-8db2-de69e9655c60',
          specialty_id: '2e91c857-acc4-4126-a2f2-8f64fb43a82e'
        },
        {
          id: '5a41ce5d-2f39-421d-8414-1a732daad5b4',
          coach_id: 'adf4b829-9d72-406f-8db2-de69e9655c60',
          specialty_id: '27e866be-37af-466e-8d81-ff331cddf0d6'
        },
        {
          id: 'da3e5fe1-f464-4a6b-bcb2-0109fd552570',
          coach_id: '0dd171a1-37f7-4a71-9bc3-06c30fbb623b',
          specialty_id: '08ea05a4-2ea0-4e15-80a0-236b86e2fb99'
        },

      ]);
    });
};