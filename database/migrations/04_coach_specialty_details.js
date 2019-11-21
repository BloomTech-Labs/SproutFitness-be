exports.up = function (knex) {
  return knex.schema
    .createTable('coach_specialty_details', csd => {
      csd.increments()
      csd
        .integer('coach_id')
        .notNullable()
        .references('id')
        .inTable('coaches')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      csd
        .integer('specialty_id')
        .notNullable()
        .references('id')
        .inTable('specialties')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      // csd.timestamp()

    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('coach_specialty_details')
};



// GET ALL COACHES WITH SPECIFIED SPECIALTY (BY SPECIALTY ID)
// async function getAllCoachesWithSpecById(id) {
//   try {
//     const coach = await findById(id)

//     const specialties = await db('coach_specialty_details as csd')
//       .join('specialties as s', 'csd.specialty_id', '=', 's.id')
//       .select('*')
//       .where('csd.coach_id', id)

//     const certifications = await db('coach_certifications').where('coach_id', id)

//     return {
//       coach,
//       specialties,
//       certifications
//     }

//   } catch (error) {
//     return {
//       code: error.code,
//       errno: error.errno,
//       message: error.message
//     };
//   }
// }