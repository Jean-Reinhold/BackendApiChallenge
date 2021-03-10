
exports.up = function(knex) {

    return knex.schema
    .createTable('navers', function(table) {
      table.increments('id').unique()
        table.text('name').notNullable() 
        table.date('birthdate').notNullable()
        table.date('admission_date').notNullable()
        table.text('job_role').notNullable()
    })
    .createTable('projects', function(table) {
      table.increments('id').unique()
      table.text('name').notNullable()
    })
    // A naver can enroll many projects
    // A project can have many navers
    .createTable('navers_projects', function(table) {
      table.increments('id').primary()
      table
        .integer('naver_id')
        .references('id')
        .inTable('navers')
      table
        .integer('project_id')
        .references('id')
        .inTable('projects')
    }) 
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('navers_projetcs')
    .dropTableIfExists('navers')
    .dropTableIfExists('projects')
   

};
