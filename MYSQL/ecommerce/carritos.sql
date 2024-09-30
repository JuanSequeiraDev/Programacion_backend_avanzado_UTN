CREATE TABLE carritos(
    carrito_id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    FOREIGN KEY(usuario_id) REFERENCES usuario(usuario_id) ON CASCADE DELETE,
    fecha_creacion DATE DEFAULT CURRENT_DATE NOT NULL,
    activo BOOLEAN DEFAULT TRUE NOT NULL
)