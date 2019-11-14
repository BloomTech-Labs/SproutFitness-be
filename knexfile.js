const localPg = {
  host: 'localhost',
  database: 'test',
  user: 'test',
  password: 'test'
}

const prodDbConnection = process.env.DATABASE_URL || localPg

module.exports = {

  // SQLITE
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/sprout.db3',
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      }
    }
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
    client: 'sqlite3',
    connection: {
      filename: './database/tester.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};