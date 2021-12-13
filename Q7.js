var connection = require('./connection');

//Get All From EMployee table
connection.employeesequelize.findAll({where:{name:'Raja'},raw:true})
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})

//Get Employee table with name
connection.sequelize.query("select * from `EmployeeTable` where name='Raja'",{type:connection.Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})
