
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(tbl) {
        tbl
        .incrementes()
        tbl
        .string('name', 100)
        .notNullable()
        tbl
        .integer('student_id')
        .unsigned()
        .references('id')
        .inTable('cohorts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('students');
};
