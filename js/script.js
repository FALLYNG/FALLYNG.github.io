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
      imageElement.src = images[index];
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
    
      let error = '';
      let resultHtml = '';
      if (name.length > 50) {
        error += 'El nombre no debe superar los 50 caracteres.<br>';
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        error += 'El correo debe ser válido.<br>';
      }
      if (consulta === '') {
        error += 'Debe seleccionar un tipo de consulta.<br>';
      }
      if (error) {
        resultHtml = `<div class="error">${error}</div>`;
      } else {
        resultHtml = `
          <div class="result">
            <h3>Datos enviados:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Correo:</strong> ${email}</p>
            <p><strong>Tipo de consulta:</strong> ${consulta}</p>
          </div>
        `;
      }
      document.getElementById('result').innerHTML = resultHtml;
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
  