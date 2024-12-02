fetch('../data/datos.json')
  .then(respuesta => respuesta.json())
  .then(datos => mostrarProductos(datos.productos));

const mostrarProductos = (datos) => {
  let productos = "";
  const contenedor = document.querySelector('#contenedor');
  productos += `<div class="row g-4">`; 
  datos.forEach(dato => {
    productos += `
<div class="col-md-4 d-flex justify-content-center">
  <div class="card" style="width: 100%; max-width: 250px;">
    <img src="${dato.imagen}" class="card-img-top" alt="Imagen de ${dato.titulo}">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title text-center">${dato.titulo}</h5>
      <p class="card-text text-center">${dato.descripcion}</p>
      <div class="mt-auto d-flex justify-content-center">
        <a href="#" class="btn btn-primary w-auto">Comprar</a>
      </div>
    </div>
  </div>
</div>



    `;
  });
  productos += `</div>`;

  contenedor.innerHTML = productos;
};
