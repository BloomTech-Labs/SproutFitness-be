exports.up = function (knex) {
  return knex.schema
    .createTable('coach_specialty_details', csd => {
      csd.string('id', 255).notNullable().unique()
      csd
        .string('coach_id')
        .notNullable()
        .references('id')
        .inTable('coaches')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      csd
        .string('specialty_id')
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