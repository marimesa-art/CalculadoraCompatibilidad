function calcularCompatibilidad() {
    const nombre = document.getElementById('nombre').value.toLowerCase();
    const nombreEspecial = document.getElementById('nombreEspecial').value.toLowerCase();

    
    if (!nombre || !nombreEspecial) {
        alert("Por favor, ingresa ambos nombres.");
        return;
    }

    //Porcentaje de compatibilidad basado en los nombres
    let compatibilidad = (nombre.length * nombreEspecial.length) % 100;

   
    const resultado = document.getElementById('resultado');
    const porcentajeElem = resultado.querySelector('.porcentaje');
    const mensajeElem = resultado.querySelector('.mensaje');
    const detalleElem = resultado.querySelector('.detalle');

    porcentajeElem.textContent = `${compatibilidad}%`;
    
    if (compatibilidad > 80) {
        mensajeElem.textContent = "¡Amor verdadero!";
        detalleElem.textContent = "Parece que ustedes están destinados a ser una pareja legendaria de los 70s.";
    } else if (compatibilidad > 50) {
        mensajeElem.textContent = "Una conexión especial";
        detalleElem.textContent = "Podrían tener una historia de amor digna de una película retro.";
    } else if (compatibilidad > 20) {
        mensajeElem.textContent = "Amigos con potencial";
        detalleElem.textContent = "Tal vez aún falta un poco de magia, ¡pero la amistad es un gran inicio!";
    } else {
        mensajeElem.textContent = "Solo amistad";
        detalleElem.textContent = "Aunque su relación se quede en la Friendzone, muchos amores nacen de la amistad. ¡Quién sabe! Pueden forjar una buena amistad, llena de complicidad y risas.";
    }

    resultado.style.display = 'block';
}

function limpiar() {
    document.getElementById('nombre').value = '';
    document.getElementById('nombreEspecial').value = '';
    document.getElementById('resultado').style.display = 'none';
}
