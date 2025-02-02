SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.8
-- Dumped by pg_dump version 15.8

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
	('00000000-0000-0000-0000-000000000000', '87caa20c-2357-4839-b8b3-0204105a49de', 'authenticated', 'authenticated', 'user3@user.com', '$2a$10$og3s6n258Xg72ByS4iwPR.JgCjwrD17H9.Sz.Wk7HtMdHyxYZOZ7i', '2024-03-25 15:22:22.285123+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-04-29 07:37:36.045598+00', '{"role_id": 2, "provider": "email", "full_name": "user3", "providers": ["email"], "unique_code": "ff764e5c-f520-4de3-a0a7-09666b504628"}', '{"sub": "87caa20c-2357-4839-b8b3-0204105a49de", "email": "user3@user.com", "email_verified": false, "phone_verified": false}', NULL, '2024-03-25 15:22:22.276307+00', '2024-04-29 07:37:36.053278+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', 'authenticated', 'authenticated', 'superuser@superuser.com', '$2a$10$mmaNPtuevoUl6bPv1ob5RezA5yME8XdSZtW6wjKmsd7MpJ.qu1Ufi', '2024-04-24 13:50:15.232019+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-04-29 07:37:53.127809+00', '{"role_id": 2, "provider": "email", "full_name": "Super User", "providers": ["email"], "unique_code": "59ae0f6d-76ef-49ba-85bf-24343bf7ac52"}', '{"sub": "7fca0c45-313e-44b2-89a5-abdd04d7e8fd", "email": "superuser@superuser.com", "email_verified": false, "phone_verified": false}', NULL, '2024-04-24 13:50:15.225799+00', '2024-04-29 07:37:53.129322+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', 'authenticated', 'authenticated', 'admin1@admin.com', '$2a$10$jRJenxKXzU3q1N0K9MtDeecte6BTgVexqe6vxhw.OdlwKbuxGd5by', '2024-03-13 06:59:25.082971+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-02-02 13:51:32.650119+00', '{"role_id": 1, "provider": "email", "full_name": "Aloysius Tan", "providers": ["email"], "unique_code": "f706c698-bb00-41fb-896c-b24c36d600da"}', '{"sub": "fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0", "email": "admin1@admin.com", "email_verified": false, "phone_verified": false}', NULL, '2024-03-13 06:59:25.07413+00', '2025-02-02 13:51:32.658008+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '{"sub": "fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0", "email": "admin1@admin.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-13 06:59:25.07795+00', '2024-03-13 06:59:25.078043+00', '2024-03-13 06:59:25.078043+00', '27e35c4c-4801-4136-9bdf-147d1f5d4c64'),
	('7fca0c45-313e-44b2-89a5-abdd04d7e8fd', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', '{"sub": "7fca0c45-313e-44b2-89a5-abdd04d7e8fd", "email": "superuser@superuser.com", "email_verified": false, "phone_verified": false}', 'email', '2024-04-24 13:50:15.228383+00', '2024-04-24 13:50:15.228434+00', '2024-04-24 13:50:15.228434+00', '8ec4302f-0798-4f44-a052-d2301314f4a2');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('7f79acbc-4a4d-4a44-baa2-f1ba998eb840', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', '2024-04-24 13:50:15.235311+00', '2024-04-24 13:50:15.235311+00', NULL, 'aal1', NULL, NULL, 'node', '47.128.150.144', NULL),
	('2c40f57b-2936-4acf-a8be-87880e307d63', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', '2024-04-24 13:50:20.828142+00', '2024-04-24 13:50:20.828142+00', NULL, 'aal1', NULL, NULL, 'node', '47.128.150.144', NULL),
	('786495c4-1bc2-4d28-b1f2-01577ded99fb', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', '2024-04-29 07:37:53.127879+00', '2024-04-29 07:37:53.127879+00', NULL, 'aal1', NULL, NULL, 'node', '13.212.49.112', NULL),
	('9061e044-9a16-4fcb-a270-5ce075459489', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-11-04 13:38:20.359911+00', '2024-11-04 13:38:20.359911+00', NULL, 'aal1', NULL, NULL, 'node', '52.159.142.100', NULL),
	('c792fb25-2d21-4f54-8222-98b14e10b29c', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-11-04 13:38:25.95173+00', '2024-11-04 13:38:25.95173+00', NULL, 'aal1', NULL, NULL, 'node', '52.159.142.100', NULL),
	('525c9355-fd53-4dda-81b4-d00852e8fa6c', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-11-04 13:52:56.84219+00', '2024-11-04 13:52:56.84219+00', NULL, 'aal1', NULL, NULL, 'node', '18.140.62.24', NULL),
	('fb3d629f-6ac7-404a-9a59-f754e89271fb', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-11-04 13:54:36.928422+00', '2024-11-04 13:54:36.928422+00', NULL, 'aal1', NULL, NULL, 'node', '18.140.62.24', NULL),
	('760af14f-f432-4aa6-bd38-3797dd60e30f', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-11-04 13:58:33.118396+00', '2024-11-04 13:58:33.118396+00', NULL, 'aal1', NULL, NULL, 'node', '18.140.62.24', NULL),
	('52e809eb-72de-4921-93fb-45e0d5a8d4f4', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-11-04 14:04:19.419846+00', '2024-11-04 14:04:19.419846+00', NULL, 'aal1', NULL, NULL, 'node', '18.140.62.24', NULL),
	('232b03ad-8d81-4329-80a1-4e07eebc0d79', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-11-08 01:37:05.979687+00', '2024-11-08 01:37:05.979687+00', NULL, 'aal1', NULL, NULL, 'node', '54.254.137.75', NULL),
	('56b6c10c-9690-4ce1-a78b-b24159670bd9', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-11-11 14:33:58.405524+00', '2024-11-11 14:33:58.405524+00', NULL, 'aal1', NULL, NULL, 'node', '13.212.34.64', NULL),
	('7aa6401e-3af2-48dd-b978-51d7652968c3', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-01-29 03:13:02.30588+00', '2025-01-29 03:13:02.30588+00', NULL, 'aal1', NULL, NULL, 'node', '13.212.212.198', NULL),
	('52d23759-afc9-42da-93d5-cbfa7ab66adb', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-01-29 04:33:44.824839+00', '2025-01-29 04:33:44.824839+00', NULL, 'aal1', NULL, NULL, 'node', '18.142.90.225', NULL),
	('acdb02e8-ab6f-480d-be09-89dfbb1f85a6', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-01-29 07:44:35.929496+00', '2025-01-29 07:44:35.929496+00', NULL, 'aal1', NULL, NULL, 'node', '47.129.105.1', NULL),
	('76fc97c4-e95f-4231-a210-438adb0ecebc', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-01-29 08:34:08.918012+00', '2025-01-29 08:34:08.918012+00', NULL, 'aal1', NULL, NULL, 'node', '18.142.242.180', NULL),
	('fc395158-6b10-4c68-b4ec-47fa7967e00b', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-01-29 08:49:14.214388+00', '2025-01-29 08:49:14.214388+00', NULL, 'aal1', NULL, NULL, 'node', '13.212.22.222', NULL),
	('a4ac8214-0684-493a-8dc8-43c7df39f754', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-01-29 08:54:47.478306+00', '2025-01-29 08:54:47.478306+00', NULL, 'aal1', NULL, NULL, 'node', '13.212.22.222', NULL),
	('8680f637-a250-4396-9063-936985de2b59', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-01-29 09:01:39.140483+00', '2025-01-29 09:01:39.140483+00', NULL, 'aal1', NULL, NULL, 'node', '13.212.22.222', NULL),
	('42e67ea3-4c46-4d7b-8afd-fc58ce1d185f', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-01-30 02:14:01.157464+00', '2025-01-30 02:14:01.157464+00', NULL, 'aal1', NULL, NULL, 'node', '172.214.173.179', NULL),
	('df732dbe-74df-4220-8410-cfd55b8f678f', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-01-30 02:14:08.140882+00', '2025-01-30 02:14:08.140882+00', NULL, 'aal1', NULL, NULL, 'node', '172.214.173.179', NULL),
	('910c89d6-f9ef-480c-8c8e-131f8fbcf05e', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-02-02 08:37:24.250234+00', '2025-02-02 08:37:24.250234+00', NULL, 'aal1', NULL, NULL, 'node', '54.254.247.184', NULL),
	('17beb093-959b-4313-9bce-0352031bc3b2', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-02-02 09:09:27.55882+00', '2025-02-02 09:09:27.55882+00', NULL, 'aal1', NULL, NULL, 'node', '20.169.1.144', NULL),
	('50a979f5-0d19-4309-b468-f160865b2b60', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-02-02 09:09:32.421467+00', '2025-02-02 09:09:32.421467+00', NULL, 'aal1', NULL, NULL, 'node', '20.169.1.144', NULL),
	('ac7b679c-75bb-456c-82dc-4c9150b25e73', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-02-02 09:12:07.758916+00', '2025-02-02 09:12:07.758916+00', NULL, 'aal1', NULL, NULL, 'node', '47.129.12.255', NULL),
	('961bfa7d-7f37-492a-a4ed-fd3f6edfea1d', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2025-02-02 13:51:32.650199+00', '2025-02-02 13:51:32.650199+00', NULL, 'aal1', NULL, NULL, 'node', '18.140.198.77', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('7f79acbc-4a4d-4a44-baa2-f1ba998eb840', '2024-04-24 13:50:15.237165+00', '2024-04-24 13:50:15.237165+00', 'password', '5e04f1de-f6ca-4890-aac1-0ba3140080bc'),
	('2c40f57b-2936-4acf-a8be-87880e307d63', '2024-04-24 13:50:20.831051+00', '2024-04-24 13:50:20.831051+00', 'password', '5e96eed7-c52a-448d-9b01-86c74797ef68'),
	('786495c4-1bc2-4d28-b1f2-01577ded99fb', '2024-04-29 07:37:53.129561+00', '2024-04-29 07:37:53.129561+00', 'password', '7383184f-7c63-4ef5-8c3c-469426c7b476'),
	('9061e044-9a16-4fcb-a270-5ce075459489', '2024-11-04 13:38:20.365026+00', '2024-11-04 13:38:20.365026+00', 'password', '43aec48d-d01a-4cb5-9d8f-154a56d2bf55'),
	('c792fb25-2d21-4f54-8222-98b14e10b29c', '2024-11-04 13:38:25.954456+00', '2024-11-04 13:38:25.954456+00', 'password', 'f0a3505c-a6d6-4e00-a1e1-649a32b67252'),
	('525c9355-fd53-4dda-81b4-d00852e8fa6c', '2024-11-04 13:52:56.846376+00', '2024-11-04 13:52:56.846376+00', 'password', 'd507de91-0998-4a8e-875d-0e77f7a820ac'),
	('fb3d629f-6ac7-404a-9a59-f754e89271fb', '2024-11-04 13:54:36.933173+00', '2024-11-04 13:54:36.933173+00', 'password', '5d776377-4a66-4e9d-8a84-7e1f3ca17f4c'),
	('760af14f-f432-4aa6-bd38-3797dd60e30f', '2024-11-04 13:58:33.122581+00', '2024-11-04 13:58:33.122581+00', 'password', 'e253caf6-05b5-49a9-999b-12cc738dd143'),
	('52e809eb-72de-4921-93fb-45e0d5a8d4f4', '2024-11-04 14:04:19.422726+00', '2024-11-04 14:04:19.422726+00', 'password', '5c79bf73-f07a-472c-8c0f-7ac62ffe1e8d'),
	('232b03ad-8d81-4329-80a1-4e07eebc0d79', '2024-11-08 01:37:06.004583+00', '2024-11-08 01:37:06.004583+00', 'password', '8e9b7f45-ecef-4070-b850-33622b4b1840'),
	('56b6c10c-9690-4ce1-a78b-b24159670bd9', '2024-11-11 14:33:58.438315+00', '2024-11-11 14:33:58.438315+00', 'password', 'c7e58482-cc81-4ed5-8f10-ae7e405e9512'),
	('7aa6401e-3af2-48dd-b978-51d7652968c3', '2025-01-29 03:13:02.332469+00', '2025-01-29 03:13:02.332469+00', 'password', '751f8e9f-212f-4f04-89ab-21c6c4c5ab90'),
	('52d23759-afc9-42da-93d5-cbfa7ab66adb', '2025-01-29 04:33:44.834433+00', '2025-01-29 04:33:44.834433+00', 'password', 'fd0631e5-b1e9-41fd-a83c-6f495871d033'),
	('acdb02e8-ab6f-480d-be09-89dfbb1f85a6', '2025-01-29 07:44:35.934763+00', '2025-01-29 07:44:35.934763+00', 'password', 'c97762d8-6a32-4240-b791-ad2efb32b24e'),
	('76fc97c4-e95f-4231-a210-438adb0ecebc', '2025-01-29 08:34:08.921328+00', '2025-01-29 08:34:08.921328+00', 'password', '54ad463f-0e20-47d0-a402-329c3780271f'),
	('fc395158-6b10-4c68-b4ec-47fa7967e00b', '2025-01-29 08:49:14.217827+00', '2025-01-29 08:49:14.217827+00', 'password', '5e420dfa-d2d9-4dd1-8cf4-9943fad06e39'),
	('a4ac8214-0684-493a-8dc8-43c7df39f754', '2025-01-29 08:54:47.481575+00', '2025-01-29 08:54:47.481575+00', 'password', 'c3770e16-e1e6-4a54-9b61-3b3c3d309206'),
	('8680f637-a250-4396-9063-936985de2b59', '2025-01-29 09:01:39.14382+00', '2025-01-29 09:01:39.14382+00', 'password', '1486d7ba-3dff-4dc3-865c-caa83a8d2492'),
	('42e67ea3-4c46-4d7b-8afd-fc58ce1d185f', '2025-01-30 02:14:01.160736+00', '2025-01-30 02:14:01.160736+00', 'password', '7ac8e317-30d7-4e89-bf86-6e9292390644'),
	('df732dbe-74df-4220-8410-cfd55b8f678f', '2025-01-30 02:14:08.14308+00', '2025-01-30 02:14:08.14308+00', 'password', '08766051-b190-497a-963e-2586bc6f93a9'),
	('910c89d6-f9ef-480c-8c8e-131f8fbcf05e', '2025-02-02 08:37:24.281384+00', '2025-02-02 08:37:24.281384+00', 'password', '8d804417-baf8-49e8-99dc-e4236cc6dbf4'),
	('17beb093-959b-4313-9bce-0352031bc3b2', '2025-02-02 09:09:27.565614+00', '2025-02-02 09:09:27.565614+00', 'password', '37de46d9-dcf2-4cc9-b25c-2df2bf15d6b7'),
	('50a979f5-0d19-4309-b468-f160865b2b60', '2025-02-02 09:09:32.424819+00', '2025-02-02 09:09:32.424819+00', 'password', 'e143a6e6-2f23-42d5-8272-7fa034da3ab5'),
	('ac7b679c-75bb-456c-82dc-4c9150b25e73', '2025-02-02 09:12:07.765696+00', '2025-02-02 09:12:07.765696+00', 'password', '0e5c8015-9c9f-4563-ae15-0de4a34f32bd'),
	('961bfa7d-7f37-492a-a4ed-fd3f6edfea1d', '2025-02-02 13:51:32.658688+00', '2025-02-02 13:51:32.658688+00', 'password', '6a34a93a-7968-4491-80ca-14e42119d689');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 128, 'Hl0dlVKrZMMy289YbdTwxw', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', false, '2024-04-29 07:37:53.128469+00', '2024-04-29 07:37:53.128469+00', NULL, '786495c4-1bc2-4d28-b1f2-01577ded99fb'),
	('00000000-0000-0000-0000-000000000000', 115, 'oB0oSdh8tBkhQlDI4wvqow', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', false, '2024-04-24 13:50:15.236036+00', '2024-04-24 13:50:15.236036+00', NULL, '7f79acbc-4a4d-4a44-baa2-f1ba998eb840'),
	('00000000-0000-0000-0000-000000000000', 116, 'beCtQJz-_6qiTUZkUHVTKA', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', false, '2024-04-24 13:50:20.829308+00', '2024-04-24 13:50:20.829308+00', NULL, '2c40f57b-2936-4acf-a8be-87880e307d63'),
	('00000000-0000-0000-0000-000000000000', 171, 'rSZz3lgV5HzxgmU8-3RJLA', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-11-04 13:38:20.361594+00', '2024-11-04 13:38:20.361594+00', NULL, '9061e044-9a16-4fcb-a270-5ce075459489'),
	('00000000-0000-0000-0000-000000000000', 172, 'ddTXZtH6ZNuzL-NNtfc5jg', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-11-04 13:38:25.952475+00', '2024-11-04 13:38:25.952475+00', NULL, 'c792fb25-2d21-4f54-8222-98b14e10b29c'),
	('00000000-0000-0000-0000-000000000000', 173, 'G3QN_UvvaeprSxIKcpebzA', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-11-04 13:52:56.843799+00', '2024-11-04 13:52:56.843799+00', NULL, '525c9355-fd53-4dda-81b4-d00852e8fa6c'),
	('00000000-0000-0000-0000-000000000000', 174, 'ALJ2ob_5XkkDbgEF1GCZkw', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-11-04 13:54:36.930174+00', '2024-11-04 13:54:36.930174+00', NULL, 'fb3d629f-6ac7-404a-9a59-f754e89271fb'),
	('00000000-0000-0000-0000-000000000000', 175, 'G2M3I18v_C7YUfEqS-63eg', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-11-04 13:58:33.120092+00', '2024-11-04 13:58:33.120092+00', NULL, '760af14f-f432-4aa6-bd38-3797dd60e30f'),
	('00000000-0000-0000-0000-000000000000', 176, 'R2OW3SclOyaPLZmhW9jIRw', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-11-04 14:04:19.420887+00', '2024-11-04 14:04:19.420887+00', NULL, '52e809eb-72de-4921-93fb-45e0d5a8d4f4'),
	('00000000-0000-0000-0000-000000000000', 177, 'bXoRK9ASa5-W6mrONn0OWg', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-11-08 01:37:05.989664+00', '2024-11-08 01:37:05.989664+00', NULL, '232b03ad-8d81-4329-80a1-4e07eebc0d79'),
	('00000000-0000-0000-0000-000000000000', 178, 'ZFjD8mdRBvpBUyX_FpdriA', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-11-11 14:33:58.419723+00', '2024-11-11 14:33:58.419723+00', NULL, '56b6c10c-9690-4ce1-a78b-b24159670bd9'),
	('00000000-0000-0000-0000-000000000000', 179, 'v3i6gdeHgdSZBAK7491c4g', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-01-29 03:13:02.317374+00', '2025-01-29 03:13:02.317374+00', NULL, '7aa6401e-3af2-48dd-b978-51d7652968c3'),
	('00000000-0000-0000-0000-000000000000', 180, 'xgouzaDqJlxdIT9eEHCeCQ', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-01-29 04:33:44.829495+00', '2025-01-29 04:33:44.829495+00', NULL, '52d23759-afc9-42da-93d5-cbfa7ab66adb'),
	('00000000-0000-0000-0000-000000000000', 181, 'vYH-p3qwEtizbmfe3pdY6w', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-01-29 07:44:35.931663+00', '2025-01-29 07:44:35.931663+00', NULL, 'acdb02e8-ab6f-480d-be09-89dfbb1f85a6'),
	('00000000-0000-0000-0000-000000000000', 182, 'k6PpuwA9hkTxcACU48xUxQ', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-01-29 08:34:08.919149+00', '2025-01-29 08:34:08.919149+00', NULL, '76fc97c4-e95f-4231-a210-438adb0ecebc'),
	('00000000-0000-0000-0000-000000000000', 183, 'gKEU0lncE8FoQjiLF4mefQ', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-01-29 08:49:14.215642+00', '2025-01-29 08:49:14.215642+00', NULL, 'fc395158-6b10-4c68-b4ec-47fa7967e00b'),
	('00000000-0000-0000-0000-000000000000', 184, 'uLvFEbVQMsPPtR4AijeNWg', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-01-29 08:54:47.479499+00', '2025-01-29 08:54:47.479499+00', NULL, 'a4ac8214-0684-493a-8dc8-43c7df39f754'),
	('00000000-0000-0000-0000-000000000000', 185, 'qi70oaCULUmaglWBw32i7Q', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-01-29 09:01:39.141675+00', '2025-01-29 09:01:39.141675+00', NULL, '8680f637-a250-4396-9063-936985de2b59'),
	('00000000-0000-0000-0000-000000000000', 186, 'Wja56-2dJECXaGySdZZkKw', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-01-30 02:14:01.158605+00', '2025-01-30 02:14:01.158605+00', NULL, '42e67ea3-4c46-4d7b-8afd-fc58ce1d185f'),
	('00000000-0000-0000-0000-000000000000', 187, 'DN-L9jJnF9Q75U3Jj9o6ng', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-01-30 02:14:08.141716+00', '2025-01-30 02:14:08.141716+00', NULL, 'df732dbe-74df-4220-8410-cfd55b8f678f'),
	('00000000-0000-0000-0000-000000000000', 188, 'zPaxpq0TBUw-My1LTbqDXw', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-02-02 08:37:24.259988+00', '2025-02-02 08:37:24.259988+00', NULL, '910c89d6-f9ef-480c-8c8e-131f8fbcf05e'),
	('00000000-0000-0000-0000-000000000000', 189, 'ZPCVdV7dlwvquqh6Yz1JWA', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-02-02 09:09:27.562895+00', '2025-02-02 09:09:27.562895+00', NULL, '17beb093-959b-4313-9bce-0352031bc3b2'),
	('00000000-0000-0000-0000-000000000000', 190, 'mNIL-Evi77BTwC55RWAu1Q', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-02-02 09:09:32.423444+00', '2025-02-02 09:09:32.423444+00', NULL, '50a979f5-0d19-4309-b468-f160865b2b60'),
	('00000000-0000-0000-0000-000000000000', 191, 'roi7kGd7VUIm7hHQcXzJlg', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-02-02 09:12:07.761208+00', '2025-02-02 09:12:07.761208+00', NULL, 'ac7b679c-75bb-456c-82dc-4c9150b25e73'),
	('00000000-0000-0000-0000-000000000000', 192, 'g-PchOEdGuULQln_hVEkZQ', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2025-02-02 13:51:32.654291+00', '2025-02-02 13:51:32.654291+00', NULL, '961bfa7d-7f37-492a-a4ed-fd3f6edfea1d');


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
-- Data for Name: user_account; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."user_account" ("id", "full_name", "role_id", "unique_code", "telegram_chat_id") VALUES
	('87caa20c-2357-4839-b8b3-0204105a49de', 'user3', 2, 'ff764e5c-f520-4de3-a0a7-09666b504628', NULL),
	('7fca0c45-313e-44b2-89a5-abdd04d7e8fd', 'Super User', 2, '59ae0f6d-76ef-49ba-85bf-24343bf7ac52', NULL),
	('fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', 'Aloysius Tan', 1, 'f706c698-bb00-41fb-896c-b24c36d600da', '29193694');


--
-- Data for Name: conversation; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."conversation" ("id", "user_id", "message", "role", "created_at") VALUES
	('04a4484a-2e2a-47bf-b8ed-6807522fe21b', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', 'who is henry lau?', 'user', '2025-02-02 13:51:44.912581+00'),
	('c0e23aae-8819-4486-b4e1-4324264414be', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', 'Henry Lau, also known as Henry, is a Canadian singer, songwriter, actor, and entertainment personality. He was born on October 11, 1989, in Toronto, Ontario, Canada.

Henry gained fame as a member of the South Korean-Chinese boy band Super Junior-M, a subgroup of the popular K-pop group Super Junior. He was one of the main vocalists and rappers of the group.

In addition to his work with Super Junior-M, Henry has also pursued a solo music career, releasing several albums and singles in Mandarin, Korean, and English. He has also acted in various television dramas and movies, including the popular Chinese drama "Persevere, Goo Hae Ra" and the film "A Dynamite Family".

Henry is known for his multilingual skills, speaking English, Mandarin, Cantonese, and Korean fluently. He has also been a host and guest on various television shows, including music programs, variety shows, and reality TV series.

In 2018, Henry left SM Entertainment, the agency that managed Super Junior and Super Junior-M, and signed with a new agency, Monster Entertainment Group. He has since continued to work on his solo music and acting career, as well as other projects.

Overall, Henry Lau is a talented and versatile entertainer who has made a name for himself in the K-pop and Chinese entertainment industries.', 'system', '2025-02-02 13:51:46.58855+00');


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
	(22, 7, 16, 'Alhambra', 'Stunning Moorish palace in Granada', 'alhambra'),
	(24, 1, 100, 'somewhere over the rainbow', 'blue birds fly', 'placeholder');


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
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 192, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: country_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."country_id_seq"', 31, true);


--
-- Name: destination_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."destination_id_seq"', 24, true);


--
-- Name: itinerary_destination_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."itinerary_destination_id_seq"', 27, true);


--
-- Name: itinerary_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."itinerary_id_seq"', 10, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
