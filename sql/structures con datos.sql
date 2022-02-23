-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-02-2022 a las 00:15:43
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `structures`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consoles`
--

CREATE TABLE `consoles` (
  `id` int(11) NOT NULL,
  `name_console` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `consoles`
--

INSERT INTO `consoles` (`id`, `name_console`, `createdAt`, `updatedAt`) VALUES
(1, 'Play Station', '2022-02-19 18:32:46', '2022-02-19 18:32:46'),
(2, 'X-Box', '2022-02-19 18:32:46', '2022-02-19 18:32:46'),
(3, 'PC', '2022-02-19 18:32:46', '2022-02-19 18:32:46');


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `editions`
--

CREATE TABLE `editions` (
  `id` int(11) NOT NULL,
  `name_editions` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `editions`
--

INSERT INTO `editions` (`id`, `name_editions`, `createdAt`, `updatedAt`) VALUES
(1, 'Estándar', '2022-02-19 18:33:27', '2022-02-19 18:33:27'),
(2, 'Deluxe', '2022-02-19 18:33:27', '2022-02-19 18:33:27'),
(3, 'Gold', '2022-02-19 18:33:27', '2022-02-19 18:33:27');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name_game` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `stock_min` int(11) DEFAULT NULL,
  `stock_max` int(11) DEFAULT NULL,
  `editions_id` int(11) DEFAULT NULL,
  `genres_id` int(11) DEFAULT NULL,
  `consoles_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `games`
--

INSERT INTO `games` (`id`, `name_game`, `price`, `description`, `stock`, `stock_min`, `stock_max`, `editions_id`, `genres_id`, `consoles_id`, `createdAt`, `updatedAt`) VALUES
(1, 'CyberPunk 2077', '5000', 'Cyberpunk 2077 es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alca', 200, 10, 250, 1, 1, 1, '2022-02-19 18:34:55', '2022-02-19 18:34:55'),
(2, 'Fifa 22', '4550', 'Juega a FIFA 22 y consigue un artículo de jugador de nueva generación. Recibe un artículo de jugador de nueva generación intransferible en FIFA Ultimate Team a partir del 15 de diciembre por jugar a FIFA 22 antes del 14 de enero de 2022.', 100, 10, 250, 3, 5, 1, '2022-02-19 18:34:55', '2022-02-21 22:58:02'),
(3, 'Forza Horizon 5', '5000', 'La aventura Horizon definitiva te espera! Explora los vibrantes paisajes de mundo abierto en constante evolución situado en México, y disfruta de una acción de conducción ilimitada y divertida con cientos de los mejores coches del mundo.', 100, 10, 250, 1, 5, 3, '2022-02-19 18:34:55', '2022-02-19 18:34:55'),
(4, 'Battlefield 4', '4000', 'Battlefield™ 2042 es un shooter en primera persona que marca el regreso a la emblemática guerra total de la franquicia. En un mundo en el futuro cercano transformado por el desorden, adáptate y sobrevive con la ayuda de tu patrulla y un arsenal de vanguar', 50, 10, 250, 2, 3, 1, '2022-02-19 18:34:55', '2022-02-21 21:15:18'),
(5, 'Age Of Empires 4', '4000', 'Uno de los juegos de estrategia en tiempo real más queridos vuelve a demostrar todo su esplendor con Age of Empires IV, donde serás la estrella de las épicas batallas históricas que moldearon el mundo que hoy conocemos.', 40, 10, 250, 1, 4, 3, '2022-02-19 18:34:55', '2022-02-19 18:34:55'),
(6, 'Yakuza Kiwami', '4500', 'El aclamado juego de SEGA que dio pie a una leyenda de los videojuegos. Conviértete en Kazuma Kiryu, un integrante de la yakuza que asume la culpa por el asesinato de un jefe del crimen organizado. 10 años después, sale de la trena y se encuentra un mundo', 90, 10, 250, 1, 1, 1, '2022-02-19 18:34:55', '2022-02-19 18:34:55'),
(7, 'Inscryption', '5050', 'Inscryption es un juego de cartas, una odisea negra como la tinta que mezcla el «roguelike» de creación de mazos, puzles de estilo «escape room» y terror psicológico en un batido con un toque de sangre. Pero más oscuros aún son los secretos inscritos en l', 20, 10, 250, 2, 4, 3, '2022-02-19 18:34:55', '2022-02-19 18:34:55'),
(8, 'AC 4: Valhalla', '6000', 'Bayek de Siwa y Aya de Alejandría fueron los precursores de la Hermandad de los Asesinos, entonces conocida como la Orden de los Ocultos. Desde el principio, su destino estuvo ligado al de la Orden de los Antiguos, que más tarde adquirió otro nombre, el d', 20, 10, 250, 3, 2, 1, '2022-02-19 18:34:55', '2022-02-19 18:34:55'),
(9, 'God Of War 4', '6000', 'Kratos ha dejado atrás su venganza contra los dioses del Olimpo y vive ahora como un hombre en los dominios de los dioses y monstruos nórdicos. En este mundo cruel e implacable debe luchar para sobrevivir… y enseñar a su hijo a hacerlo también.', 10, 10, 250, 3, 1, 1, '2022-02-19 18:34:55', '2022-02-19 18:34:55'),
(10, 'COD: Black Ops 4', '5000', '¡Vuelve Black Ops! Y lo hace con un combate multijugador fluido, asentado y descarnado; con el mayor modo Zombi hasta la fecha y tres aventuras llenas de no muertos; y con Apagón, donde el universo Black Ops cobra vida en una enorme experiencia de guerra ', 100, 10, 250, 1, 3, 1, '2022-02-19 18:34:55', '2022-02-19 18:34:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name_genre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `name_genre`, `createdAt`, `updatedAt`) VALUES
(1, 'Acción', '2022-02-19 18:31:07', '2022-02-19 18:31:07'),
(2, 'Aventura', '2022-02-19 18:31:07', '2022-02-19 18:31:07'),
(3, 'FPS', '2022-02-19 18:31:07', '2022-02-19 18:31:07'),
(4, 'Estrategia', '2022-02-19 18:31:07', '2022-02-19 18:31:07'),
(5, 'Deportes', '2022-02-19 18:31:07', '2022-02-19 18:31:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `games_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `img_url`, `games_id`, `createdAt`, `updatedAt`) VALUES
(1, 'cyberpunk-2077-250px.jpg', 1, '2022-02-19 18:50:34', '2022-02-19 18:50:34'),
(2, 'fifa-22-250px.jpg', 2, '2022-02-19 18:50:34', '2022-02-19 18:50:34'),
(3, 'forza-horizon-5-250px.jpg', 3, '2022-02-19 18:50:34', '2022-02-19 18:50:34'),
(4, 'battlefield.jpg', 4, '2022-02-19 18:50:34', '2022-02-19 18:50:34'),
(5, 'age-of-empires-4-150px.jpg', 5, '2022-02-19 18:50:34', '2022-02-19 18:50:34'),
(6, 'yakuza-kiwami-250px.jpg', 6, '2022-02-19 18:50:34', '2022-02-19 18:50:34'),
(7, 'imagen-1643165410915.jpg', 7, '2022-02-19 18:50:34', '2022-02-19 18:50:34'),
(8, 'ACValhalla-250px.jpg', 8, '2022-02-19 18:50:34', '2022-02-19 18:50:34'),
(9, 'imagen-1643165542890.jpg', 9, '2022-02-19 18:50:34', '2022-02-19 18:50:34'),
(10, 'COD-Black-Ops-4-250px.jpg', 10, '2022-02-19 18:50:34', '2022-02-19 18:50:34'),
(11, 'COD-Black-Ops-4-350.jpg', 10, '2022-02-19 18:50:34', '2022-02-19 18:50:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orderdetails`
--

CREATE TABLE `orderdetails` (
  `id` int(11) NOT NULL,
  `quantity` decimal(10,0) DEFAULT NULL,
  `subtotal` decimal(10,0) DEFAULT NULL,
  `orders_id` int(11) DEFAULT NULL,
  `games_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `number` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `payments_id` int(11) DEFAULT NULL,
  `statuses_id` int(11) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `name_payment` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220219022434-create-genre.js'),
('20220219022441-create-edition.js'),
('20220219022449-create-statuse.js'),
('20220219022455-create-payment.js'),
('20220219022502-create-console.js'),
('20220219022522-create-user.js'),
('20220219033301-create-game.js'),
('20220219034056-create-order.js'),
('20220219034219-create-image.js'),
('20220219034346-create-order-detail.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `statuses`
--

CREATE TABLE `statuses` (
  `id` int(11) NOT NULL,
  `name_statuses` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `type_user` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `email`, `password`, `avatar`, `type_user`, `createdAt`, `updatedAt`) VALUES
(9, 'usuario', 'usuario@gmail.com', '$2a$10$M3oyGFNqnkCK9rEWlC/BtuMwkkWs.0Wq5DcwWZfFDKGU/Hl8t8EY2', 'default.png', 0, '2022-02-22 01:07:03', '2022-02-22 01:07:03'),
(12, 'Admin', 'admin@gamesoul.com', '$2a$10$1Lz47kPsd.Z.dv1Qz3FfKeLhOdjHOjBNxyz/ru/pANF4Ie1LJx1dW', 'default.png', 1, '2022-02-22 14:01:41', '2022-02-22 14:01:41'),
(13, 'Gary', 'garyrodriguez361@gmail.com', '$2a$10$8WQfA6KtdeYUTMWA3T1VOOYS9UbUDcMha2Pwng7vvF9XjaVcgFpca', 'editUserfoto-1645557802866.png', 0, '2022-02-22 14:51:49', '2022-02-22 19:23:23');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `consoles`
--
ALTER TABLE `consoles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `editions`
--
ALTER TABLE `editions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD KEY `editions_id` (`editions_id`),
  ADD KEY `genres_id` (`genres_id`),
  ADD KEY `consoles_id` (`consoles_id`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `games_id` (`games_id`);

--
-- Indices de la tabla `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_id` (`orders_id`),
  ADD KEY `games_id` (`games_id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `payments_id` (`payments_id`),
  ADD KEY `statuses_id` (`statuses_id`),
  ADD KEY `users_id` (`users_id`);

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `statuses`
--
ALTER TABLE `statuses`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `consoles`
--
ALTER TABLE `consoles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `editions`
--
ALTER TABLE `editions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `statuses`
--
ALTER TABLE `statuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`editions_id`) REFERENCES `editions` (`id`),
  ADD CONSTRAINT `games_ibfk_2` FOREIGN KEY (`genres_id`) REFERENCES `genres` (`id`),
  ADD CONSTRAINT `games_ibfk_3` FOREIGN KEY (`consoles_id`) REFERENCES `consoles` (`id`);

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`games_id`) REFERENCES `games` (`id`);

--
-- Filtros para la tabla `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`games_id`) REFERENCES `games` (`id`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`payments_id`) REFERENCES `payments` (`id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`statuses_id`) REFERENCES `statuses` (`id`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
