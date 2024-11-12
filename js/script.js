//Index
function initIndex() {
  const images = [
    'https://http2.mlstatic.com/D_NQ_NP_731780-MLU74826772607_022024-O.webp',
    'https://acdn.mitiendanube.com/stores/032/169/products/wahl-detailer-cordless1-bbddf2e5838495908116231588621475-240-0.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7crqtNcThJcH0Kg1Y83KGFCXSYIUle9XXA&s'
  ];
  let currentIndex = 0;
  function showImage(index) {
    const imageElement = document.getElementById('carouselImage');
    if(imageElement){imageElement.src = images[index]};
  }
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  showImage(currentIndex);
  console.log("Página de inicio cargada");
  window.prevImage = prevImage;
  window.nextImage = nextImage;
}
document.addEventListener("DOMContentLoaded", initIndex);
function showImage(index) {
  const imageElement = document.getElementById('carouselImage');
  if (imageElement) { // Verifica si el elemento existe
    imageElement.src = images[index];
  } else {
    console.error('El elemento con id "carouselImage" no existe en el DOM.');
  }
}

//Articulo
function initArticulo() {
  console.log("Página de productos cargada");
}
//Contacto
function initContacto() {
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const consulta = document.getElementById('consulta').value;
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = '';
  let error = false;
  const resultDiv = document.createElement('div');
  const errorDiv = document.createElement('div');
  errorDiv.classList.add('error');
if (name.trim() === '') {
const errorText = document.createElement('p');
errorText.innerText = 'El nombre no puede estar vacío.';
errorDiv.appendChild(errorText);
error = true;
} else if (name.length > 50) {
const errorText = document.createElement('p');
errorText.innerText = 'El nombre no debe superar los 50 caracteres.';
errorDiv.appendChild(errorText);
error = true;
}
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    const errorText = document.createElement('p');
    errorText.innerText = 'El correo debe ser válido.';
    errorDiv.appendChild(errorText);
    error = true;
  }
  if (consulta === '') {
    const errorText = document.createElement('p');
    errorText.innerText = 'Debe seleccionar un tipo de consulta.';
    errorDiv.appendChild(errorText);
    error = true;
  }
  if (error) {
    resultContainer.appendChild(errorDiv);
  } else {
    resultDiv.classList.add('result');

    const title = document.createElement('h3');
    title.innerText = 'Datos enviados:';
    resultDiv.appendChild(title);

    const nameParagraph = document.createElement('p');
    nameParagraph.innerHTML = `<strong>Nombre:</strong> ${name}`;
    resultDiv.appendChild(nameParagraph);

    const emailParagraph = document.createElement('p');
    emailParagraph.innerHTML = `<strong>Correo:</strong> ${email}`;
    resultDiv.appendChild(emailParagraph);

    const consultaParagraph = document.createElement('p');
    consultaParagraph.innerHTML = `<strong>Tipo de consulta:</strong> ${consulta}`;
    resultDiv.appendChild(consultaParagraph);

    resultContainer.appendChild(resultDiv);
  }
});
console.log("Página de contacto cargada");
}
//Funciones
document.addEventListener("DOMContentLoaded", function () {
  const pageId = document.body.getAttribute("id");
  if (pageId === "index") initIndex();
  else if (pageId === "articulo") initProducto();
  else if (pageId === "contacto") initContacto();
});  