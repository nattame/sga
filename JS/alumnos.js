const alumnos = [
    {
        id: 1,
        nombre: "Ana"

    },
    {
        id: 2,
        nombre: "Jose"
        
    },
    {
        id: 3,
        nombre: "Ailen"
        
    },
    {
        id: 4,
        nombre: "Axel"
        
    }
];

function obtenerAlumno(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(alumnos)
        }, 2000);
    })
}


async function iniciar(){
    const datos = await obtenerAlumno()
    console.table(datos)
}
iniciar()



// crear obtenerMaterias()

//crear obtenerDocentes()

//mostrar los datos a traves de async/await


function obtenerMaterias(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(['Metodologia','Programacion','Legislacion',''])
        },4000)
    })
}

async function mostrarMaterias(){
    const materias = await obtenerMaterias()
    console.log(materias)
}

const docentes = [
    {
        id: 1,
        nombre: "Marcela"

    },
    {
        id: 2,
        nombre: "Eze"
        
    },
    {
        id: 3,
        nombre: "Irina"
        
    },
    {
        id: 4,
        nombre: "???"
        
    }
];


function obtenerDocentes(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(docentes);

        },5000)
    })
}

async function mostrarDocentes(){
    const datosdoc = await obtenerDocentes();
    console.table(datosdoc)
}