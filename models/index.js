"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

var sequelize = new Sequelize(config);

// sequelize.sync({
//   force: true
// });

function walk(dir) {
  return fs.readdirSync(dir).forEach(function(file) {
    file = path.resolve(dir, file);
    var stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      return walk(file);
    } else {
      if (
        file.indexOf(".") !== 0 &&
        !file.endsWith(basename) &&
        file.slice(-3) === ".js"
      ) {
        var model = sequelize["import"](file);
        db[model.name] = model;
      }
    }
  });
}

walk(__dirname);

//
// fs
//   .readdirSync(__dirname)
//   .filter(function(file) {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(function(file) {
//     var model = sequelize['import'](path.join(__dirname, file));
//     db[model.name] = model;
//   });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
