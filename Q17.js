var connection = require('./connection');

connection.employeesequelize.bulkCreate([
    {EmpId:1,name:'Raja',dept:'FullStack',designation:'trainee'},
    {EmpId:2,name:'Gyan',dept:'FullStack',designation:'trainee'},
    {EmpId:3,name:'Prakash',dept:'FullStack',designation:'trainee'}
])