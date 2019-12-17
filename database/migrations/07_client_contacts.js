exports.up = function(knex) {
    return knex.schema
    .createTable('client_contacts', client_contacts => {
        client_contacts.uuid('id').unique().notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'))
        client_contacts.uuid('client_id').references('id').inTable('clients').notNullable()
        client_contacts.uuid('coach_id').references('id').inTable('coaches').notNullable()
        client_contacts.integer('is_following', 1).defaultTo(1).notNullable()
        client_contacts.integer('is_subscribed').defaultTo(0).notNullable()
        client_contacts.timestamp('created_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('client_contacts')
  };