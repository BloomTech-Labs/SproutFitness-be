exports.up = function(knex) {
  return knex.schema
  .createTable('coaches', coaches => {
      coaches.string('id', 255).notNullable().unique()
      coaches.string('email', 128).notNullable().unique()
      coaches.string('password', 128).notNullable()
      coaches.string('firstname', 128).notNullable()
      coaches.string('lastname', 128).notNullable()
      coaches.integer('is_active', 1).defaultTo(1).notNullable()
      coaches.string('language', 128)
      coaches.string('timezone', 128)
      coaches.string('picture_url', 500)
      coaches.string('city')
      coaches.string('country')
      coaches.string('bio', 10000)
      coaches.string('resetPasswordToken')
      coaches.bigInteger('resetPasswordExpires', 10000)
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('coaches')
};