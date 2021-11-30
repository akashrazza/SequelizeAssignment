var connection = require('./connection');

connection.employeesequelize.update({name:'RAJA KUMAR'},{
    where:{name:'Raja'}
})
.then(data=>{
    console.log("Update Sucessfull")
})
.catch(err=>{
    console.log(err);
})