

module.exports = {
    "type": "postgres",
    "url": "postgres://postgres:123456@localhost:5432/timesheet-db",
    // "ssl": { rejectUnauthorized: false},
    "synchronize": true,
    "logging": false,
    "entities": [
       "./entities/**/{*.ts,*.js}"
      //  "dist/entities/**/{*.ts,*.js}"
    ],
    "migrations": [
       "./database/migration/**/{*.ts,*.js}"
      //  "dist/database/migration/**/{*.ts,*.js}"
    ],
    "subscribers": [
       "./subscriber/**/{*.ts,*.js}"
      //  "dist/subscriber/**/{*.ts,*.js}"
    ],
    "cli": {
       "entitiesDir": "./entities",
       "migrationsDir": "./database/migration",
       "subscribersDir": "./subscriber"
    }
 } 