INSERT INTO usuarios (`username`,`email`,`password_hash`) VALUES ('pepe', 'pepe@hotmail.com', 'pepesito123')

                                                O

INSERT INTO usuarios
(`username`,`email`,`password_hash`) 
VALUES
('pepe2', 'pepe2@hotmail.com', 'pepesito1234'),
('maria', 'maria@gmail.com', 'maria1234')

/* Actualizar un valor no primoridal */

UPDATE `usuarios` SET `creado_en` = '2024-09-04' WHERE `usuarios`.`usuario_id` = 2;

/* Alterar valores */

ALTER TABLE usuarios CHANGE `creado_en` `creado_en` DATE DEFAULT CURRENT_DATE NOT NULL

ALTER TABLE usuarios ADD `creado_en` ''''''''''''''''''

/*      Buscar * Desde * Por *     */

SELECT * FROM `usuarios` WHERE activo = 0;

SELECT username, creado_en FROM `usuarios` WHERE username = 'pepe' OR email = 'pepe2@hotmail.com';

SELECT username, creado_en FROM `usuarios` WHERE username = 'pepe' AND email = 'pepe@hotmail.com';

SELECT * FROM `usuarios` ORDER BY `usuario_id` DESC

/*  Actualizar valores con criterio */

UPDATE `usuarios` SET email= 'pepe@gmail.com', password_hash= 'pepe_123' WHERE usuario_id = 1

/*  Borra valores de una tabla */

DELETE FROM usuarios WHERE usuario_id = 4  /* NO OLVIDAR EL WHERE */