import dotenv from 'dotenv';
dotenv.config();

export default {
    "development": {
      "user": process.env.DEVELOPMENT_DB_USER,
      "password": process.env.DEVELOPMENT_DB_PASSWORD,
      "database": process.env.DEVELOPMENT_DB_DATABASE,
      "host": process.env.DEVELOPMENT_DB_HOST,
      "port": process.env.DEVELOPMENT_DB_PORT,
      "dialect": process.env.DEVELOPMENT_DB_DIALECT
    },
    "test": {
      "user": process.env.TEST_DB_USER,
      "password": process.env.TEST_DB_PASSWORD,
      "database": process.env.TEST_DB_DATABASE,
      "host": process.env.TEST_DB_HOST,
      "port": process.env.TEST_DB_PORT,
      "dialect": process.env.TEST_DB_DIALECT
    },
    "production": {
      "user": process.env.PRODUCTION_DB_USER,
      "password": process.env.PRODUCTION_DB_PASSWORD,
      "database": process.env.PRODUCTION_DB_DATABASE,
      "host": process.env.PRODUCTION_DB_HOST,
      "port": process.env.PRODUCTION_DB_PORT,
      "dialect": process.env.PRODUCTION_DB_DIALECT
    }
  }
