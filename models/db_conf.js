// file db_conf.js in models

const db = require('better-sqlite3')('C:/vinci/Devops/backup-web1-23_24/db/exoplanets.db', { verbose: console.log });
// const db = require('better-sqlite3')('/home/olivier/exoplanets.db', { verbose: console.log });

module.exports = db;
