exports.up = async (knex) => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return knex.schema
    .createTable('families', families => {
        families.uuid('id')
          .unique()
          .notNullable()
          .primary()
          .defaultTo(knex.raw('uuid_generate_v4()'));
        families.string('name', 128).notNullable()
        families.integer('is_active', 1).defaultTo(1).notNullable()
        families.timestamp('created_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('families')
  };