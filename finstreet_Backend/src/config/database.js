 
//  db.users = require('./models.js')(sequelize, Sequelize);
 
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// module.exports = Database; 


const Sequelize = require('sequelize');
 
module.exports = new Sequelize('test', 'root', '', {
 host: 'localhost',
 dialect: 'mysql',
 
 pool: {
   max: 5,
   min: 0,
   acquire: 30000,
   idle: 10000
 }
});