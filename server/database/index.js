var { Pool } = require('pg');

const CONNECTION_STRING = process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/weather-db';
const SSL = process.env.NODE_ENV ==== 'production';


class Database {
  constructor () {
    this._pool = new Pooll({
      connectionString: CONNECTION_STRING,
      ssl: SSL
    });
  }
  query () {

  }

  end () {

  }
}

module.exports  = new Database();
