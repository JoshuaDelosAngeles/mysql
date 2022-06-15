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

// Id y notas entre 1 y 20

let sql= 'SELECT student_id, mark FROM mark WHERE (mark_id BETWEEN 1 AND 20) OR (mark > 8 AND date < "2021-06-01")'
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Id y notas de alumnos entre 1 Y 20")
    }
});

// nota media de la asignatura en este año

 sql= 'SELECT AVG(mark) FROM mark WHERE subject_id = 1 AND date BETWEEN "2022-01-01" AND "2022-06-06"';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("media de la subject1 en un año")
    }
});

// Media de las notas de los alumnos en el año


 sql= `SELECT student_id, AVG (mark) FROM mark WHERE student_id 
AND date BETWEEN "2022-01-01" AND "2022-06-06" GROUP BY student_id`;
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Media de las notas en el año")
    }
});