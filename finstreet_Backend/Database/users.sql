-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 07, 2021 at 06:09 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` varchar(255) NOT NULL DEFAULT '10defb1c-26d4-4850-97dc-2a72661a85a5',
  `user_name` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_image` varchar(255) DEFAULT NULL,
  `total_orders` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `last_logged_in` datetime DEFAULT NULL,
  `createdAt` date NOT NULL DEFAULT current_timestamp(),
  `updatedAt` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_password`, `user_image`, `total_orders`, `created_at`, `last_logged_in`, `createdAt`, `updatedAt`) VALUES
('2adb5b0e-ab7d-4caf-9b64-05062af32fdd', 'Sahil', 'sahiljaju1997@gmail.com', 'Shubham@123', 'profile1636289099971.png', '30', '2021-11-07 10:55:09', NULL, '2021-11-07', '2021-11-07'),
('38fe2377-507b-48aa-9ead-96102133bab5', 'Sahil', 'sahiljaju1997@gmail.com', 'Shubham@123', 'profile1636282748710.png', '10', '2021-11-07 10:59:08', NULL, '2021-11-07', '2021-11-07'),
('42147d87-663a-4c54-bc56-362725a71089', 'Suresh', 'sahiljaju1997@gmail.com', 'S12255', 'profile1636283117491.png', '9', '2021-11-07 11:05:17', NULL, '2021-11-07', '2021-11-07'),
('758b6c1c-6939-4de7-83a0-e10d0d53d76b', 'Lakshmikanth', 'sahiljaju1997@gmail.com', '123456', 'profile1636282773050.png', '10', '2021-11-07 10:59:33', NULL, '2021-11-07', '2021-11-07'),
('7d082be6-20bb-4dd5-afe8-7fc4853e5362', 'Sahil', 'sahiljaju1997@gmail.com', 'Shubham@123', 'profile1636282209199.png', '10', '2021-11-07 10:50:09', NULL, '2021-11-07', '2021-11-07'),
('8292b149-2eaf-4dcd-a928-469fcd1cd32a', 'Mehtre', 'sahiljaju1997@gmail.com', '12345974', 'profile1636282956994.png', '9', '2021-11-07 11:02:37', NULL, '2021-11-07', '2021-11-07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
