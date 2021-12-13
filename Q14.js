var connection = require('./connection');
//Sequelize Operation Instance
op=connection.Sequelize.Op

//Find All With Sequelize And Operation
connection.usersequelize.findAll({where:{
    [op.and]:[{stream:'CSE'},{marks:{$eq:99}}]
}})
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err)
})
