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
	('00000000-0000-0000-0000-000000000000', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', 'authenticated', 'authenticated', 'admin1@admin.com', '$2a$10$jRJenxKXzU3q1N0K9MtDeecte6BTgVexqe6vxhw.OdlwKbuxGd5by', '2024-03-13 06:59:25.082971+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-03-20 16:45:50.102811+00', '{"role_id": 1, "provider": "email", "providers": ["email"]}', '{"sub": "fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0", "email": "admin1@admin.com", "email_verified": false, "phone_verified": false}', NULL, '2024-03-13 06:59:25.07413+00', '2024-03-20 16:45:50.104662+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '{"sub": "fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0", "email": "admin1@admin.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-13 06:59:25.07795+00', '2024-03-13 06:59:25.078043+00', '2024-03-13 06:59:25.078043+00', '27e35c4c-4801-4136-9bdf-147d1f5d4c64');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('95b0caed-1885-46d4-b7b0-08775f765337', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-03-20 16:45:50.102904+00', '2024-03-20 16:45:50.102904+00', NULL, 'aal1', NULL, NULL, 'node', '13.212.36.141', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('95b0caed-1885-46d4-b7b0-08775f765337', '2024-03-20 16:45:50.105054+00', '2024-03-20 16:45:50.105054+00', 'password', '15cae091-b3e1-4937-a923-1620a8dec12f');


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
	('00000000-0000-0000-0000-000000000000', 16, 'TWQPyR50WKwffrCEg9UzqQ', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-03-20 16:45:50.103714+00', '2024-03-20 16:45:50.103714+00', NULL, '95b0caed-1885-46d4-b7b0-08775f765337');


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
	(2, 'Japan');


--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."customers" ("id", "address", "avatar", "created_at", "email", "name", "phone_number") OVERRIDING SYSTEM VALUE VALUES
	(1, '{"city": "Cleveland", "country": "USA", "state": "Ohio", "street": "2849 Fulton Street"}', 'avatar-carson-darrin.webp', '2024-01-15 10:30:00', 'carson.darrin@devias.io', 'Carson Darrin', '304-428-3097'),
	(2, '{"city": "Atlanta", "country": "USA", "state": "Georgia", "street": "1865 Pleasant Hill Road"}', 'avatar-fran-perez.webp', '2024-01-14 11:30:00', 'fran.perez@devias.io', 'Fran Perez', '712-351-5711'),
	(3, '{"city": "North Canton", "country": "USA", "state": "Ohio", "street": "4894 Lakeland Park Drive"}', 'avatar-jie-yan-song.webp', '2024-01-14 14:30:00', 'jie.yan.song@devias.io', 'Jie Yan Song', '770-635-2682'),
	(4, '{"city": "Madrid", "country": "Spain", "state": "Basque Country", "street": "4158 Hedge Street"}', 'dpgc.webp', '2024-01-14 21:30:00', 'aloysiustan.2020@scis.smu.edu.sg', 'Aloysius Tan', '91234567'),
	(5, '{"city": "San Diego", "country": "USA", "state": "California", "street": "75247"}', 'avatar-miron-vitold.webp', '2024-01-14 17:30:00', 'miron.vitold@devias.io', 'Miron Vitold', '972-333-4106'),
	(6, '{"city": "Berkeley", "country": "USA", "state": "California", "street": "317 Angus Road"}', 'avatar-penjani-inyene.webp', '2024-01-14 15:30:00', 'penjani.inyene@devias.io', 'Penjani Inyene', '858-602-3409'),
	(7, '{"city": "Carson City", "country": "USA", "state": "Nevada", "street": "2188 Armbrester Drive"}', 'avatar-omar-darboe.webp', '2024-01-14 09:30:00', 'omar.darobe@devias.io', 'Omar Darobe', '415-907-2647'),
	(8, '{"city": "Los Angeles", "country": "USA", "state": "California", "street": "1798 Hickory Ridge Drive"}', 'avatar-siegbert-gottfried.webp', '2024-01-14 12:30:00', 'siegbert.gottfried@devias.io', 'Siegbert Gottfried', '702-661-1654'),
	(9, '{"city": "Murray", "country": "USA", "state": "Utah", "street": "3934 Wildrose Lane"}', 'avatar-iulia-albu.webp', '2024-01-14 16:30:00', 'iulia.albu@devias.io', 'Iulia Albu', '313-812-8947'),
	(10, '{"city": "Salt Lake City", "country": "USA", "state": "Utah", "street": "368 Lamberts Branch Road"}', 'avatar-nasimiyu-danai.webp', '2024-01-14 19:30:00', 'nasimiyu.danai@devias.io', 'Nasimiyu Danai', '801-301-7894');


--
-- Data for Name: destination; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."destination" ("id", "country_id", "cost", "name", "notes") OVERRIDING SYSTEM VALUE VALUES
	(1, 1, 50, 'Marina Bay Sands', 'Iconic hotel with an infinity pool and stunning views of the city skyline. Open 24/7.'),
	(2, 1, 30, 'Gardens by the Bay', 'Futuristic park featuring Supertree Grove and Flower Dome conservatories. Open daily from 9 AM to 9 PM.'),
	(3, 1, 40, 'Sentosa Island', 'Fun-filled island resort with beaches, theme parks, and various attractions. Open daily from 10 AM to 7 PM.'),
	(4, 1, 60, 'Universal Studios Singapore', 'Amusement park with movie-themed rides and entertainment. Open daily from 10 AM to 7 PM.'),
	(5, 1, 35, 'Singapore Zoo', 'Award-winning zoo showcasing diverse wildlife species. Open daily from 8:30 AM to 6 PM.');


--
-- Data for Name: itinerary; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."itinerary" ("id", "country_id", "user_id", "budget", "title", "title_image") OVERRIDING SYSTEM VALUE VALUES
	(1, 1, 1, 500, 'Sentosa Serenity: Island Escapes & Tropical Delights', 'sentosa'),
	(2, 1, 1, 800, 'Gardens by the Bay: Nature''s Wonderland in the City', 'gbtb'),
	(3, 1, 2, 600, 'Kampong Glam Adventure: History, Street Art & Malay Cuisine', 'kampong-glam'),
	(4, 2, 1, 3500, 'Tokyo Trek: Exploring the Vibrant Metropolis', 'tokyo-trek'),
	(5, 2, 1, 2800, 'Hokkaido Highlights: Nature''s Playground', 'hokkaido');


--
-- Data for Name: itinerary_destination; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."itinerary_destination" ("id", "destination_id", "itinerary_id") OVERRIDING SYSTEM VALUE VALUES
	(1, 1, 1),
	(2, 2, 1),
	(3, 3, 1),
	(4, 4, 2),
	(5, 5, 2),
	(6, 2, 3);


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 16, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: country_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."country_id_seq"', 3, true);


--
-- Name: customers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."customers_id_seq"', 10, true);


--
-- Name: destination_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."destination_id_seq"', 5, true);


--
-- Name: itinerary_destination_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."itinerary_destination_id_seq"', 6, true);


--
-- Name: itinerary_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."itinerary_id_seq"', 5, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;
