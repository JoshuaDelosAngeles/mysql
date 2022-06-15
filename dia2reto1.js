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

//nota media alumnos subject 1

let sql="SELECT AVG(mark) FROM mark WHERE subject_id = 1";
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Nota media Alumnos subject1")
    }
});


//total alumnos de la escuela

 sql="SELECT COUNT(*) FROM student";
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Total alumnos Escuela")
    }
});

//listar campos de tabla

 sql= "SELECT * FROM escuela.group";
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Campos de tabla group")
    }
});

//eliminar notas por encima de 5

 sql="DELETE FROM mark WHERE (mark > 5) AND (date < '2021-03-01')";
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Notas eliminadas")
    }
});

//Alumnos actuales en 2022

 sql='SELECT * FROM student WHERE ingreso BETWEEN "2022-01-01" AND "2022-06-06';
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Estudiantes en el bootcamp en 2022")
    }
});

//profesores por asignatura


 sql= "SELECT  teacher_id, COUNT(subject_id) FROM subject_teacher GROUP BY subject_id"
connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Profesores de subject 1")
    }
});

