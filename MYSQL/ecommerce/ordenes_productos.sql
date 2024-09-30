CREATE TABLE orden_productos (
	orden_productos_id INT PRIMARY KEY AUTO_INCREMENT,
    orden_id INT NOT NULL,
    FOREIGN KEY(orden_id) REFERENCES ordenes(orden_id) ON DELETE CASCADE,
    producto_id INT NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES productos(producto_id) ON DELETE CASCADE,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL
)