exports.up = function(knex) {
  return knex.schema.createTable('specialties', specialty => {
    specialty.increments();

    specialty
      .string('name')
      .notNullable()
      .unique();

    specialty.string('icon_url');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('specialties');
};
