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

      csd
        .timestamp('created_at').defaultTo(knex.fn.now());

    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('coach_specialty_details')
};