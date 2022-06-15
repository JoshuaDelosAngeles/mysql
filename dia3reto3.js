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


let sql =  `SELECT COUNT(*), name, first_name, last_name FROM student JOIN
            group ON (student.group_id = group.group_id) JOIN
            subject_teacher ON (group.group_id = subject_teacher.group_id) JOIN
            subject ON (subject_teacher.subject_id = subject.subject_id) JOIN
            teacher ON (subject_teacher.teacher_id = teacher.teacher_id) 
            GROUP BY subject.title`

connection.query(sql, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("Nombre y Apellidos del profesor y asignaturas")
    }
});