// console.log("Inicio")
// setTimeout(() =>{
//     console.log("Buscando alumnos")
// }, 3000)

// console.log("Fin")

// function saludar(){
//     console.log("Hola")
// }

// function ejecutar(funcion){
//     funcion();
// }

// ejecutar(saludar)


// function despedirse(){
//     console.log("Hasta luego")
// }

// setTimeout(despedirse, 3000)


// setTimeout(()=>{
//     console.log("Buscando docentes...")
// },2000)
// setTimeout(()=>{
//     console.log("Buscando materias...")
// },4000)
// setTimeout(()=>{
//     console.log("Buscando cursos...")
// },1000)


// console.log("Abriendo SGA")
// setTimeout(()=>{
//     console.log("Alumnos cargados")

// },3000)

// console.log("El usuario puede seguir navegando")



// En 5 segundos de espera "Lista recibida"
// console.log(Solicitando lista de alumnos...)

//Mientras espera "Mientras tanto el programa sigue ejecutanose"

// console.log("Solicitando lista de alumnos...")
// setTimeout(()=>{
//     console.log("Lista Recibida.")

// },5000
// )
// console.log("Mientras tanto el programa sigue ejecutandose...")



// function obtenerAlumno(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Ya tengo el arreglo.")
//             resolve(["Ana","Juan","Pedro"])

//         }, 3000)
//     })
// }
// // obtenerAlumno().then((alumnos)=>{
// //     console.log(alumnos)
// // })


// async function iniciar(){

//     const alumnos = await obtenerAlumno()
//     console.log(alumnos)
// }

// iniciar()


// login(usuario).then((usuario)=>{
//     return obtenerCursos(usuario.id)
// })
// .then((cursos)=>{
//     return obtenerNotas(cursos)
// })
// .then((notas)=>{
//     console.log(notas)
// })
// .catch((error)=>{
//     console.log(error)
// })


// async function mostrarNotas(){
//     try{
//     const usuario = await login(usuario)
//     const cursos = await obtenerCursos(usuario.id)
//     const notas = await otenerNotas(cursos)
//     console.log(notas)
// }catch(error){
//     console.log(error);
// }
// }



function obtenerClima(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("22*C - Soleado")
            
        },2000);
    })
}

//con then.
obtenerClima().then((clima)=>{
    console.log(clima)
})


//con async/await
async function mostrarClima(){
    const clima = await obtenerClima()
    console.log(clima)
}

mostrarClima()

function consultarSaldo(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(125000)
        },3000)
    }
    )
}


async function mostrarSaldo(){
    const saldo = await consultarSaldo()
    console.log(`Su saldo es: $${saldo}`)
}

mostrarSaldo()

function iniciarSesion(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Bienvenido, Natan :P")
        },2000)
    })
}


async function mostrarUsuario(){
    const inicio = await iniciarSesion()
    console.log(inicio)
}

mostrarUsuario()

function obtenerUsuario(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                id: 1,
                nombre: "Maria",
                edad:25
            })
        },3000)
    })
}


async function mostrarUsuario2(){
    console.log("Consultando usuario...")
    const usuario = await obtenerUsuario()
    console.log(usuario);
}

mostrarUsuario2();