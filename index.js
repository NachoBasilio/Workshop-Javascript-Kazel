const root = document.getElementById('root');
const historialBox = document.getElementById('historial');
const boton = document.getElementById('Crear');
const tareaInput = document.getElementById('Tarea')
const descripcionInput = document.getElementById('Description');
const showHistory = document.getElementById('show');
const deleteHistory = document.getElementById('delete');
const historial = []

const creadorDeNodos = (tituloTarea, descripcionTarea) => {
    const nodoPadre = document.createElement('div')
    const titulo = document.createElement('h2')
    const descripcion = document.createElement('p')
    const botonEliminar = document.createElement('button')
    titulo.innerText = tituloTarea
    descripcion.innerText = descripcionTarea
    botonEliminar.innerText = "x"
    botonEliminar.addEventListener("click", (e)=>{
        botonEliminar.parentNode.remove()
    })
    nodoPadre.appendChild(titulo)
    nodoPadre.appendChild(descripcion)
    nodoPadre.appendChild(botonEliminar)
    return nodoPadre
}

boton.addEventListener('click', ()=>{
    let titulo = tareaInput.value
    let descripcion = descripcionInput.value
    const aux = creadorDeNodos(titulo, descripcion)
    tareaInput.value = ""
    descripcionInput.value = ""
    historial.push(titulo)
    root.appendChild(aux)
})

showHistory.addEventListener('click', ()=>{
    historialBox.innerHTML = ""
    for(let i = 0; i < historial.length; i++){
        const titulo = document.createElement('h2')
        titulo.innerText = historial[i]
        historialBox.appendChild(titulo)
    }
})

deleteHistory.addEventListener('click', ()=>{
    historialBox.innerHTML = ""
})