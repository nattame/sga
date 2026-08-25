




const formDocentes = document.querySelector("#formDocentes")

formDocentes.addEventListener("submit", function(event){
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim()
    const correo = document.querySelector("#correo").value.trim()


    if(nombre === "" || correo === ""){
        mostrarMensaje("Todos los campos son obligatorios", "mje-error")
        return
    }
    if(!correo.includes("@")){
        mostrarMensaje("Inserte un correo valido!")
    }
})


function obtenerDocentes(){
    obtenerDatos("docentes")
}