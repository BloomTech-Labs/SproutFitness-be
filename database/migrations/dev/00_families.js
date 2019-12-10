exports.up = function(knex) {
    return knex.schema
    .createTable('families', families => {
        families.string('id', 255).notNullable().unique()
        families.string('name', 128).notNullable()
        families.integer('is_active', 1).defaultTo(1).notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('families')
  };