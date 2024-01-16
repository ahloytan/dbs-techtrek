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
('{"city": "Madrid", "country": "Spain", "street": "4158 Hedge Street"}','/assets/avatars/dpgc.webp','2024-01-14 21:30:00','aloysiustan.2020@scis.smu.edu.sg','Aloysius Tan','91234567'),
('{"city": "San Diego", "country": "USA", "state": "California", "street": "75247"}','/assets/avatars/avatar-miron-vitold.png','2024-01-14 17:30:00','miron.vitold@devias.io','Miron Vitold','972-333-4106'),
('{"city": "Berkeley", "country": "USA", "state": "California", "street": "317 Angus Road"}','/assets/avatars/avatar-penjani-inyene.png','2024-01-14 15:30:00','penjani.inyene@devias.io','Penjani Inyene','858-602-3409'),
('{"city": "Carson City", "country": "USA", "state": "Nevada", "street": "2188 Armbrester Drive"}','/assets/avatars/avatar-omar-darboe.png','2024-01-14 09:30:00','omar.darobe@devias.io','Omar Darobe','415-907-2647'),
('{"city": "Los Angeles", "country": "USA", "state": "California", "street": "1798 Hickory Ridge Drive"}','/assets/avatars/avatar-siegbert-gottfried.png','2024-01-14 12:30:00','siegbert.gottfried@devias.io','Siegbert Gottfried','702-661-1654'),
('{"city": "Murray", "country": "USA", "state": "Utah", "street": "3934 Wildrose Lane"}','/assets/avatars/avatar-iulia-albu.png','2024-01-14 16:30:00','iulia.albu@devias.io','Iulia Albu','313-812-8947'),
('{"city": "Salt Lake City", "country": "USA", "state": "Utah", "street": "368 Lamberts Branch Road"}','/assets/avatars/avatar-nasimiyu-danai.png','2024-01-14 19:30:00','nasimiyu.danai@devias.io','Nasimiyu Danai','801-301-7894');

select * from customers