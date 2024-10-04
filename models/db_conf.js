// file db_conf.js in models

const db = require('better-sqlite3')('/Users/larisacoita/devops-partage/demo-devops/db/exoplanets.db', { verbose: console.log });
// const db = require('better-sqlite3')('/home/olivier/exoplanets.db', { verbose: console.log });

module.exports = db;
