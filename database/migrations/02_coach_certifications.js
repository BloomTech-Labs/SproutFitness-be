exports.up = function (knex) {
  return knex.schema
    .createTable('coach_certifications', certification => {
      certification.increments()
      certification
        .integer('coach_id')
        .notNullable()
        .references('id')
        .inTable('coaches')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('coach_certifications')
};
