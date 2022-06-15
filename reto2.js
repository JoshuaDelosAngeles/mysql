let mysql = require('mysql2')
let connection = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : 'joshua1993',
    database : 'escuela'
});

connection.connect(function (err){
    if(err){
        console.log(err);
    }else{
        console.log('conexión corecta');
    }
})
let sql= 'INSERT INTO student (first_name, last_name) VALUES ("Joshua", "De los Ángeles")';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("estudiante insertado")
    }})

     sql= 'UPDATE mark SET mark = 0';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("notas a cero")
    }
});

sql= 'SELECT first_name, last_name FROM escuela.student';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("nombres")
    }
});

 sql= 'SELECT * FROM escuela.teacher';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Datos profesores")
    }
});

//reto3 //

 sql= 'DELETE FROM mark WHERE (date < "2012-05-05")';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("borradas notas de más de 10 años")
    }
});

 sql= 'UPDATE mark SET mark = 5 WHERE (mark < 5)';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("notas actualizadas")
    }
});