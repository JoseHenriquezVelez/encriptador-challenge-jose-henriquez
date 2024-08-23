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
    .replace(/a/gi,"qa")
    .replace(/e/gi,"re")
    .replace(/i/gi,"ki")
    .replace(/o/gi,"go")
    .replace(/u/gi,"ju");

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
    .replace(/qa/gi,"a")
    .replace(/re/gi,"e")
    .replace(/ki/gi,"i")
    .replace(/go/gi,"o")
    .replace(/ju/gi,"u");
    document.getElementById("textoencriptado").value = textointrove;
    document.getElementById("textointro").value = "";
    }
    