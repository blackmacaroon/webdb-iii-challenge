
exports.up = function(knex, Promise) {
      return knex.schema.createTable('cohorts', tbl => {
            tbl
            .increments();
            tbl
            .string('name', 100)
            .notNullable()
            .unique()
      });
};
    
exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('cohorts');
};