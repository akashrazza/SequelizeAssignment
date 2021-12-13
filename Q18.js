var connection = require('./connection');

//Update in Enployee Table where name is Raja
connection.employeesequelize.update({name:'RAJA KUMAR'},{
    where:{name:'Raja'}
})
.then(data=>{
    console.log("Update Sucessfull")
})
.catch(err=>{
    console.log(err);
})
