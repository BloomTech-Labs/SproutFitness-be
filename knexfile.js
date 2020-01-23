
// LOCAL POSTGRES CONFIG
const localPg = {
  host: 'localhost',
  port: 5482, // You may need/want to change this
  database: 'postgres',
  user: 'postgres', // User and pass may be different for you
  password: 'Maddog90'  
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

  testing: {
    client: 'pg',
    connection: localPg,
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  
  },
};