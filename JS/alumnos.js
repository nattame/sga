// const alumnos = [
//     {
//         id: 1,
//         nombre: "Ana"

//     },
//     {
//         id: 2,
//         nombre: "Jose"
        
//     },
//     {
//         id: 3,
//         nombre: "Ailen"
        
//     },
//     {
//         id: 4,
//         nombre: "Axel"
        
//     }
// ];

// function obtenerAlumno(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(alumnos)
//         }, 2000);
//     })
// }


// async function iniciar(){
//     const datos = await obtenerAlumno()
//     console.table(datos)
// }
// iniciar()



// // crear obtenerMaterias()

// //crear obtenerDocentes()

// //mostrar los datos a traves de async/await


// function obtenerMaterias(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(['Metodologia','Programacion','Legislacion',''])
//         },4000)
//     })
// }

// async function mostrarMaterias(){
//     const materias = await obtenerMaterias()
//     console.log(materias)
// }

// const docentes = [
//     {
//         id: 1,
//         nombre: "Marcela"

//     },
//     {
//         id: 2,
//         nombre: "Eze"
        
//     },
//     {
//         id: 3,
//         nombre: "Irina"
        
//     },
//     {
//         id: 4,
//         nombre: "???"
        
//     }
// ];


// function obtenerDocentes(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(docentes);

//         },5000)
//     })
// }

// async function mostrarDocentes(){
//     const datosdoc = await obtenerDocentes();
//     console.table(datosdoc)
// }


// mostrarDocentes()
// mostrarMaterias()



//ejemplo

// async function prueba(){
// const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
// console.log(respuesta)}
// prueba()


// async function obtenerAlumno() {
//     const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
//     const alumnos = await respuesta.json()
//     // console.table(alumnos)
//     return alumnos
// }

// function mostrarAlumno(alumnos){

//     console.log(typeof alumnos)
//     localStorage.setItem("alumnos", JSON.stringify(alumnos))
//     const datos = localStorage.getItem("alumnos")
//     console.log(typeof datos)
//     console.log(datos)
//     const alumnosRecuperados = JSON.parse(datos)
//     console.log(typeof alumnosRecuperados)
    
//     console.table(alumnosRecuperados)
    //  console.table(alumnos)
    // console.log(alumnos[0].email)

    // for (const alumno of alumnos){
    //     console.log(alumno.name, alumno.email)
    // }


// }
// async function inciciar(){
//     const alumnos = await obtenerAlumno()
//     mostrarAlumno(alumnos)
// }

// inciciar()


// /post

// / comments

// id, titulo, usuario



const formulario = document.querySelector("#formAlumno")

formulario.addEventListener("submit",function(event){
    event.preventDefault();


const nombre = document.querySelector("#nombre").value

const carrera = document.querySelector("#carrera").value

const correo = document.querySelector("#correo").value

const alumno = {
    id: Date.now(),
    nombre: nombre,
    carrera: carrera,
    correo: correo
}
const alumnos = obtenerAlumnos()
alumnos.push(alumno)
localStorage.setItem("alumnos", JSON.stringify(alumnos))
mostrarAlumnos(alumnos)
formulario.reset()



});

function obtenerAlumnos(){
    const datos = localStorage.getItem("alumnos")
    if(datos){
        return JSON.parse(datos)
    }
    return []
}


const listaAlumnos = document.querySelector("#listaAlumnos")

function mostrarAlumnos(alumnos){
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos){
        listaAlumnos.innerHTML += `
        <li>
            ${alumno.nombre} -
            ${alumno.carrera} -
            ${alumno.correo}
        </li>`;
    }
}