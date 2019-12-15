const localPg = {
  host: 'localhost',
  port: 5482,
  database: 'sprout-dev',
  user: 'postgres',
  password: 'test'
}

const prodDbConnection = process.env.DATABASE_URL

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: localPg,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  // POSTGRE SQL
  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: prodDbConnection,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },


  // testing: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './database/tester.db3',
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './database/migrations/dev',
  //   },
  //   seeds: {
  //     directory: './database/seeds/dev',
  //   },
  // },
};