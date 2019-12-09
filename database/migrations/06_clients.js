exports.up = function(knex) {
    return knex.schema
    .createTable('clients', clients => {
        clients.string('id', 255).notNullable().unique()
        clients.string('family_id').references('id').inTable('families')
        clients.string('email', 128).notNullable().unique()
        clients.string('password', 128).notNullable()
        clients.string('firstname', 128).notNullable()
        clients.string('lastname', 128).notNullable()
        clients.integer('is_active', 1).defaultTo(1).notNullable()
        clients.date('birthdate').notNullable()
        clients.integer('isAdmin').notNullable().defaultTo(1)
        clients.string('language', 128)
        clients.string('timezone', 128)
        clients.string('picture_url', 500)
        clients.string('city')
        clients.string('country')
        clients.string('bio', 10000)
        clients.timestamp('created_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('clients')
  };