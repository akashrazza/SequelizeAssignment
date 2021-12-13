var connection  = require('./connection');
var Sequelize = require('sequelize')

//Bulk Insert into User table
connection.usersequelize.bulkCreate([
    {student_id:2,name:'prakash',stream:'CSE',marks:100},
    {student_id:3,name:'gyan',stream:'CSE',marks:100},
    {student_id:4,name:'manikant',stream:'CSE',marks:100},
    {student_id:5,name:'keshav',stream:'CSE',marks:100}]
    )
.then(data=>{
    console.log("Created Sucessfully")
})
.catch(err=>{
    console.log(err)
})

//Insert with Query
// connection.sequelize.query("Insert into `User` values(2,'praksh','cse',100)",{type:Sequelize.QueryTypes.INSERT})
// .then(data=>{console.log("Insterted Sucessfully")})
// .catch(err=>{console.log(err)})
