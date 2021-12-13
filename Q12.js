var connection = require('./connection');

//Instance of Sequelize Operation
op=connection.Sequelize.Op

//Get Employee using like operator
connection.employeesequelize.findAll({where:{
    name:{
    [op.like]:'%a%'
    }
},raw:true})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

//Executing With query
connection.sequelize.query("select * from `EmployeeTable` where name like '%a%'",{type:connection.Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})
