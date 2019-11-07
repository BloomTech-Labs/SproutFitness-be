
exports.up = function(knex) {
    return knex.schema
    .createTable('coaches', coaches => {
        coaches.increments()
        coaches.string('email', 128).notNullable().unique()
        coaches.string('password', 128).notNullable()
        coaches.string('firstname', 128).notNullable()
        coaches.string('lastname', 128).notNullable()
        coaches.integer('is_active', 1).defaultTo(1)
        coaches.string('language', 128).notNullable()
        coaches.string('timezone', 128).notNullable()
        coaches.string('bio', 10000)
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('coaches')
};
