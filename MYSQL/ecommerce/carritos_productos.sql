CREATE TABLE carritos_productos(
    carritos_productos_id INT PRIMARY KEY AUTO_INCREMENT,
    carrito_id INT NOT NULL,
    FOREIGN KEY (carrito_id) REFERENCES carritos(carrito_id) ON DELETE CASCADE,
    producto_id INT NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES productos(producto_id) ON DELETE CASCADE,
    cantidad INT NOT NULL,
    fecha_agregado DATE DEFAULT CURRENT_DATE NOT NULL
)