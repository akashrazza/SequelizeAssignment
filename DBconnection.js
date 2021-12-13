var Sequelize = require('sequelize');
var db = require('./db.config')

//Creating connection instance
const sequelize = new Sequelize(db.DB,db.user,db.password,{
    host:db.HOST,
    dialect:db.dialect,
    pool:{
        min:db.pool.min,
        max:db.pool.max,
        acquire:db.pool.acquire,
        idle:db.pool.idle
    }
})

//Authincate Connection
sequelize.authenticate()
.then(data=>{
    console.log('Database connected');
})
.catch(err=>{
    console.log(err);
})
.finally(()=>{
    sequelize.close()
})
