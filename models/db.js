var settings = require('../setting'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server
module.exports = new Db(setting.db, new Server(setting.host, setting.port), {safe: true})