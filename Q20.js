var connection = require('./connection');

//Delete Table
connection.employeesequelize.drop()
.then(()=>{console.log("table deleted sucessfully");})
.catch(err=>{console.log(err)})
