var Sequelize = require('sequelize');
var db = require('./db.config')

//Connection Instance 
const sequelize = new Sequelize(db.DB,db.user,db.password,{
    dialect:db.dialect,
    host:db.HOST,
    pool:{
        max:db.pool.max,
        min:db.pool.min,
        acquire:db.pool.acquire,
        idle:db.pool.idle
    }
})

//Movie Database Modal
let moviesequelize = sequelize.define('MovieSequelize',{
    MovieId:{
        primaryKey:true,
        type:Sequelize.STRING
    }, 
    MovieName:Sequelize.STRING, 
    Type_of_Movie:Sequelize.STRING
},
    {
        timestamps:false,
        freezeTableName:true
    });

//Sync with DB
/*
moviesequelize.sync({force:true})
.then(data=>{
    console.log("Database created sucessfully")
})
.catch(err=>{
    console.log(err)
});
*/


//Bulk Insert into Movie 
/*
moviesequelize.bulkCreate([
    {MovieId:1,MovieName:'Chak de India',Type_of_Movie:"Motivational"},
    {MovieId:3,MovieName:'Dhamaal',Type_of_Movie:"Comedy"},
    {MovieId:4,MovieName:'Tiger',Type_of_Movie:"Action"},
]);
*/

//Get all Moviea
moviesequelize.findAll({raw:true})
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})

//Get All with quert
// sequelize.query('select * from `MovieSequelize`',{type:Sequelize.QueryTypes.SELECT})
// .then(data=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err)
// })
