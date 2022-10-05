-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220828.183f193084
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-09-2022 a las 22:25:30
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
-- Base de datos: `gamer_dh`
--

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
  `genero` varchar(45) NOT NULL,
  `plataforma` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `descripcion`, `precio`, `imagen`, `genero`, `plataforma`) VALUES
(1, 'Daniel', 'un juego', '1000', 'producto1663679180164.png', 'accion', 'playstation'),
(2, 'Daniel', 'un juego', '1000', 'producto1663679327364.png', 'accion', 'playstation'),
(3, 'Red redation', 'Juego de suspenso', '5000', 'producto1663730270262.jpg', 'suspenso', 'xbox'),
(4, 'fifa', 'Juego de futbol', '3500', 'producto1663730414501.jpeg', 'deportes', 'pc'),
(5, 'Fortnite', 'FORTNITE : juego de prueba para ver que corno', '1500', 'producto1663983138782.jpg', 'accion', 'playstation'),
(6, 'ASSASIN', 'Juego de Asesinos', '1500', 'producto1663983667848.jpg', 'accion', 'xbox'),
(7, 'ASSASIN', 'Juego de Asesinos', '1500', 'producto1663983705771.jpg', 'accion', 'xbox'),
(8, 'Tennis World Tour', 'juego de Tennis Professional', '1500', 'producto1663983947006.jpg', 'deportes', 'playstation'),
(9, 'Spiderman', 'Marvel\'s Spider-Man es un videojuego de acció', '7500', 'Spiderman.jpg', 'accion', 'playstation4'),
(10, 'Spiderman Miles Morales', 'Marvel\'s Spider-Man: Miles Morales es un vide', '9000', 'SpidermanMilesMorales.jpg', 'Aventura', 'xbox');

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
  `rol` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `email`, `contraseña`, `imagenusuario`, `pais`, `calle`, `numero`, `ciudad`, `rol`) VALUES
(1, 'Javier', 'Rios', 'javi@dh.com', '$2a$10$PlqeJm36Tv0xXyrL1tbG7OuBUMKeTI6/vLBFvYP33GPfm6GoeW4oW', 'avatar1663987751258.jpg', 'Argentina', 'falsa', '1111', 'CABA', '9'),
(2, ' Gabriel   ', 'Arias', 'gaby@dh.com', '$2a$10$MFVN2fLRvbVEYwVB9nrVDuKz6dD5vQ7g3QbQ9.4zBHSEQHt61alqu', 'avatar1664059103120.jpg', 'Argentina', 'Falsa', '1111', 'CABA', '1'),
(3, ' Leonardo  ', 'Sigali', 'sigali@dh.com', '$2a$10$otK3nkdW3f.iOG7kbXlyp.B.Aw8mLfRS1fkkQZMtYxSiz/gcf5p1W', 'avatar1664059320141.jpg', 'Argentina', 'falsa', '2222', 'CABA', '1'),
(5, 'Daniel ', 'Usuaga', 'dani@dh.com', '$2a$10$UXlblnoR3BYC07p1VyVuPup8g2APRl7irLerFl..x06ySMqVXwvCq', 'avatar1664067605515.jpg', 'Argentina', 'Falsa', '1111', 'CABA', '9'),
(6, ' Admin', 'Admin', 'admin@dh.com', '$2a$10$rFFA5XH8Fb37RRQ4sjVtZOZVEv9tzUdvjN2daVJDaK2x8lG60EPL6', 'avatar1664067853428.jpg', 'Argentina', 'Administrador', '9999', 'CABA', '9'),
(7, 'Admin2', 'Admin2', 'admin2@dh.com', '$2a$10$gTrdg0VFvwgyqTEqaZjKCOJlbmwBHKp0lN1ozi.StBPvvRs9u96Dm', 'avatar1664067938029.jpg', 'Argentina', 'Administradora', '5555', 'CABA', '9'),
(8, 'Eugenio ', 'Mena', 'mena@dh.com', '$2a$10$5mDE92tEGzpj/DYhq6G5Z.JTBnVFY5aR3ZlBvbkZnUDIMz0VRostm', 'avatar1664068369209.jpg', 'Chile', 'falsa', '3333', 'Santiago', '1'),
(9, ' Gonzalo', 'Piovi', 'piovi@dh.com', '$2a$10$zVf38V4Ob8W4z9pFFt2Y5OkFZb/LiJKoys8uENeg9x/s2Zflr8FsS', 'avatar1664068592260.jpg', 'Argentina', 'Falsa', '3333', 'CABA', '1');

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
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuarioxproducto`
--
ALTER TABLE `usuarioxproducto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarioxproducto`
--
ALTER TABLE `usuarioxproducto`
  ADD CONSTRAINT `conection1` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `conection2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
