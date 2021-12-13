var connection = require('./connection');

//get all records shows only name and dept
connection.employeesequelize.findAll({attributes:['name','dept'],raw:true})
.then(data=>[
    console.log(data)
])
.catch(err=>{
    console.log(err)
})

//get all records shows only name and dept with query
connection.sequelize.query("select name,dept from `EmployeeTable`",{type:connection.Sequelize.QueryTypes.SELECT})
.then(data=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})
