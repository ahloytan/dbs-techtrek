DROP DATABASE IF EXISTS dbs_techtrek;

CREATE DATABASE dbs_techtrek;
USE dbs_techtrek;

DROP TABLE IF EXISTS `user_account`;
CREATE TABLE `user_account` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `username` VARCHAR(256) NOT NULL,
    `password` VARCHAR(256) NOT NULL,
    `role_id` INT NOT NULL,
    
    PRIMARY KEY (`id`)
);

-- import user_account
INSERT INTO user_account (username, password, role_id)
VALUES ('admin@admin.com', '$2b$10$0vmsmN2KRCTpYCOaZ/.7X./PhEnKglTkeGHM/OhODzTVxMz8SCqz2', 1);

DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `address` JSON NOT NULL,
    `avatar` VARCHAR(256) NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `email` VARCHAR(256) NOT NULL,
    `name` VARCHAR(256) NOT NULL,
    `phone_number` VARCHAR(256) NOT NULL,
    
	PRIMARY KEY (`id`)
);

-- import customers
INSERT INTO customers (address, avatar, created_at, email, name, phone_number)
VALUES ('{"city": "Cleveland", "country": "USA", "state": "Ohio", "street": "2849 Fulton Street"}','/assets/avatars/avatar-carson-darrin.png','2024-01-15 10:30:00','carson.darrin@devias.io','Carson Darrin','304-428-3097'),
('{"city": "Atlanta", "country": "USA", "state": "Georgia", "street": "1865 Pleasant Hill Road"}','/assets/avatars/avatar-fran-perez.png','2024-01-14 11:30:00','fran.perez@devias.io','Fran Perez','712-351-5711'),
('{"city": "North Canton", "country": "USA", "state": "Ohio", "street": "4894 Lakeland Park Drive"}','/assets/avatars/avatar-jie-yan-song.png','2024-01-14 14:30:00','jie.yan.song@devias.io','Jie Yan Song','770-635-2682'),
('{"city": "Madrid", "country": "Spain", "state": "Basque Country", "street": "4158 Hedge Street"}','/assets/avatars/dpgc.webp','2024-01-14 21:30:00','aloysiustan.2020@scis.smu.edu.sg','Aloysius Tan','91234567'),
('{"city": "San Diego", "country": "USA", "state": "California", "street": "75247"}','/assets/avatars/avatar-miron-vitold.png','2024-01-14 17:30:00','miron.vitold@devias.io','Miron Vitold','972-333-4106'),
('{"city": "Berkeley", "country": "USA", "state": "California", "street": "317 Angus Road"}','/assets/avatars/avatar-penjani-inyene.png','2024-01-14 15:30:00','penjani.inyene@devias.io','Penjani Inyene','858-602-3409'),
('{"city": "Carson City", "country": "USA", "state": "Nevada", "street": "2188 Armbrester Drive"}','/assets/avatars/avatar-omar-darboe.png','2024-01-14 09:30:00','omar.darobe@devias.io','Omar Darobe','415-907-2647'),
('{"city": "Los Angeles", "country": "USA", "state": "California", "street": "1798 Hickory Ridge Drive"}','/assets/avatars/avatar-siegbert-gottfried.png','2024-01-14 12:30:00','siegbert.gottfried@devias.io','Siegbert Gottfried','702-661-1654'),
('{"city": "Murray", "country": "USA", "state": "Utah", "street": "3934 Wildrose Lane"}','/assets/avatars/avatar-iulia-albu.png','2024-01-14 16:30:00','iulia.albu@devias.io','Iulia Albu','313-812-8947'),
('{"city": "Salt Lake City", "country": "USA", "state": "Utah", "street": "368 Lamberts Branch Road"}','/assets/avatars/avatar-nasimiyu-danai.png','2024-01-14 19:30:00','nasimiyu.danai@devias.io','Nasimiyu Danai','801-301-7894');

