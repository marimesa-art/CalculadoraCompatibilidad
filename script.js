document.querySelector(".botonResultados").addEventListener("click", calcularCompatibilidad);

function calcularCompatibilidad() {
    // Obtener los valores ingresados por el usuario
    const tuSigno = document.getElementById("tu-signo").value.toLowerCase();
    const suSigno = document.getElementById("su-signo").value.toLowerCase();
    const tuEdad = parseInt(document.querySelectorAll(".edadEncuesta")[0].value, 10) || 0;
    const suEdad = parseInt(document.querySelectorAll(".edadEncuesta")[1].value, 10) || 0;
    const tuCaracter = document.getElementById("que-reconoce").value.toLowerCase();
    const suCaracter = document.getElementById("esa-persona").value.toLowerCase();
    const tuColor = document.getElementById("micolor-favorito").value.toLowerCase();
    const suColor = document.getElementById("sucolor-favorito").value.toLowerCase();

    let compatibilidad = 0;

    // Compatibilidad de signos
    const compatibilidadSignos = {
        aries: ["leo", "sagitario", "aries"],
        tauro: ["virgo", "capricornio", "tauro"],
        géminis: ["libra", "acuario", "géminis"],
        cáncer: ["escorpio", "piscis", "cáncer"],
        leo: ["aries", "sagitario", "leo"],
        virgo: ["tauro", "capricornio", "virgo"],
        libra: ["géminis", "acuario", "libra"],
        escorpio: ["cáncer", "piscis", "escorpio"],
        sagitario: ["aries", "leo", "sagitario"],
        capricornio: ["tauro", "virgo", "capricornio"],
        acuario: ["géminis", "libra", "acuario"],
        piscis: ["cáncer", "escorpio", "piscis"],
    };

    if (compatibilidadSignos[tuSigno]?.includes(suSigno)) {
        compatibilidad += 40;
    } else {
        compatibilidad += 20;
    }

    // Compatibilidad de edad
    const diferenciaEdad = Math.abs(tuEdad - suEdad);
    if (diferenciaEdad <= 2) {
        compatibilidad += 20;
    } else if (diferenciaEdad <= 5) {
        compatibilidad += 10;
    }

    // Compatibilidad de características
    if (tuCaracter === suCaracter) {
        compatibilidad += 20;
    }

    // Compatibilidad de colores favoritos
    if (tuColor === suColor) {
        compatibilidad += 20;
    }

    // Calcular porcentaje final
    const porcentajeResultado = Math.min(compatibilidad, 100);

    // Mostrar resultado
    const resultadoTexto = document.querySelector(".porcentajeResultado");
    resultadoTexto.textContent = `${porcentajeResultado}%`;

    // Añadir animación
    resultadoTexto.classList.remove("porcentajeAnimado");
    void resultadoTexto.offsetWidth; // Reinicia la animación
    resultadoTexto.classList.add("porcentajeAnimado");

    // Mostrar mensaje adicional
    const textoResultado = document.querySelector(".textoResultado");
    if (porcentajeResultado >= 80) {
        textoResultado.textContent = "¡Son el uno para el otro!";
    } else if (porcentajeResultado >= 50) {
        textoResultado.textContent = "Podrían ser compatibles con algo de esfuerzo.";
    } else {
        textoResultado.textContent = "Tal vez una bonita amistad sea lo ideal.";
    }
}