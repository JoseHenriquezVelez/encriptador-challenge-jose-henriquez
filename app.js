function encriptar(){
    let imagenOcultar = document.getElementById('noencuentra');
    let textoOcultar1 = document.getElementById('mensaje1');
    let textoOcultar2 = document.getElementById('mensaje2');
    let textAreaMostrar = document.getElementById('textoencriptado');
    let bCopiar = document.getElementById('bcopiar');

    if (document.getElementById("textointro").value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debes digitar algo de texto para continuar!",
            footer: 'No olvide solo minúsculas y sin acentos.'
          });;
        return;
    }
    
    let textointrove = document.getElementById("textointro").value
    .replace(/a/gi,"q")
    .replace(/e/gi,"r")
    .replace(/i/gi,"k")
    .replace(/o/gi,"g")
    .replace(/u/gi,"j")
    .replace(/s/gi,"z")
    .replace(/r/gi,"x")
    .replace(/n/gi,"m")
    .replace(/d/gi,"b")
    .replace(/l/gi,"n")
    .replace(/c/gi,"s");

    if (
        imagenOcultar.style.display === "none" &&
        textoOcultar1.style.display === "none" &&
        textoOcultar2.style.display === 'none' &&
        textAreaMostrar.style.display === "block" &&
        bCopiar.style.display === "block"
    ) {
        imagenOcultar.style.display = "block";
        textoOcultar1.style.display = "block";
        textoOcultar2.style.display = "block";
        textAreaMostrar.style.display = "none";
        bCopiar.style.display = "none";
    }else{
        imagenOcultar.style.display = "none";
        textoOcultar1.style.display = "none";
        textoOcultar2.style.display = "none";
        textAreaMostrar.style.display = "block";
        document.getElementById("textoencriptado").value = textointrove;
        bCopiar.style.display = "block";
    }
}



function copiar(id_element) {
    let textArea = document.getElementById(id_element);
    
    textArea.select();
    textArea.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textArea.value)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles:', err);
        });
}

function desencriptar(){
    let textointrove = document.getElementById("textointro").value
    .replace(/q/gi,"a")
    .replace(/r/gi,"e")
    .replace(/k/gi,"i")
    .replace(/g/gi,"o")
    .replace(/j/gi,"u")
    .replace(/z/gi,"s")
    .replace(/x/gi,"r")
    .replace(/m/gi,"n")
    .replace(/b/gi,"d")
    .replace(/n/gi,"l")
    .replace(/s/gi,"c");
    document.getElementById("textoencriptado").value = textointrove;
    document.getElementById("textointro").value = "";
    }
    