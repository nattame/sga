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
const mensaje = document.querySelector("#mensaje")
const listaAlumnos = document.querySelector("#listaAlumnos")


let alumnoEditandoId = null;

formulario.addEventListener("submit",function(event){
    event.preventDefault();


const nombre = document.querySelector("#nombre").value.trim()

const carrera = document.querySelector("#carrera").value.trim()

const correo = document.querySelector("#correo").value.trim()

if(nombre === "" || carrera === "" || correo === ""){
    mostrarMensaje("Todos los campos son obligatorios", "mje-error")
    return 
}

if(!correo.includes("@")){
    mostrarMensaje("Ingrese un correo electronico valido", "mje-error")
    return
}
if(nombre.length < 3){
    mostrarMensaje("El nombre debe tener al menos 3 caracteres", "mje-error")
    return

}




const alumnos = obtenerAlumnos()

if(alumnoEditandoId === null){


const alumno = {
    id: Date.now(),
    nombre: nombre,
    carrera: carrera,
    correo: correo
}
alumnos.push(alumno)
mostrarMensaje( "Alumno guardado correctamente.", "mje-exito")

}else{
    const alumno = alumnos.find(alumno => alumno.id === alumnoEditandoId)
    alumno.nombre = nombre
    alumno.carrera = carrera
    alumno.correo = correo
    alumnoEditandoId = null
    formulario.querySelector("button").textContent = "Guardar alumnon"


    mostrarMensaje("Alumno actualizado correctamente", "mje-exito")
}

localStorage.setItem("alumnos", JSON.stringify(alumnos))
mostrarAlumnos(alumnos)
formulario.reset()

})

function obtenerAlumnos(){
    const datos = localStorage.getItem("alumnos")
    if(datos){
        return JSON.parse(datos)
    }
    return []
}


function mostrarMensaje(texto, clase){
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${clase}`;
    mensaje.style.display= "block";
    setTimeout(()=>{
        mensaje.textContent = " ";
        mensaje.className = "oculto";
        
    }, 3000)
}



function mostrarAlumnos(alumnos){
    listaAlumnos.innerHTML = ""
    for (const alumno of alumnos){
        listaAlumnos.innerHTML += `
        <tr>
        <td>${alumno.id}</td>
        <td>${alumno.nombre}</td>
        <td>${alumno.carrera}</td>
        <td>${alumno.correo}</td>
        <td>
            <button class="btn-editar" 
            data-id="${alumno.id}"
            title="Editar alumno">
            <i class="fa-solid fa-pen"></i></button>
            <button class="btn-eliminar" data-id="${alumno.id}"
            title="Eliminar alumno">
            <i class="fa-solid fa-trash"></i>
            </button>


        </tr>
        `;
    }
}


function eliminarAlumno(id){
    const alumnos = obtenerAlumnos()
    const alumnosActualizados = alumnos.filter(
        alumno=> alumno.id !== id

    );

    localStorage.setItem("alumnos", JSON.stringify(alumnosActualizados))
    mostrarAlumnos(alumnosActualizados)
    if(alumnoEditandoId===id){
        formulario.reset()
        alumnoEditandoId = null;
        formulario.querySelector("button").textContent = "Guardar alumno";
    }
    mostrarMensaje("Alumno eliminado correctamente", "mje-exito")
}


listaAlumnos.addEventListener("click",(e)=>{
    const boton_el = e.target.closest(".btn-eliminar") 
    if(boton_el){
        const id = Number(boton_el.dataset.id)
        const confirmar = confirm("Estas seguro de eliminar este alumno?")
        if(confirmar){
            eliminarAlumno(id)
        }
    }
    const boton_ed = e.target.closest(".btn-editar")
    if(boton_ed){
        const id = Number(boton_ed.dataset.id)
        editarAlumno(id)
    }
})

function editarAlumno(id){
    const alumnos = obtenerAlumnos()
    const alumno = alumnos.find(alumno => alumno.id === id)
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;
    alumnoEditandoId = id;
    formulario.querySelector("button").textContent = "Actualizar Alumno"
    document.querySelector("#nombre").focus()
}

const alumnos = obtenerAlumnos()
mostrarAlumnos(alumnos)