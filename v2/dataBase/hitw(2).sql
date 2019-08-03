-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  sam. 03 août 2019 à 16:14
-- Version du serveur :  10.1.38-MariaDB
-- Version de PHP :  7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `hitw`
--

-- --------------------------------------------------------

--
-- Structure de la table `childs`
--

CREATE TABLE `childs` (
  `child_id` int(11) NOT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `picture` varchar(200) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `size` int(22) NOT NULL,
  `weight` float NOT NULL,
  `place` varchar(100) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'pas trouvé',
  `date_of_disappearance` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `childs`
--

INSERT INTO `childs` (`child_id`, `lastname`, `firstname`, `picture`, `description`, `age`, `sex`, `size`, `weight`, `place`, `status`, `date_of_disappearance`) VALUES
(1, 'mathild', 'ghana', '', 'disparu depuis hier', 6, 'male', 0, 0, 'liège', 'pas trouvé', '2019-08-03 12:55:21'),
(2, 'zaidoon', 'obaidi', '', 'dissss', 23, 'male', 0, 0, 'anvers', 'pas trouvé', '2019-08-03 12:55:21');

-- --------------------------------------------------------

--
-- Structure de la table `missions`
--

CREATE TABLE `missions` (
  `id` int(11) NOT NULL,
  `lng` float NOT NULL,
  `lat` float NOT NULL,
  `radius` float NOT NULL,
  `child_id` int(11) NOT NULL,
  `status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `posters`
--

CREATE TABLE `posters` (
  `id` int(11) NOT NULL,
  `lng` double DEFAULT NULL,
  `lat` double DEFAULT NULL,
  `missionId` int(11) NOT NULL,
  `volunteerId` int(11) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `posters`
--

INSERT INTO `posters` (`id`, `lng`, `lat`, `missionId`, `volunteerId`, `status`) VALUES
(1, 5.5718, 50.6326, 0, 0, '');

-- --------------------------------------------------------

--
-- Structure de la table `volunteers`
--

CREATE TABLE `volunteers` (
  `volunteerId` int(11) NOT NULL,
  `firstname` varchar(30) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `currentMissionId` int(22) NOT NULL,
  `gsm_benevole` varchar(20) DEFAULT NULL,
  `email` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `volunteers`
--

INSERT INTO `volunteers` (`volunteerId`, `firstname`, `lastname`, `currentMissionId`, `gsm_benevole`, `email`) VALUES
(1, 'julien', 'laurent', 0, '00324622235155558', 'zaidundsj@yahoo.com');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `childs`
--
ALTER TABLE `childs`
  ADD PRIMARY KEY (`child_id`);

--
-- Index pour la table `missions`
--
ALTER TABLE `missions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `child_id` (`child_id`);

--
-- Index pour la table `posters`
--
ALTER TABLE `posters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `missionId` (`missionId`),
  ADD KEY `volunteerId` (`volunteerId`);

--
-- Index pour la table `volunteers`
--
ALTER TABLE `volunteers`
  ADD PRIMARY KEY (`volunteerId`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `childs`
--
ALTER TABLE `childs`
  MODIFY `child_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `missions`
--
ALTER TABLE `missions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `posters`
--
ALTER TABLE `posters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `volunteers`
--
ALTER TABLE `volunteers`
  MODIFY `volunteerId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
