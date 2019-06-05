const db = require('../dbConfig.js');


module.exports = {
      find,
      findById,
      add,
      update,
      remove
};

function find() {
      return db('cohorts');
}

function findById(id) {
      return db('cohorts')
      .where({ id })
      .first();
}

function add(cohort) {
      return db('cohorts')
      .insert(cohort)
      .then(ids => get(ids[0]))
      
}

function update(id, changes) {
      return db('cohorts')
      .where({ id })
      .update(changes);
}

function remove(id) {
      return db('cohorts')
      .where({ id })
      .del();
}