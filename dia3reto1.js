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


// obtener nombre apellidos y asignaturas 


let sql =  `SELECT first_name, last_name, title FROM student JOIN
            grupo ON (student.group_id = grupo.group_id) JOIN
            subject_teacher ON (grupo.group_id = subject_teacher.group_id) JOIN
            subject ON (subject_teacher.sunject_id = subject.subject_id)`

connection.query(sql, function(err, res){
    if (err){
    console.log(err);
} else {
    console.log("Nombre, Apellidos y asignatura por alumno")
        }
});

