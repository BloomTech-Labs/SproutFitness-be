exports.up = function(knex) {
    return knex.schema
    .createTable('coach_contacts', coach_contacts => {
        coach_contacts.string('id', 255).notNullable().unique()
        coach_contacts.string('client_id', 255).references('id').inTable('clients').notNullable()
        coach_contacts.string('coach_id', 255).references('id').inTable('coaches').notNullable()
        coach_contacts.integer('is_active', 1).defaultTo(1).notNullable()
        coach_contacts.timestamp('created_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('coach_contacts')
  };