const contenedorQR = document.getElementById('contenedorQR');

const formulario = document.getElementById('formulario')

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit',(e) =>{
e.preventDefault();
QR.makeCode(formulario.link.value);  // link se obtiene del formulario de la clase index.html  linea 18
});

