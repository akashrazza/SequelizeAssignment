var connection = require('./connection');

//Count All Employee
connection.employeesequelize.findAndCountAll({raw:true})
.then(data=>{
    console.log("Total Count Of Employee : ",data.count);
})
.catch(err=>{
    console.log(err);
})

//Executing With query
connection.sequelize.query("select count(*) from `EmployeeTable`",{type:connection.Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})
