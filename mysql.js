let mysql = require('mysql2')
let connection = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : 'joshua1993',
    database : 'codenotch'
});

connection.connect(function (err){
    if(err){
        console.log(err);
    }else{
        console.log('conexión corecta');
    }
})

// let sql = 'CREATE TABLE profesores(id INT AUTO_INCREMENT PRIMARY KEY , nombre VARCHAR(45), apellidos VARCHAR(60))'

// connection.query(sql,function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('tabla creada');
//         console.log(result);
//     }
// })

// sql = 'CREATE TABLE asignaturas (id INT AUTO_INCREMENT PRIMARY KEY , nombre VARCHAR(45))'
// connection.query(sql,function(err,result){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('tabla creada');
//         console.log(result);
//     }
// })

// sql = 'ALTER TABLE alumnos add género VARCHAR (45) '
   
//     connection.query(sql,function(err,result){
//        if(err){
//              console.log(err);
//         }else{
//              console.log('columna creada');
//              console.log(result);
//          }
//      });

// sql = 'ALTER TABLE alumnos drop género' 

//    connection.query(sql,function(err,result){
//     if(err){
//           console.log(err);
//      }else{
//           console.log('columna borrada');
//           console.log(result);
//       }
//   });

//   sql = 'CREATE TABLE tablacreada (id INT AUTO_INCREMENT PRIMARY KEY , nombre VARCHAR(45))'

//    connection.query(sql,function(err,result){
//         if(err){
//             console.log(err);
//         }else{
//              console.log('tabla creada');
//             console.log(result);
//          }
//      })

sql = 'DROP TABLE tablacreada'

connection.query(sql,function(err,result){
    if(err){
        console.log(err);
    }else{
         console.log('tabla borrada');
        console.log(result);
     }
 })