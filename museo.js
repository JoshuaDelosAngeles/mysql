let mysql = require('mysql2')
let connection = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : 'joshua1993',
    database : 'museo'
});

connection.connect(function (err){
    if(err){
        console.log(err);
    }else{
        console.log('conexión corecta');
    }
})

let sql ;

let prestadas= [];

sql = 'SELECT pieza.titulo, expositor.pasillo, expositor.tipo, pieza.expo_date, propietario.nombre, propietario.apellido, propietario.email FROM pieza '+
      'JOIN expositor ON(pieza.id_expositor = expositor.id_expositor)'+
      'JOIN colection ON(pieza.id_colection = colection.id_colection)'+
      'JOIN propietario ON(pieza.id_propietario = propietario.id_propietario)'+
      'WHERE colection.id_colection=2'
      
connection.query(sql,prestadas, function(err, res){
    if (err){
        console.log(err);
    } else {
        console.log("prestados")
        console.log(res);
    }
});


let expuesto = []

sql = "SELECT colection.colection_type,colection.name,COUNT(*) AS exposicion FROM pieza " +
        "JOIN colection  ON (pieza.id_colection = colection.id_colection) " +
        "GROUP BY colection.colection_type " +
        "ORDER BY exposicion DESC";
        


connection.query(sql,expuesto,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("ordenadas");
        console.log(result);
    }
});