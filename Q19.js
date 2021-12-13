var connection = require('./connection');

//Delete from table where name is test2
connection.employeesequelize.destroy({where:{name:'test2'}})
.then(data=>{
    console.log('Deletion Sucessfull');
})
.catch(err=>{
    console.log(err)
})
