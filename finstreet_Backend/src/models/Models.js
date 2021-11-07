const {v4 : uuidv4} = require('uuid')
const Sequelize = require('sequelize');
const database = require('../config/database')



    const Users = database.define('users', {
        user_id: {
            type: Sequelize.STRING,
            defaultValue: uuidv4(),

            primaryKey: true,
        },
        user_name: {
            type: Sequelize.STRING
        },
        user_email : {
            type: Sequelize.STRING
        },
        user_password: {
            type: Sequelize.STRING
        },
        user_image: {
            type: Sequelize.STRING
        },
        total_orders: {
            type: Sequelize.STRING
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        last_logged_in: {
            type: Sequelize.DATE
        },
       
    });

    module.exports = Users;
//     Users.sync().then(() => {
//         console.log('table created');
//       });
 
//     return Users;
    
// }

