CREATE TABLE ordenes (
	orden_id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    FOREIGN KEY(usuario_id) REFERENCES usuarios(usuario_id) ON DELETE CASCADE,
    total DECIMAL(10, 2) NOT NULL,
    fecha_creacion DATE DEFAULT CURRENT_DATE NOT NULL,
    estado ENUM('1', '2', '3', '4') NOT NULL
)

INSERT INTO usuarios (`username`, `email`, `password_hash`,`direccion`,`telefono`,`rol`) 
VALUES
('juan', 'juanseque@gmail.com', 'soyJuan101', 'obelisco777', '1123593453', '4')

INSERT INTO usuarios (`username`, `email`, `password_hash`,`direccion`,`telefono`,`rol`) 
VALUES
('maria', 'avemaria@gmail.com', 'mariaAngel', 'catedral666', '1566904354', '2')

ALTER TABLE usuarios CHANGE `rol` `rol` ENUM('1','2','3') DEFAULT '1'/* user */