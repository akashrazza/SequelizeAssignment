var Sequelize = require('sequelize');
var db = require('./db.config')

//Connection Instance
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
//User Table 
let usersequelize = sequelize.define('UserSequelize',{
    student_id:Sequelize.STRING, 
    name:Sequelize.STRING, 
    stream:Sequelize.STRING,
    marks:Sequelize.INTEGER
},{
    freezeTableName:true,
});

//Employee table
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

//Movie Table
let moviesequelize = sequelize.define('MovieSequelize',{
    MovieId:{
        primaryKey:true,
        type:Sequelize.STRING
    }, 
    MovieName:Sequelize.STRING, 
    Type_of_Movie:Sequelize.STRING
},
    {
        timestamps:false,
        freezeTableName:true
    });
//Export All Modal and connection instance
module.exports={sequelize:sequelize,usersequelize:usersequelize,Sequelize:Sequelize,employeesequelize:employeesequelize,moviesequelize:moviesequelize}
