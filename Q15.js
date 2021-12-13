var connection = require('./connection')

//Insert into Employee Table
connection.employeesequelize.create(
    {EmpId:10,name:'test2',dept:'test2',designation:'test2'}
)
.then(data=>{console.log("record Inserted")})
.catch(err=>{console.log(err)})
