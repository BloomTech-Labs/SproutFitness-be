
exports.up = function(knex) {
    return knex.schema
    .createTable('coaches', coaches => {
        coaches.increments()
        coaches.string('email', 128).notNullable().unique()
        coaches.string('password', 128).notNullable()
        coaches.string('firstname', 128).notNullable()
        coaches.string('lastname', 128).notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('coaches')
};
