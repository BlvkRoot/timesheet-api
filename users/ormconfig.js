

module.exports = {
    "type": "postgres",
    "url": "postgres://postgres:123456@localhost:5432/testdb",
    // "ssl": { rejectUnauthorized: false},
    "synchronize": false,
    "logging": false,
    "entities": [
       "src/entities/**/{*.ts,*.js}"
      //  "dist/entities/**/{*.ts,*.js}"
    ],
    "migrations": [
       "src/database/migration/**/{*.ts,*.js}"
      //  "dist/database/migration/**/{*.ts,*.js}"
    ],
    "subscribers": [
       "src/subscriber/**/{*.ts,*.js}"
      //  "dist/subscriber/**/{*.ts,*.js}"
    ],
    "cli": {
       "entitiesDir": "src/entities",
       "migrationsDir": "src/database/migration",
       "subscribersDir": "src/subscriber"
    }
 } 