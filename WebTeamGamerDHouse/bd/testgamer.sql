-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220828.183f193084
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-10-2022 a las 23:09:03
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `testgamer`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`) VALUES
(1, 'PlayStation 4'),
(2, 'PlayStation 5'),
(3, 'PC Games'),
(4, 'Xbox');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`id`, `nombre`) VALUES
(1, 'Aventura'),
(2, 'Deportes'),
(3, 'Shooter'),
(4, 'Accion'),
(5, 'Estrategia'),
(6, 'Carreras');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(45) NOT NULL,
  `precio` varchar(45) NOT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  `genero_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `descripcion`, `precio`, `imagen`, `categoria_id`, `genero_id`) VALUES
(16, 'Assassin\'s Creed: Brotherhood                ', 'Assassin\'s Creed: La Hermandad, ​ es un video', '7500', 'producto1665860069289.jpg', 1, 3),
(17, 'Call of Duty', 'Call of Duty: Ghosts es un videojuego de guer', '5400', 'producto1665860129489.jpg', 3, 2),
(18, 'FIFA 23', 'IFA 23 es un videojuego de simulación de fútb', '8700', 'producto1665860207010.jpg', NULL, NULL),
(19, 'FIFA 23', 'FIFA 23 es un videojuego de simulación de fút', '8300', 'producto1665860248185.jpg', NULL, NULL),
(20, 'Spider-Man: Miles Morales', 'Marvel\'s Spider-Man: Miles Morales es un vide', '6400', 'producto1665860332905.jpg', NULL, NULL),
(21, 'Spider-Man', 'Marvel\'s Spider-Man es un videojuego de acció', '3558', 'producto1665860402474.jpg', NULL, NULL),
(22, 'Tennis World Tour', 'Tennis World Tour es un videojuego de tenis d', '1500', 'producto1665860515118.jpg', NULL, NULL),
(23, 'Need for Speed Payback', 'Need for Speed Payback es un videojuego de ca', '500', 'producto1665860862285.jpg', NULL, NULL),
(24, 'Need for Speed Payback', 'Need for Speed Payback es un videojuego de ca', '7500', 'producto1665861238184.jpg', NULL, NULL),
(25, 'Tomb Raider', 'Tomb Raider, también conocida como Lara Croft', '2550', 'producto1665861407377.jpg', 2, 1),
(26, 'Madden NFL 13', 'Madden NFL 13 es un videojuego de fútbol amer', '11000', 'producto1665862101527.jpg', 4, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `contraseña` varchar(200) DEFAULT NULL,
  `imagenusuario` varchar(45) NOT NULL,
  `pais` varchar(45) NOT NULL,
  `calle` varchar(45) NOT NULL,
  `numero` varchar(45) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `email`, `contraseña`, `imagenusuario`, `pais`, `calle`, `numero`, `ciudad`, `rol`) VALUES
(1, 'Javier', 'Rios', 'javi@dh.com', '$2a$10$PlqeJm36Tv0xXyrL1tbG7OuBUMKeTI6/vLBFvYP33GPfm6GoeW4oW', 'avatar1663987751258.jpg', 'Argentina', 'falsa', '1111', 'CABA', 9),
(2, ' Gabriel   ', 'Arias', 'gaby@dh.com', '$2a$10$MFVN2fLRvbVEYwVB9nrVDuKz6dD5vQ7g3QbQ9.4zBHSEQHt61alqu', 'avatar1664059103120.jpg', 'Argentina', 'Falsa', '1111', 'CABA', 1),
(3, ' Leonardo  ', 'Sigali', 'sigali@dh.com', '$2a$10$otK3nkdW3f.iOG7kbXlyp.B.Aw8mLfRS1fkkQZMtYxSiz/gcf5p1W', 'avatar1664059320141.jpg', 'Argentina', 'falsa', '2222', 'CABA', 1),
(5, 'Daniel ', 'Usuaga', 'dani@dh.com', '$2a$10$UXlblnoR3BYC07p1VyVuPup8g2APRl7irLerFl..x06ySMqVXwvCq', 'avatar1664067605515.jpg', 'Argentina', 'Falsa', '1111', 'CABA', 9),
(6, ' Admin', 'Admin', 'admin@dh.com', '$2a$10$rFFA5XH8Fb37RRQ4sjVtZOZVEv9tzUdvjN2daVJDaK2x8lG60EPL6', 'avatar1664067853428.jpg', 'Argentina', 'Administrador', '9999', 'CABA', 9),
(7, 'Admin2', 'Admin2', 'admin2@dh.com', '$2a$10$gTrdg0VFvwgyqTEqaZjKCOJlbmwBHKp0lN1ozi.StBPvvRs9u96Dm', 'avatar1664067938029.jpg', 'Argentina', 'Administradora', '5555', 'CABA', 9),
(8, 'Eugenio ', 'Mena', 'mena@dh.com', '$2a$10$5mDE92tEGzpj/DYhq6G5Z.JTBnVFY5aR3ZlBvbkZnUDIMz0VRostm', 'avatar1664068369209.jpg', 'Chile', 'falsa', '3333', 'Santiago', 1),
(9, ' Gonzalo', 'Piovi', 'piovi@dh.com', '$2a$10$zVf38V4Ob8W4z9pFFt2Y5OkFZb/LiJKoys8uENeg9x/s2Zflr8FsS', 'avatar1664068592260.jpg', 'Argentina', 'Falsa', '3333', 'CABA', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarioxproducto`
--

CREATE TABLE `usuarioxproducto` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `cantidad` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genero_id_idx` (`genero_id`),
  ADD KEY `pcategorias_idx` (`categoria_id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarioxproducto`
--
ALTER TABLE `usuarioxproducto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `conection2_idx` (`id_usuario`),
  ADD KEY `conection1_idx` (`id_producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `genero`
--
ALTER TABLE `genero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarioxproducto`
--
ALTER TABLE `usuarioxproducto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `categorias` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `generos` FOREIGN KEY (`genero_id`) REFERENCES `genero` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarioxproducto`
--
ALTER TABLE `usuarioxproducto`
  ADD CONSTRAINT `conection1` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `conection2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