DROP TABLE IF EXISTS `country`;
CREATE TABLE IF NOT EXISTS `country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) UNIQUE NOT NULL,
  PRIMARY KEY `PK` (`id`)
);

INSERT INTO `country` (`id`, `name`) VALUES
	(1, 'Singapore'),
	(2, 'Japan');

DROP TABLE IF EXISTS `destination`;
CREATE TABLE IF NOT EXISTS `destination` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country_id` int NOT NULL,
  `cost` float NOT NULL DEFAULT 0,
  `name` varchar(50) NOT NULL,
  `notes` mediumtext DEFAULT NULL,
  PRIMARY KEY `PK` (`id`),
  -- KEY `DestinationCountryFK` (`country_id`),
  CONSTRAINT `DestinationCountryFK` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

INSERT INTO `destination` (`id`, `country_id`, `cost`, `name`, `notes`) VALUES
	(1, 1, 50, 'Marina Bay Sands', 'Iconic hotel with an infinity pool and stunning views of the city skyline. Open 24/7.'),
	(2, 1, 30, 'Gardens by the Bay', 'Futuristic park featuring Supertree Grove and Flower Dome conservatories. Open daily from 9 AM to 9 PM.'),
	(3, 1, 40, 'Sentosa Island', 'Fun-filled island resort with beaches, theme parks, and various attractions. Open daily from 10 AM to 7 PM.'),
	(4, 1, 60, 'Universal Studios Singapore', 'Amusement park with movie-themed rides and entertainment. Open daily from 10 AM to 7 PM.'),
	(5, 1, 35, 'Singapore Zoo', 'Award-winning zoo showcasing diverse wildlife species. Open daily from 8:30 AM to 6 PM.');

DROP TABLE IF EXISTS `itinerary`;
CREATE TABLE IF NOT EXISTS `itinerary` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country_id` int(10) NOT NULL DEFAULT 0,
  `user_id` int(10) NOT NULL DEFAULT 0,
  `budget` float NOT NULL DEFAULT 0,
  `title` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY `PK` (`id`),
  `title_image` varchar(100) NOT NULL DEFAULT '',
  -- KEY `ItineraryCountryFK` (`country_id`),
  -- KEY `ItineraryUserFK` (`user_id`),
  CONSTRAINT `ItineraryCountryFK` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `ItineraryUserFK` FOREIGN KEY (`user_id`) REFERENCES `customers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

INSERT INTO `itinerary` (`id`, `country_id`, `user_id`, `budget`, `title`, `title_image`) VALUES
	(1, 1, 1, 500, 'Sentosa Serenity: Island Escapes & Tropical Delights', 'sentosa'),
	(2, 1, 1, 800, 'Gardens by the Bay: Nature\'s Wonderland in the City', 'gbtb'),
	(3, 1, 2, 600, 'Kampong Glam Adventure: History, Street Art & Malay Cuisine', 'kampong-glam'),
	(4, 2, 1, 3500, 'Tokyo Trek: Exploring the Vibrant Metropolis', 'tokyo-trek'),
	(5, 2, 1, 2800, 'Hokkaido Highlights: Nature\'s Playground', 'hokkaido');

CREATE TABLE IF NOT EXISTS `itinerary_destination` (
  `id` int NOT NULL AUTO_INCREMENT,
  `destination_id` int(10) NOT NULL DEFAULT 0,
  `itinerary_id` int(10) NOT NULL DEFAULT 0,
  PRIMARY KEY `PK` (`id`),
  -- KEY `IDDestinationFK` (`destination_id`),
  -- KEY `IDItineraryFK` (`itinerary_id`),
  CONSTRAINT `IDDestinationFK` FOREIGN KEY (`destination_id`) REFERENCES `destination` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `IDItineraryFK` FOREIGN KEY (`itinerary_id`) REFERENCES `itinerary` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

INSERT INTO `itinerary_destination` (`id`, `destination_id`, `itinerary_id`) VALUES
	(1, 1, 1),
	(2, 2, 1),
	(3, 3, 1),
	(4, 4, 2),
	(5, 5, 2),
	(6, 2, 3);

select * from customers