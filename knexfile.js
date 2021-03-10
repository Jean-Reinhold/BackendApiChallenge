// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "team_management",
      user: "postgres", 
      password: "root"
    },
    migrations: { 
      tabeName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: { 
      directory: `${__dirname}/src/database/seeds`, 
    }
  }
};
