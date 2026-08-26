




const formDocentes = document.querySelector("#formulario")

const listaDocentes = document.querySelector("#listaDocentes")


let docenteEditandoId = null;

formDocentes.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim()
    const correo = document.querySelector("#correo").value.trim()


    if (nombre === "" || correo === "") {
        mostrarMensaje("Todos los campos son obligatorios", "mje-error")
        return
    }
    if (!correo.includes("@")) {
        mostrarMensaje("Inserte un correo valido!", "mje-error")
        return
    }




    const docentes = obtenerDocentes()
    if(docenteEditandoId === null){
    const docente = {
        id: Date.now(),
        nombre: nombre,
        correo: correo,
    }
    docentes.push(docente)


    mostrarMensaje("Docente agregado exitosamente!","mje-exito")
}


    guardarDatos("docentes", docentes)
    mostrarDocentes(docentes)

    formulario.reset()

})

function obtenerDocentes() {
    return obtenerDatos("docentes")
}

function mostrarDocentes(docentes) {
    listaDocentes.innerHTML = ""
    for (const docente of docentes) {
      listaDocentes.innerHTML += `
        <tr>
        <td>${docente.id}</td>
        <td>${docente.nombre}</td>
        <td>${docente.correo}</td>
        <td>
            <button class="btn-editar" 
            data-id="${docente.id}"
            title="Editar docente">
            <i class="fa-solid fa-pen"></i></button>
            <button class="btn-eliminar" data-id="${docente.id}"
            title="Eliminar docente">
            <i class="fa-solid fa-trash"></i>
            </button>


        </tr>
        `;
    }
}

const docentes = obtenerDocentes()
mostrarDocentes(docentes);