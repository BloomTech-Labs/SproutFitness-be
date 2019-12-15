exports.up = function (knex) {
  return knex.schema
    .createTable('coach_specialty_details', csd => {
      csd.uuid('id').unique().notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'))
      csd
        .uuid('coach_id')
        .notNullable()
        .references('id')
        .inTable('coaches')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      csd
        .uuid('specialty_id')
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