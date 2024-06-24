SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

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

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'f459052e-a760-4403-aa26-ae70d9e7f146', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-04-29 07:37:13.81614+00', ''),
	('00000000-0000-0000-0000-000000000000', '0384fe5e-dce2-476b-874c-304eaa9ae0b6', '{"action":"logout","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account"}', '2024-04-29 07:37:30.150934+00', ''),
	('00000000-0000-0000-0000-000000000000', '6fe072c8-b356-4b21-a519-9bd56218b7a6', '{"action":"login","actor_id":"87caa20c-2357-4839-b8b3-0204105a49de","actor_username":"user3@user.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-04-29 07:37:36.044249+00', ''),
	('00000000-0000-0000-0000-000000000000', '663b8430-748a-4ee3-98b5-931326e881e0', '{"action":"logout","actor_id":"87caa20c-2357-4839-b8b3-0204105a49de","actor_username":"user3@user.com","actor_via_sso":false,"log_type":"account"}', '2024-04-29 07:37:46.257309+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e893802b-2378-4ce7-9299-4963c654ac9a', '{"action":"login","actor_id":"7fca0c45-313e-44b2-89a5-abdd04d7e8fd","actor_username":"superuser@superuser.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-04-29 07:37:53.127178+00', ''),
	('00000000-0000-0000-0000-000000000000', '81dda37d-2f34-424a-9c0b-51e0fba222f9', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-04-29 09:12:20.806755+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b2094edb-edf5-461d-b3f8-a40a4a30c8b7', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-04-29 09:12:28.731225+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f8f2c96f-2e6a-4353-b861-7f85e7c019e0', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-04-30 05:45:15.016412+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b0920520-972d-4457-8355-ce2c140317b1', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-04-30 07:07:26.649555+00', ''),
	('00000000-0000-0000-0000-000000000000', '9f3ff097-ea5a-4064-9c3e-6e2d89be9856', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-02 05:47:04.918576+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f4bc116c-b764-4079-91b9-1c34210d1162', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-06 14:42:22.532308+00', ''),
	('00000000-0000-0000-0000-000000000000', '9d946912-aee3-46de-b152-4fc67cfe92c4', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-10 09:01:06.467468+00', ''),
	('00000000-0000-0000-0000-000000000000', '8b0e360f-ba21-4db0-9bc8-85ad11af12df', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-18 02:34:19.053106+00', ''),
	('00000000-0000-0000-0000-000000000000', '9c273ee2-1930-4ba2-96a8-593548faafd5', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-18 02:56:56.43393+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b3e816f1-23d1-4a32-b808-dedbd99993b5', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-18 03:10:02.714723+00', ''),
	('00000000-0000-0000-0000-000000000000', 'be3ba5ec-1b14-4933-b93e-f76072d0b9be', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-18 03:10:09.671401+00', ''),
	('00000000-0000-0000-0000-000000000000', '58873bf6-04b6-431f-b2df-6d8a110fedf1', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-26 15:00:43.459075+00', ''),
	('00000000-0000-0000-0000-000000000000', '60eb4f4a-548b-4341-ac38-b61cbbbe362a', '{"action":"login","actor_id":"fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0","actor_username":"admin1@admin.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-24 06:58:04.969473+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '87caa20c-2357-4839-b8b3-0204105a49de', 'authenticated', 'authenticated', 'user3@user.com', '$2a$10$og3s6n258Xg72ByS4iwPR.JgCjwrD17H9.Sz.Wk7HtMdHyxYZOZ7i', '2024-03-25 15:22:22.285123+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-04-29 07:37:36.045598+00', '{"role_id": 2, "provider": "email", "full_name": "user3", "providers": ["email"], "unique_code": "ff764e5c-f520-4de3-a0a7-09666b504628"}', '{"sub": "87caa20c-2357-4839-b8b3-0204105a49de", "email": "user3@user.com", "email_verified": false, "phone_verified": false}', NULL, '2024-03-25 15:22:22.276307+00', '2024-04-29 07:37:36.053278+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', 'authenticated', 'authenticated', 'superuser@superuser.com', '$2a$10$mmaNPtuevoUl6bPv1ob5RezA5yME8XdSZtW6wjKmsd7MpJ.qu1Ufi', '2024-04-24 13:50:15.232019+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-04-29 07:37:53.127809+00', '{"role_id": 2, "provider": "email", "full_name": "Super User", "providers": ["email"], "unique_code": "59ae0f6d-76ef-49ba-85bf-24343bf7ac52"}', '{"sub": "7fca0c45-313e-44b2-89a5-abdd04d7e8fd", "email": "superuser@superuser.com", "email_verified": false, "phone_verified": false}', NULL, '2024-04-24 13:50:15.225799+00', '2024-04-29 07:37:53.129322+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', 'authenticated', 'authenticated', 'admin1@admin.com', '$2a$10$jRJenxKXzU3q1N0K9MtDeecte6BTgVexqe6vxhw.OdlwKbuxGd5by', '2024-03-13 06:59:25.082971+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-06-24 06:58:04.997646+00', '{"role_id": 1, "provider": "email", "full_name": "Aloysius Tan", "providers": ["email"], "unique_code": "f706c698-bb00-41fb-896c-b24c36d600da"}', '{"sub": "fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0", "email": "admin1@admin.com", "email_verified": false, "phone_verified": false}', NULL, '2024-03-13 06:59:25.07413+00', '2024-06-24 06:58:05.018865+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


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
	('25277593-d868-40b9-98fe-ca89468ec4e5', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-04-29 09:12:20.808535+00', '2024-04-29 09:12:20.808535+00', NULL, 'aal1', NULL, NULL, 'node', '20.109.37.14', NULL),
	('7a34b80a-caab-4bcb-ba99-dfc2cf787533', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-04-29 09:12:28.731937+00', '2024-04-29 09:12:28.731937+00', NULL, 'aal1', NULL, NULL, 'node', '20.109.37.14', NULL),
	('4aa5e5cc-14ec-4b05-96cb-243bccca4b8e', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-04-30 05:45:15.018658+00', '2024-04-30 05:45:15.018658+00', NULL, 'aal1', NULL, NULL, 'node', '18.138.51.20', NULL),
	('cc13df56-f917-430b-b245-d5c789ac792d', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-04-30 07:07:26.650974+00', '2024-04-30 07:07:26.650974+00', NULL, 'aal1', NULL, NULL, 'node', '13.212.138.136', NULL),
	('59e0d51a-0b60-40f6-bf6b-d523997181d1', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-05-02 05:47:04.920365+00', '2024-05-02 05:47:04.920365+00', NULL, 'aal1', NULL, NULL, 'node', '13.212.34.100', NULL),
	('0cada36b-d0c5-4058-9b05-04f2fc3c4ecc', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-05-06 14:42:22.537009+00', '2024-05-06 14:42:22.537009+00', NULL, 'aal1', NULL, NULL, 'node', '13.213.36.90', NULL),
	('ec0f1b05-e4cf-48ef-840c-1d701f4858a0', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-05-10 09:01:06.471394+00', '2024-05-10 09:01:06.471394+00', NULL, 'aal1', NULL, NULL, 'node', '18.138.226.86', NULL),
	('d8ca7fb0-c63c-494a-8055-ed10f91c1deb', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-05-18 02:34:19.058532+00', '2024-05-18 02:34:19.058532+00', NULL, 'aal1', NULL, NULL, 'node', '54.151.214.129', NULL),
	('30eba4c5-8d04-4ad9-a2dc-d1e83440171f', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-05-18 02:56:56.434933+00', '2024-05-18 02:56:56.434933+00', NULL, 'aal1', NULL, NULL, 'node', '54.151.200.226', NULL),
	('0243eb14-00b2-469e-ba09-d56f8a8d35e1', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-05-18 03:10:02.716398+00', '2024-05-18 03:10:02.716398+00', NULL, 'aal1', NULL, NULL, 'node', '13.215.177.8', NULL),
	('1f7919a1-8cf6-457d-adde-bd078557f0b7', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-05-18 03:10:09.672261+00', '2024-05-18 03:10:09.672261+00', NULL, 'aal1', NULL, NULL, 'node', '13.215.177.8', NULL),
	('726ce138-908c-49ba-8661-0d13736c9f68', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-05-26 15:00:43.466312+00', '2024-05-26 15:00:43.466312+00', NULL, 'aal1', NULL, NULL, 'node', '13.212.39.169', NULL),
	('7f79acbc-4a4d-4a44-baa2-f1ba998eb840', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', '2024-04-24 13:50:15.235311+00', '2024-04-24 13:50:15.235311+00', NULL, 'aal1', NULL, NULL, 'node', '47.128.150.144', NULL),
	('2c40f57b-2936-4acf-a8be-87880e307d63', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', '2024-04-24 13:50:20.828142+00', '2024-04-24 13:50:20.828142+00', NULL, 'aal1', NULL, NULL, 'node', '47.128.150.144', NULL),
	('786495c4-1bc2-4d28-b1f2-01577ded99fb', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', '2024-04-29 07:37:53.127879+00', '2024-04-29 07:37:53.127879+00', NULL, 'aal1', NULL, NULL, 'node', '13.212.49.112', NULL),
	('5fb297d6-d81e-44be-8fd3-4afc85c086ee', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', '2024-06-24 06:58:04.997738+00', '2024-06-24 06:58:04.997738+00', NULL, 'aal1', NULL, NULL, 'node', '13.215.50.84', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('25277593-d868-40b9-98fe-ca89468ec4e5', '2024-04-29 09:12:20.826667+00', '2024-04-29 09:12:20.826667+00', 'password', 'c057be49-21e9-4972-a7b5-f316bef3664a'),
	('7a34b80a-caab-4bcb-ba99-dfc2cf787533', '2024-04-29 09:12:28.733683+00', '2024-04-29 09:12:28.733683+00', 'password', 'e00200b3-8a8e-46ed-aa6e-e5f3609a3324'),
	('4aa5e5cc-14ec-4b05-96cb-243bccca4b8e', '2024-04-30 05:45:15.02436+00', '2024-04-30 05:45:15.02436+00', 'password', '40b8fe31-96b5-4aa5-be1e-4a161d724941'),
	('cc13df56-f917-430b-b245-d5c789ac792d', '2024-04-30 07:07:26.657875+00', '2024-04-30 07:07:26.657875+00', 'password', 'f3b3751f-e2de-4e5e-8c36-ec9ec98fb6d8'),
	('59e0d51a-0b60-40f6-bf6b-d523997181d1', '2024-05-02 05:47:04.923711+00', '2024-05-02 05:47:04.923711+00', 'password', 'bc5f6961-1d19-4666-8f8b-3d4b894898dd'),
	('0cada36b-d0c5-4058-9b05-04f2fc3c4ecc', '2024-05-06 14:42:22.562568+00', '2024-05-06 14:42:22.562568+00', 'password', 'cd6ee068-cfeb-4775-b9d3-2b07bafeca1e'),
	('ec0f1b05-e4cf-48ef-840c-1d701f4858a0', '2024-05-10 09:01:06.492442+00', '2024-05-10 09:01:06.492442+00', 'password', 'bfa58129-2ba9-4858-bab8-8a6fc1f209e5'),
	('d8ca7fb0-c63c-494a-8055-ed10f91c1deb', '2024-05-18 02:34:19.075088+00', '2024-05-18 02:34:19.075088+00', 'password', 'b86eec91-6d7e-4b94-95bd-70229927a40a'),
	('30eba4c5-8d04-4ad9-a2dc-d1e83440171f', '2024-05-18 02:56:56.439944+00', '2024-05-18 02:56:56.439944+00', 'password', '19f849e9-3e2f-4eff-b450-2e5ab3bb5c75'),
	('0243eb14-00b2-469e-ba09-d56f8a8d35e1', '2024-05-18 03:10:02.721138+00', '2024-05-18 03:10:02.721138+00', 'password', 'b44ac7fa-709d-4b31-9b0c-de51316a3ec0'),
	('1f7919a1-8cf6-457d-adde-bd078557f0b7', '2024-05-18 03:10:09.674458+00', '2024-05-18 03:10:09.674458+00', 'password', 'aadb4e64-ae16-4239-b7f6-6dfc43185bb0'),
	('726ce138-908c-49ba-8661-0d13736c9f68', '2024-05-26 15:00:43.489052+00', '2024-05-26 15:00:43.489052+00', 'password', 'acbe5ac9-cb73-41e5-a515-5fa1eb84f06d'),
	('7f79acbc-4a4d-4a44-baa2-f1ba998eb840', '2024-04-24 13:50:15.237165+00', '2024-04-24 13:50:15.237165+00', 'password', '5e04f1de-f6ca-4890-aac1-0ba3140080bc'),
	('2c40f57b-2936-4acf-a8be-87880e307d63', '2024-04-24 13:50:20.831051+00', '2024-04-24 13:50:20.831051+00', 'password', '5e96eed7-c52a-448d-9b01-86c74797ef68'),
	('786495c4-1bc2-4d28-b1f2-01577ded99fb', '2024-04-29 07:37:53.129561+00', '2024-04-29 07:37:53.129561+00', 'password', '7383184f-7c63-4ef5-8c3c-469426c7b476'),
	('5fb297d6-d81e-44be-8fd3-4afc85c086ee', '2024-06-24 06:58:05.020414+00', '2024-06-24 06:58:05.020414+00', 'password', '2e9e933c-b1cf-4747-88f1-6b7cf4655fae');


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
	('00000000-0000-0000-0000-000000000000', 129, '2BlCtWXs1KXi-TtxSLQ1AQ', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-04-29 09:12:20.819855+00', '2024-04-29 09:12:20.819855+00', NULL, '25277593-d868-40b9-98fe-ca89468ec4e5'),
	('00000000-0000-0000-0000-000000000000', 130, '5ujePIGeUL3YkyLiTIuKpw', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-04-29 09:12:28.732556+00', '2024-04-29 09:12:28.732556+00', NULL, '7a34b80a-caab-4bcb-ba99-dfc2cf787533'),
	('00000000-0000-0000-0000-000000000000', 131, 'uX8XiRVQWgDLncR2QXyIkQ', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-04-30 05:45:15.020784+00', '2024-04-30 05:45:15.020784+00', NULL, '4aa5e5cc-14ec-4b05-96cb-243bccca4b8e'),
	('00000000-0000-0000-0000-000000000000', 132, 'ueeTU-HiwOrmFxCm0XPrTQ', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-04-30 07:07:26.652504+00', '2024-04-30 07:07:26.652504+00', NULL, 'cc13df56-f917-430b-b245-d5c789ac792d'),
	('00000000-0000-0000-0000-000000000000', 133, 'TuYFjXICIEIVpT87E8684g', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-05-02 05:47:04.922084+00', '2024-05-02 05:47:04.922084+00', NULL, '59e0d51a-0b60-40f6-bf6b-d523997181d1'),
	('00000000-0000-0000-0000-000000000000', 135, 'klKUIUFWCAgH7Vh0eFmSBg', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-05-10 09:01:06.478104+00', '2024-05-10 09:01:06.478104+00', NULL, 'ec0f1b05-e4cf-48ef-840c-1d701f4858a0'),
	('00000000-0000-0000-0000-000000000000', 137, 'XYCL74qnKXqh0GEsQoG80A', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-05-18 02:56:56.43708+00', '2024-05-18 02:56:56.43708+00', NULL, '30eba4c5-8d04-4ad9-a2dc-d1e83440171f'),
	('00000000-0000-0000-0000-000000000000', 140, 'H7i8RWAGOFEjIo3poiIXjw', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-05-26 15:00:43.477643+00', '2024-05-26 15:00:43.477643+00', NULL, '726ce138-908c-49ba-8661-0d13736c9f68'),
	('00000000-0000-0000-0000-000000000000', 128, 'Hl0dlVKrZMMy289YbdTwxw', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', false, '2024-04-29 07:37:53.128469+00', '2024-04-29 07:37:53.128469+00', NULL, '786495c4-1bc2-4d28-b1f2-01577ded99fb'),
	('00000000-0000-0000-0000-000000000000', 134, 'wqJShWdPWiXFLNVH2y5uxg', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-05-06 14:42:22.547331+00', '2024-05-06 14:42:22.547331+00', NULL, '0cada36b-d0c5-4058-9b05-04f2fc3c4ecc'),
	('00000000-0000-0000-0000-000000000000', 136, 'wd0YcJYLTBgCSHUWcG9qdA', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-05-18 02:34:19.065315+00', '2024-05-18 02:34:19.065315+00', NULL, 'd8ca7fb0-c63c-494a-8055-ed10f91c1deb'),
	('00000000-0000-0000-0000-000000000000', 138, 'HaMMjkyhUnpudHp9lxBluQ', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-05-18 03:10:02.71871+00', '2024-05-18 03:10:02.71871+00', NULL, '0243eb14-00b2-469e-ba09-d56f8a8d35e1'),
	('00000000-0000-0000-0000-000000000000', 139, 'D-nlzPxeMs7Nl9VG1ZfSBg', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-05-18 03:10:09.673107+00', '2024-05-18 03:10:09.673107+00', NULL, '1f7919a1-8cf6-457d-adde-bd078557f0b7'),
	('00000000-0000-0000-0000-000000000000', 115, 'oB0oSdh8tBkhQlDI4wvqow', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', false, '2024-04-24 13:50:15.236036+00', '2024-04-24 13:50:15.236036+00', NULL, '7f79acbc-4a4d-4a44-baa2-f1ba998eb840'),
	('00000000-0000-0000-0000-000000000000', 116, 'beCtQJz-_6qiTUZkUHVTKA', '7fca0c45-313e-44b2-89a5-abdd04d7e8fd', false, '2024-04-24 13:50:20.829308+00', '2024-04-24 13:50:20.829308+00', NULL, '2c40f57b-2936-4acf-a8be-87880e307d63'),
	('00000000-0000-0000-0000-000000000000', 141, 'cY1g3gf697Xq6xgZxjE8yw', 'fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', false, '2024-06-24 06:58:05.00997+00', '2024-06-24 06:58:05.00997+00', NULL, '5fb297d6-d81e-44be-8fd3-4afc85c086ee');


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
	('87caa20c-2357-4839-b8b3-0204105a49de', 'user3', 2, 'ff764e5c-f520-4de3-a0a7-09666b504628', NULL),
	('7fca0c45-313e-44b2-89a5-abdd04d7e8fd', 'Super User', 2, '59ae0f6d-76ef-49ba-85bf-24343bf7ac52', NULL),
	('fe3aaae8-efe1-4b9c-8351-9c86ec38d9e0', 'Aloysius Tan', 1, 'f706c698-bb00-41fb-896c-b24c36d600da', '29193694');


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

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 141, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: country_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."country_id_seq"', 21, true);


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
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
