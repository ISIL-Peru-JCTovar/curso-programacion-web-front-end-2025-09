let productos = [
  {id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 2500, foto: "https://via.placeholder.com/60"},
  {id: 2, nombre: "Silla", categoria: "Muebles", precio: 150, foto: "https://via.placeholder.com/60"},
  {id: 3, nombre: "Smartphone", categoria: "Electrónica", precio: 1200, foto: "https://via.placeholder.com/60"},
  {id: 4, nombre: "Mesa", categoria: "Muebles", precio: 300, foto: "https://via.placeholder.com/60"},
  {id: 5, nombre: "Audífonos", categoria: "Accesorios", precio: 250, foto: "https://via.placeholder.com/60"},
  {id: 6, nombre: "Cafetera", categoria: "Electrodomésticos", precio: 400, foto: "https://via.placeholder.com/60"},
  {id: 7, nombre: "Libro", categoria: "Educación", precio: 80, foto: "https://via.placeholder.com/60"},
];

function renderTabla() {
  const tbody = document.getElementById('tablaProductos');
  tbody.innerHTML = '';
  productos.forEach(producto => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${producto.id}</td>
      <td>${producto.nombre}</td>
      <td>${producto.categoria}</td>
      <td>S/ ${producto.precio.toFixed(2)}</td>
      <td><img src="${producto.foto}" alt="Foto" width="60"></td>
      <td>
        <button class="btn btn-sm btn-warning me-1" onclick="editarProducto(${producto.id})">Editar</button>
        <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${producto.id})">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function abrirModalNuevo() {
  document.getElementById('productoModalLabel').textContent = 'Agregar Producto';
  document.getElementById('formProducto').reset();
  document.getElementById('productoId').value = '';
}

document.getElementById('formProducto').onsubmit = function(e) {
  e.preventDefault();
  const id = document.getElementById('productoId').value;
  const nombre = document.getElementById('nombreProducto').value;
  const categoria = document.getElementById('categoriaProducto').value;
  const precio = parseFloat(document.getElementById('precioProducto').value);
  const foto = document.getElementById('fotoProducto').value;

  if (id) {
    // Editar
    const idx = productos.findIndex(p => p.id == id);
    if (idx > -1) {
      productos[idx] = {id: Number(id), nombre, categoria, precio, foto};
    }
  } else {
    // Agregar
    const nuevoId = productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1;
    productos.push({id: nuevoId, nombre, categoria, precio, foto});
  }
  renderTabla();
  bootstrap.Modal.getInstance(document.getElementById('productoModal')).hide();
};

function editarProducto(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;
  document.getElementById('productoModalLabel').textContent = 'Editar Producto';
  document.getElementById('productoId').value = producto.id;
  document.getElementById('nombreProducto').value = producto.nombre;
  document.getElementById('categoriaProducto').value = producto.categoria;
  document.getElementById('precioProducto').value = producto.precio;
  document.getElementById('fotoProducto').value = producto.foto;
  new bootstrap.Modal(document.getElementById('productoModal')).show();
}

function eliminarProducto(id) {
  if (confirm('¿Seguro que desea eliminar este producto?')) {
    productos = productos.filter(p => p.id !== id);
    renderTabla();
  }
}

// Inicializar tabla
renderTabla();