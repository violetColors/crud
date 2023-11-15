const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "empleados",
    port: 3307
});

db.connect((err) => {
    if (err) {

        console.error("Error al conectar a la base de datos:", err);
    } else {
        console.log("Conexión exitosa a la base de datos");
    }
});
app.get("/empleado", (req, res) => {
    db.query('SELECT * FROM empleado',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })

});

app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001");
});
