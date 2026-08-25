function mostrarMensaje(texto, clase){
    const mensaje = document.querySelector("#mensaje")
    mensaje.textContent = texto;
    mensaje.className = `mensaje ${clase}`;
    mensaje.style.display= "block";
    setTimeout(()=>{
        mensaje.className = "oculto";
        
    }, 3000)
}