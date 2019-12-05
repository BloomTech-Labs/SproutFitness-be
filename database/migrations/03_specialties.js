exports.up = function(knex) {
  return knex.schema.createTable('specialties', specialty => {
    specialty.string('id', 255).notNullable().unique()

    specialty.string('name')
      .notNullable()
      .unique();

    specialty.string('icon_url');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('specialties');
};
