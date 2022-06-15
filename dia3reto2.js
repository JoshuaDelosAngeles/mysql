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


let sql = 'INSERT INTO subject_teacher(subject_id, teacher_id, group_id) VALUES(2,3,1)'

connection.query(sql,function(err,res){
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
})



// Nombre y apellidos de los profes y sus asignaturas

 sql =  `SELECT first_name, last_name,subject.name FROM teacher JOIN
            subject_teacher ON (teacher.teacher_id = subject_teacher.teacher_id) JOIN
            subject ON (subject_teacher.subject_id = subject.subject_id)`

connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Nombre, Apellidos y asignatura por profesor")
        console.log(res);
    }
});

