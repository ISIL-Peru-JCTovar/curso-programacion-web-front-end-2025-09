package isil.edu.pe.api.sistema.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/productos")
public class ApiProductoController {

    // Simulación de base de datos en memoria
    private Map<Long, Producto> productos = new HashMap<>();
    private long currentId = 1;

    // Constructor para inicializar productos de ejemplo
    public ApiProductoController() {
        agregarProductoEjemplo("Laptop Lenovo", "Tecnología", 2500.0, "laptop.jpg");
        agregarProductoEjemplo("Mouse Logitech", "Accesorios", 80.0, "mouse.jpg");
        agregarProductoEjemplo("Teclado Redragon", "Accesorios", 120.0, "teclado.jpg");
        agregarProductoEjemplo("Monitor Samsung", "Tecnología", 900.0, "monitor.jpg");
        agregarProductoEjemplo("Silla Gamer", "Muebles", 600.0, "silla.jpg");
        agregarProductoEjemplo("Audífonos Sony", "Audio", 150.0, "audifonos.jpg");
    }

    private void agregarProductoEjemplo(String nombre, String categoria, Double precio, String foto) {
        Producto producto = new Producto();
        producto.id = currentId++;
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.precio = precio;
        producto.foto = foto;
        productos.put(producto.id, producto);
    }

    // Modelo simple de Producto
    class Producto {
        public Long id;
        public String nombre;
        public String categoria;
        public Double precio;
        public String foto;
    }

    // Crear producto
    @PostMapping
    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) {
        producto.id = currentId++;
        productos.put(producto.id, producto);
        return new ResponseEntity<>(producto, HttpStatus.CREATED);
    }

    // Listar todos los productos
    @GetMapping
    public ResponseEntity<List<Producto>> listarProductos() {
        return ResponseEntity.ok(new ArrayList<>(productos.values()));
    }

    // Obtener producto por ID
    @GetMapping("/{id}")
    public ResponseEntity<Producto> obtenerProducto(@PathVariable Long id) {
        Producto producto = productos.get(id);
        if (producto == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(producto);
    }

    // Actualizar producto
    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id, @RequestBody Producto producto) {
        Producto existente = productos.get(id);
        if (existente == null) {
            return ResponseEntity.notFound().build();
        }
        existente.nombre = producto.nombre;
        existente.precio = producto.precio;
        return ResponseEntity.ok(existente);
    }

    // Eliminar producto
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
        if (!productos.containsKey(id)) {
            return ResponseEntity.notFound().build();
        }
        productos.remove(id);
        return ResponseEntity.noContent().build();
    }

}
