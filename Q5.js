var Sequelize = require('sequelize');
var db = require('./db.config')

//Connection Database Instance
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

//Employee Database Modal
let employeesequelize = sequelize.define('EmployeeTable',{
    EmpId:{
        primaryKey:true,
        type:Sequelize.STRING
    }, 
    name:Sequelize.STRING, 
    dept:Sequelize.STRING,
    designation:Sequelize.STRING
},{
    freezeTableName:true,
});

//Exporting DB
module.exports = {employeesequelize:employeesequelize,sequelize:sequelize}

//Sync with table
/*
employeesequelize.sync()
.then(data=>{
    console.log("Table Created")
})
.catch(err=>{
    console.log(err)
})
*/

//Bulk Insert into db
/*
employeesequelize.bulkCreate([
    {EmpId:1,name:'Raja',dept:'FullStack',designation:'trainee'},
    {EmpId:2,name:'Gyan',dept:'FullStack',designation:'trainee'},
    {EmpId:3,name:'Prakash',dept:'FullStack',designation:'trainee'}
])
*/

//Get ALL form EMployee table
// employeesequelize.findAll({raw:true})
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err)
// })

//Get All with query
sequelize.query('select * from `EmployeeTable`',{type:Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})
