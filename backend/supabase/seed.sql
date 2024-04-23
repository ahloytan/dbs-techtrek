SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.5 (Ubuntu 15.5-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', 'authenticated', 'authenticated', 'admin1@admin.com', '$2a$10$jRJenxKXzU3q1N0K9MtDeecte6BTgVexqe6vxhw.OdlwKbuxGd5by', '2024-03-13 06:59:25.082971+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-04-20 15:05:35.577914+00', '{"role_id": 1, "provider": "email", "full_name": "Aloysius Tan", "providers": ["email"], "unique_code": "f706c698-bb00-41fb-896c-b24c36d600da"}', '{"sub": "fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0", "email": "admin1@admin.com", "email_verified": false, "phone_verified": false}', NULL, '2024-03-13 06:59:25.07413+00', '2024-04-20 15:05:35.593559+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '87caa20c-2357-4839-b8b3-0204105a49de', 'authenticated', 'authenticated', 'user3@user.com', '$2a$10$og3s6n258Xg72ByS4iwPR.JgCjwrD17H9.Sz.Wk7HtMdHyxYZOZ7i', '2024-03-25 15:22:22.285123+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-04-15 03:11:46.486535+00', '{"role_id": 2, "provider": "email", "full_name": "user3", "providers": ["email"], "unique_code": "ff764e5c-f520-4de3-a0a7-09666b504628"}', '{"sub": "87caa20c-2357-4839-b8b3-0204105a49de", "email": "user3@user.com", "email_verified": false, "phone_verified": false}', NULL, '2024-03-25 15:22:22.276307+00', '2024-04-15 03:11:46.488329+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '5f53fa30-02b3-4ac3-b576-d726faef4549', 'authenticated', 'authenticated', 'superadmin@superadmin.com', '$2a$10$kedKUlhVmDxjlIoAJl9S0ufPkSDxwoqUn5cTkXXFliW7/RJ4lwlh6', '2024-04-20 05:28:22.607038+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', true, '2024-04-20 05:28:22.566666+00', '2024-04-20 05:28:22.607258+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '{"sub": "fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0", "email": "admin1@admin.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-13 06:59:25.07795+00', '2024-03-13 06:59:25.078043+00', '2024-03-13 06:59:25.078043+00', '27e35c4c-4801-4136-9bdf-147d1f5d4c64'),
	('87caa20c-2357-4839-b8b3-0204105a49de', '87caa20c-2357-4839-b8b3-0204105a49de', '{"sub": "87caa20c-2357-4839-b8b3-0204105a49de", "email": "user3@user.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-25 15:22:22.280737+00', '2024-03-25 15:22:22.280789+00', '2024-03-25 15:22:22.280789+00', '4d6ec659-af8c-4833-9ae5-84714dcb0e8a'),
	('5f53fa30-02b3-4ac3-b576-d726faef4549', '5f53fa30-02b3-4ac3-b576-d726faef4549', '{"sub": "5f53fa30-02b3-4ac3-b576-d726faef4549", "email": "superadmin@superadmin.com", "email_verified": false, "phone_verified": false}', 'email', '2024-04-20 05:28:22.588276+00', '2024-04-20 05:28:22.58835+00', '2024-04-20 05:28:22.58835+00', '082c8bf9-abab-46dd-99c1-97132014d1f2');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('30d8b860-b8aa-4582-a0b0-fd724f762fbd', '87caa20c-2357-4839-b8b3-0204105a49de', '2024-04-15 03:11:46.486607+00', '2024-04-15 03:11:46.486607+00', NULL, 'aal1', NULL, NULL, 'node', '13.250.33.217', NULL),
	('ed9ccc51-d4aa-4c77-877a-c5eb949a76a5', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-04-16 13:52:03.836598+00', '2024-04-16 13:52:03.836598+00', NULL, 'aal1', NULL, NULL, 'node', '13.212.226.113', NULL),
	('1e08424e-dc3a-46db-9cd1-89ca3b61515c', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-04-16 13:53:47.311548+00', '2024-04-16 13:53:47.311548+00', NULL, 'aal1', NULL, NULL, 'node', '13.212.226.113', NULL),
	('270b390b-966f-4026-b17c-940d41bdd822', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-04-20 15:05:35.577988+00', '2024-04-20 15:05:35.577988+00', NULL, 'aal1', NULL, NULL, 'node', '54.254.58.178', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('30d8b860-b8aa-4582-a0b0-fd724f762fbd', '2024-04-15 03:11:46.48865+00', '2024-04-15 03:11:46.48865+00', 'password', 'd713d746-de08-429a-bfd7-3380663a6b63'),
	('ed9ccc51-d4aa-4c77-877a-c5eb949a76a5', '2024-04-16 13:52:03.843996+00', '2024-04-16 13:52:03.843996+00', 'password', 'e1ff754c-e708-459d-a212-923df8ee571f'),
	('1e08424e-dc3a-46db-9cd1-89ca3b61515c', '2024-04-16 13:53:47.316977+00', '2024-04-16 13:53:47.316977+00', 'password', '4f75d8c7-7ff3-4dd9-8471-3dda549561da'),
	('270b390b-966f-4026-b17c-940d41bdd822', '2024-04-20 15:05:35.593967+00', '2024-04-20 15:05:35.593967+00', 'password', '5b8663c3-b6c8-4798-9e27-4c6556c93aeb');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 54, 'IJtKwTUVW5-s0in8fX3ykA', '87caa20c-2357-4839-b8b3-0204105a49de', false, '2024-04-15 03:11:46.487401+00', '2024-04-15 03:11:46.487401+00', NULL, '30d8b860-b8aa-4582-a0b0-fd724f762fbd'),
	('00000000-0000-0000-0000-000000000000', 55, '4qxNANlyFzmoQDqtl8aeJQ', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-04-16 13:52:03.839524+00', '2024-04-16 13:52:03.839524+00', NULL, 'ed9ccc51-d4aa-4c77-877a-c5eb949a76a5'),
	('00000000-0000-0000-0000-000000000000', 56, 'Ib7EfRmxyoefGtgoQR8b5g', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-04-16 13:53:47.313704+00', '2024-04-16 13:53:47.313704+00', NULL, '1e08424e-dc3a-46db-9cd1-89ca3b61515c'),
	('00000000-0000-0000-0000-000000000000', 57, 'X_b1i_lT6OQw8--hgiaYNA', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-04-20 15:05:35.583587+00', '2024-04-20 15:05:35.583587+00', NULL, '270b390b-966f-4026-b17c-940d41bdd822');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: country; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."country" ("id", "name") OVERRIDING SYSTEM VALUE VALUES
	(1, 'Singapore'),
	(2, 'Japan'),
	(3, 'France'),
	(4, 'USA'),
	(5, 'Italy'),
	(6, 'Australia'),
	(7, 'Spain');


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."customers" ("address", "avatar", "created_at", "email", "name", "phone_number", "id") VALUES
	('{"city": "Cleveland", "state": "Ohio", "street": "2849 Fulton Street", "country": "USA"}', 'avatar-carson-darrin.webp', '2024-01-15 10:30:00', 'carson.darrin@devias.io', 'Carson Darrin', '304-428-3097', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0'),
	('{"city": "Atlanta", "state": "Georgia", "street": "1865 Pleasant Hill Road", "country": "USA"}', 'avatar-fran-perez.webp', '2024-01-14 11:30:00', 'fran.perez@devias.io', 'Fran Perez', '712-351-5711', '87caa20c-2357-4839-b8b3-0204105a49de'),
	('{"city": "North Canton", "state": "Ohio", "street": "4894 Lakeland Park Drive", "country": "USA"}', 'avatar-jie-yan-song.webp', '2024-01-14 14:30:00', 'jie.yan.song@devias.io', 'Jie Yan Song', '770-635-2682', '72f310ff-3362-4ad4-a7e9-850b960a031a'),
	('{"city": "Madrid", "state": "Basque Country", "street": "4158 Hedge Street", "country": "Spain"}', 'dpgc.webp', '2024-01-14 21:30:00', 'aloysiustan.2020@scis.smu.edu.sg', 'Aloysius Tan', '91234567', '85c38a7d-9954-485b-9e41-c12611f36edf'),
	('{"city": "San Diego", "state": "California", "street": "75247", "country": "USA"}', 'avatar-miron-vitold.webp', '2024-01-14 17:30:00', 'miron.vitold@devias.io', 'Miron Vitold', '972-333-4106', '047df30f-af7b-4e21-ab3c-ddf04fa0778c'),
	('{"city": "Berkeley", "state": "California", "street": "317 Angus Road", "country": "USA"}', 'avatar-penjani-inyene.webp', '2024-01-14 15:30:00', 'penjani.inyene@devias.io', 'Penjani Inyene', '858-602-3409', '28fe16e0-a083-45c5-b5e1-3575476b8395'),
	('{"city": "Carson City", "state": "Nevada", "street": "2188 Armbrester Drive", "country": "USA"}', 'avatar-omar-darboe.webp', '2024-01-14 09:30:00', 'omar.darobe@devias.io', 'Omar Darobe', '415-907-2647', '3a875f70-c21d-4a67-ad60-5c258fd3407b'),
	('{"city": "Los Angeles", "state": "California", "street": "1798 Hickory Ridge Drive", "country": "USA"}', 'avatar-siegbert-gottfried.webp', '2024-01-14 12:30:00', 'siegbert.gottfried@devias.io', 'Siegbert Gottfried', '702-661-1654', '436440af-e58a-471e-81e1-2da6c6ac2a0a'),
	('{"city": "Murray", "state": "Utah", "street": "3934 Wildrose Lane", "country": "USA"}', 'avatar-iulia-albu.webp', '2024-01-14 16:30:00', 'iulia.albu@devias.io', 'Iulia Albu', '313-812-8947', '76ee136f-4ad4-4035-ae7d-ad8e222fdab0'),
	('{"city": "Salt Lake City", "state": "Utah", "street": "368 Lamberts Branch Road", "country": "USA"}', 'avatar-nasimiyu-danai.webp', '2024-01-14 19:30:00', 'nasimiyu.danai@devias.io', 'Nasimiyu Danai', '801-301-7894', '7868d62d-081c-4b54-9b2e-9e5515bf62a4');


--
-- Data for Name: destination; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."destination" ("id", "country_id", "cost", "name", "notes", "image_name") OVERRIDING SYSTEM VALUE VALUES
	(1, 1, 50, 'Marina Bay Sands', 'Iconic hotel with an infinity pool and stunning views of the city skyline. Open 24/7.', 'mbs'),
	(2, 1, 30, 'Gardens by the Bay', 'Futuristic park featuring Supertree Grove and Flower Dome conservatories. Open daily from 9 AM to 9 PM.', 'gbtb'),
	(3, 1, 40, 'Sentosa Island', 'Fun-filled island resort with beaches, theme parks, and various attractions. Open daily from 10 AM to 7 PM.', 'sentosa'),
	(4, 1, 60, 'Universal Studios Singapore', 'Amusement park with movie-themed rides and entertainment. Open daily from 10 AM to 7 PM.', 'uss'),
	(5, 1, 35, 'Singapore Zoo', 'Award-winning zoo showcasing diverse wildlife species. Open daily from 8:30 AM to 6 PM.', 'singapore-zoo'),
	(6, 3, 20, 'Eiffel Tower', 'Iconic iron lattice tower in Paris', 'eiffel-tower'),
	(7, 3, 15, 'Louvre Museum', 'World''s largest art museum', 'louvre-museum'),
	(8, 3, 10, 'Palace of Versailles', 'Opulent royal château near Paris', 'palace-versailles'),
	(9, 4, 25, 'Statue of Liberty', 'Symbol of freedom in New York City', 'statue-liberty'),
	(10, 4, 30, 'Grand Canyon', 'Spectacular natural gorge in Arizona', 'grand-canyon'),
	(12, 2, 18, 'Mount Fuji', 'Japan''s highest peak', 'mount-fuji'),
	(13, 2, 10, 'Tokyo Disneyland', 'Disney theme park in Tokyo', 'tokyo-disneyland'),
	(14, 2, 20, 'Hiroshima Peace Memorial', 'Monument to commemorate victims of the atomic bomb', 'hpm'),
	(16, 5, 12, 'Venice Canals', 'Romantic waterways in Venice', 'venice-canals'),
	(17, 5, 15, 'Leaning Tower of Pisa', 'Iconic leaning tower in Pisa, Italy', 'ltp'),
	(18, 6, 22, 'Sydney Opera House', 'Iconic performing arts venue', 'soh'),
	(19, 6, 10, 'Great Barrier Reef', 'World''s largest coral reef system', 'gbr'),
	(20, 6, 18, 'Uluru (Ayers Rock)', 'Massive sandstone monolith in the Outback', 'uar'),
	(21, 7, 14, 'Sagrada Familia', 'Gaudí''s unfinished masterpiece in Barcelona', 'sagrada-familia'),
	(23, 7, 8, 'Park Güell', 'Artistic park also designed by Gaudí', 'park-guell'),
	(11, 4, 12, 'Disneyland', 'Famous theme park in California', 'disneyland-california'),
	(15, 5, 17, 'Colosseum', 'Ancient amphitheater in Rome', 'colosseum'),
	(22, 7, 16, 'Alhambra', 'Stunning Moorish palace in Granada', 'alhambra');


--
-- Data for Name: itinerary; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."itinerary" ("id", "country_id", "budget", "title", "title_image", "user_id") OVERRIDING SYSTEM VALUE VALUES
	(1, 1, 500, 'Sentosa Serenity: Island Escapes & Tropical Delights', 'sentosa', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0'),
	(2, 1, 800, 'Gardens by the Bay: Nature''s Wonderland in the City', 'gbtb', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0'),
	(3, 1, 600, 'Kampong Glam Adventure: History, Street Art & Malay Cuisine', 'kampong-glam', '87caa20c-2357-4839-b8b3-0204105a49de'),
	(4, 2, 3500, 'Tokyo Trek: Exploring the Vibrant Metropolis', 'tokyo-trek', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0'),
	(5, 2, 2800, 'Hokkaido Highlights: Nature''s Playground', 'hokkaido', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0'),
	(6, 4, 750, 'Famous theme park in California', 'disneyland-california', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0'),
	(7, 4, 400, 'Spectacular natural gorge in Arizona', 'grand-canyon', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0'),
	(8, 7, 1500, 'Gaudí''s unfinished masterpiece in Barcelona', 'sagrada-familia', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0'),
	(9, 6, 750, 'Iconic performing arts venue', 'soh', '87caa20c-2357-4839-b8b3-0204105a49de'),
	(10, 6, 275, 'World''s largest coral reef system', 'gbr', '87caa20c-2357-4839-b8b3-0204105a49de');


--
-- Data for Name: itinerary_destination; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."itinerary_destination" ("id", "destination_id", "itinerary_id") OVERRIDING SYSTEM VALUE VALUES
	(15, 1, 1),
	(16, 2, 1),
	(17, 3, 1),
	(18, 4, 2),
	(19, 5, 2),
	(20, 2, 3),
	(21, 11, 6),
	(22, 10, 7),
	(23, 21, 8),
	(24, 12, 4),
	(25, 14, 5),
	(26, 18, 9),
	(27, 19, 10);


--
-- Data for Name: user_account; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_account" ("id", "full_name", "role_id", "unique_code", "telegram_chat_id") VALUES
	('fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', 'Aloysius Tan', 1, 'f706c698-bb00-41fb-896c-b24c36d600da', NULL),
	('87caa20c-2357-4839-b8b3-0204105a49de', 'user3', 2, 'ff764e5c-f520-4de3-a0a7-09666b504628', NULL);


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 57, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: country_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."country_id_seq"', 11, true);


--
-- Name: destination_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."destination_id_seq"', 23, true);


--
-- Name: itinerary_destination_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."itinerary_destination_id_seq"', 27, true);


--
-- Name: itinerary_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."itinerary_id_seq"', 10, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;
