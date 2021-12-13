var emoloyeeSequelize = require('./connection')
var Sequelize = require('sequelize');

//Insert inyo Employee Table
// emoloyeeSequelize.employeesequelize.create(
//     {EmpId:1200,name:'test',dept:'test',designation:'test'}
// )
// .then(data=>{console.log("record Inserted")})
// .catch(err=>{console.log(err)})


//Get form Employee table with primarykey
// emoloyeeSequelize.employeesequelize.findByPk(1200,{raw:true})
// .then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// })

//Get record from table using primary key
emoloyeeSequelize.sequelize.query('select * from `EmployeeTable` where EmpId=1200',{type:Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})
