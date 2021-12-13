var connection = require('./connection');

//Get all where dept is IT
connection.employeesequelize.findAll({where:{dept:'IT'},raw:true})
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})
//Get all where dept is IT with query
connection.sequelize.query("select * from `EmployeeTable` where dept='IT'",{type:connection.Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})
