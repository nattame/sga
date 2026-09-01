const express = require("express");

const app = express()
app.use(express.json())
const alumnosRoutes = require("./routes/alumnos.routes")
app.use("/alumnos", alumnosRoutes)

let alumnos = [
    {
        id: 1,
        nombre: "Axel",
        carrera: "Sistemas"
    },
    {
        id: 2,
        nombre: "Ailen",
        carrera: "Gastronomia"

    },
    {
        id: 3,
        nombre: "Brian",
        carrera: "Redes"
    },
    {
        id: 4,
        nombre: "Camila",
        carrera: "???"
    },
    {
        id: 5,
        nombre: "Milagros",
        carrera: "???"
    }
]




const docentes = [
    {
        id: 1,
        nombre: "Sergio",
        carrera: "Sistemas"
    },
    {
        id: 2,
        nombre: "Manuel",
        carrera: "Peluqueria"

    },
    {
        id: 3,
        nombre: "Diego",
        carrera: "Ingenieria"
    },
    {
        id: 4,
        nombre: "Zahira",
        carrera: "???"
    },
    {
        id: 5,
        nombre: "Nena",
        carrera: "Perrita profesional"
    }
]


//Crep un  middleware
app.use((req,res,next)=>{
    console.log(req.method)
    console.log(req.url)
    next()
})


app.get("/alumnos", (req,res)=>{
    res.json(alumnos)
})

app.get("/docentes",(req,res)=>{
    res.json(docentes)
})

app.get("/docentes/:id",(req,res)=>{
    const id = Number(req.params.id)
    const docente = docentes.find(a => a.id === id)
    res.json(docente)
})





app.listen(3000, ()=>{
    console.log("Servidor funcionando en http://localhost:3000")
})



//crear GET /alumnos

//responder al menos 5 alumnos

//Crear GET /alumnos/:id

//Probar ambas rutas con navegador y postman.

// Consultar un ID inexistente y oservar que ocurre.




