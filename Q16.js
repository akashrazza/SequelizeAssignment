var connection = require('./connection');

//Insert into Employee Sequelize
var data = connection.employeesequelize.build(
    {EmpId:11,name:'test3',dept:'test3',designation:'test3'}
)
data.save();
