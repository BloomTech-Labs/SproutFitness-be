exports.up = function(knex) {
  return knex.schema.createTable('coach_certifications', certification => {
    certification.string('id', 255).notNullable().unique()
    certification
      .string('coach_id')
      .notNullable()
      .references('id')
      .inTable('coaches')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    certification.string('name').notNullable();
    certification.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('coach_certifications');
};
