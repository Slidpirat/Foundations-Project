const{Client} = require('pg')

const client = new client ({
    host: "localhost",
    user: "postgres",
    port: "5432",
    password: "1234",
    database: ""
})

client. connect();

client.query(`elect * from users` , (err, res) =>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message)
    } 
}) 