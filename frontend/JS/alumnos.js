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



const formulario = document.querySelector("#formulario")
const mensaje = document.querySelector("#mensaje")
const listaAlumnos = document.querySelector("#listaAlumnos")



let alumnoEditandoLegajo = null;
let alumnoEditar = null;

const btnCancelar = document.querySelector("#btnCancelar")
btnCancelar.style.display="none";
const btnGuardar = document.querySelector("#btnGuardar")

const API_ALUMNOS = "http://localhost:3000/alumnos"


// async function cargarAlumnos(){
//     const respuesta = await fetch("http://localhost:3000/alumnos")
//     const alumnos = await respuesta.json()
//     console.table(alumnos)
// }
// cargarAlumnos()

formulario.addEventListener("submit", async function(event){
    event.preventDefault();

const legajo = document.querySelector("#legajo").value.trim()

const nombre = document.querySelector("#nombre").value.trim()

const carrera = document.querySelector("#carrera").value.trim()

const correo = document.querySelector("#correo").value.trim()

if(legajo === "" ||nombre === "" || carrera === "" || correo === ""){
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




// const alumnos = obtenerAlumnos()


//POST

if(alumnoEditandoLegajo === null){


const alumno = {
    legajo: Number(legajo),
    nombre: nombre,
    carrera: carrera,
    correo: correo
}
const respuesta = await fetch(API_ALUMNOS, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(alumno)
})

if(!respuesta.ok){
    mostrarMensaje("No se puedo guardar el alumno", "mje-error")
    return
}
mostrarMensaje( "Alumno guardado correctamente.", "mje-exito")

}else{ //PUT
    // const alumno = alumnos.find(alumno => alumno.id === alumnoEditandoId)
    // alumno.nombre = nombre
    // alumno.carrera = carrera
    // alumno.correo = correo
    const datosActuales = {
        nombre: nombre,
        carrera: carrera,
        correo: correo
    }

    // if(datosActuales.nombre === alumnoEditar.nombre &&
    //     datosActuales.carrera === alumnoEditar.carrera &&
    //      datosActuales.correo === alumnoEditar.correo
    // ){
    //     mostrarMensaje("No se realizaron cambios", "mje-error")
    //     return
    // }

if(JSON.stringify(datosActuales) === JSON.stringify(alumnoEditar)){
    mostrarMensaje("No se realizarion cambrios", "mje-adv")
    return
}


const respuesta = await fetch(`${API_ALUMNOS}/${alumnoEditandoLegajo}`,{
    method: "PUT",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        nombre: nombre,
        carrera: carrera,
        correo: correo
    })
})

if(!respuesta.ok){
    monstrarMensaje("No se pudo actualizar el alumno", "mje-error")
    return
}

    alumnoEditandoLegajo = null
    alumnoEditar = null
    btnGuardar.textContent = "Guardar Alumno"

    document.querySelector("#legajo").disabled = false
    mostrarMensaje("Alumno actualizado correctamente", "mje-exito")
}

//localStorage.setItem("alumnos", JSON.stringify(alumnos))

// guardarDatos("alumnos", alumnos)


//const alumnosActualizados = await obtenerAlumnos()

await actualizarListaAlumnos()

//mostrarAlumnos(alumnosActualizados)
formulario.reset()

})

async function obtenerAlumnos(){
    // const datos = localStorage.getItem("alumnos")
    // if(datos){
    //     return JSON.parse(datos)
    // }
    // return []
   // return obtenerDatos("alumnos")



   const respuesta = await fetch(API_ALUMNOS)
    const alumnos = await respuesta.json()
    return alumnos


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
        <td>${alumno.legajo}</td>
        <td>${alumno.nombre}</td>
        <td>${alumno.carrera}</td>
        <td>${alumno.correo}</td>
        <td>
            <button class="btn-editar" 
            data-legajo="${alumno.legajo}"
            title="Editar alumno">
            <i class="fa-solid fa-pen"></i></button>
            <button class="btn-eliminar" data-legajo="${alumno.legajo}"
            title="Eliminar alumno">
            <i class="fa-solid fa-trash"></i>
            </button>


        </tr>
        `;
    }
}


async function eliminarAlumno(legajo){
    const respuesta = await fetch(`${API_ALUMNOS}/${legajo}`,{
        method: "DELETE"
    })

    if(!respuesta.ok){
        mostrarMensaje("No se pudo eliminar el alumno", "mje-error")
        return
    }
    //const alumnos = obtenerAlumnos()
    // const alumnosActualizados = alumnos.filter(
    //     alumno=> alumno.id !== id

    // );

   // localStorage.setItem("alumnos", JSON.stringify(alumnosActualizados))
    //mostrarAlumnos(alumnosActualizados)
    if(alumnoEditandoLegajo===legajo){
        formulario.reset()
        alumnoEditar = null
        alumnoEditandoLegajo = null;
        btnGuardar.textContent = "Guardar alumno";
        document.querySelector("#legajo").disabled = false
        btnCancelar.style.display = "none"
    }
    mostrarMensaje("Alumno eliminado correctamente", "mje-exito")
    await actualizarListaAlumnos()
}


async function actualizarListaAlumnos(){
    const alumnos = await obtenerAlumnos()
    mostrarAlumnos(alumnos)
}


listaAlumnos.addEventListener("click",(e)=>{
    const boton_el = e.target.closest(".btn-eliminar") 
    if(boton_el){
        const legajo = Number(boton_el.dataset.legajo)
        const confirmar = confirm("Estas seguro de eliminar este alumno?")
        if(confirmar){
            eliminarAlumno(legajo)
        }
    }
    const boton_ed = e.target.closest(".btn-editar")
    if(boton_ed){
        const legajo = Number(boton_ed.dataset.legajo)
        editarAlumno(legajo)
    }
})

async function editarAlumno(legajo){
    const alumnos = await obtenerAlumnos()
    const alumno = alumnos.find(alumno => alumno.legajo === legajo)

    if(!alumno){
        mostrarMensaje("Alumno no encontrado", "mje-error")
        return
    }
    document.querySelector("#legajo").value = alumno.legajo;
    document.querySelector("#legajo").disabled = true;
    document.querySelector("#nombre").value = alumno.nombre;
    document.querySelector("#carrera").value = alumno.carrera;
    document.querySelector("#correo").value = alumno.correo;
    alumnoEditar = {
        nombre: alumno.nombre,
        carrera: alumno.carrera,
        correo: alumno.correo
    }
    alumnoEditandoLegajo = alumno.legajo;
    btnCancelar.style.display = "inline-block"
    btnGuardar.textContent = "Actualizar Alumno"
    document.querySelector("#nombre").focus()
}


function cancelarEdicion(){
    formulario.reset()
    alumnoEditandoLegajo = null
    alumnoEditar = null
    btnGuardar.textContent = "Guardar Alumno"
    document.querySelector("#legajo").disabled = false

    btnCancelar.style.display = "none"
    document.querySelector("#legajo").focus()
}

btnCancelar.addEventListener("click", cancelarEdicion)

async function iniciar(){
    // const alumnos = await obtenerAlumnos()
    // mostrarAlumnos(alumnos) 
    await actualizarListaAlumnos()
}


iniciar()
