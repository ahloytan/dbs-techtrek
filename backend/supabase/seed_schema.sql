
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

CREATE EXTENSION IF NOT EXISTS "pgsodium" WITH SCHEMA "pgsodium";

CREATE SCHEMA IF NOT EXISTS "public";

ALTER SCHEMA "public" OWNER TO "pg_database_owner";

COMMENT ON SCHEMA "public" IS 'standard public schema';

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."country" (
    "id" integer NOT NULL,
    "name" character varying(50) NOT NULL
);

ALTER TABLE "public"."country" OWNER TO "postgres";

ALTER TABLE "public"."country" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "public"."country_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."customers" (
    "id" integer NOT NULL,
    "address" "json" NOT NULL,
    "avatar" character varying(256) NOT NULL,
    "created_at" timestamp(0) without time zone NOT NULL,
    "email" character varying(256) NOT NULL,
    "name" character varying(256) NOT NULL,
    "phone_number" character varying(256) NOT NULL
);

ALTER TABLE "public"."customers" OWNER TO "postgres";

ALTER TABLE "public"."customers" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "public"."customers_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."destination" (
    "id" integer NOT NULL,
    "country_id" integer NOT NULL,
    "cost" double precision DEFAULT 0 NOT NULL,
    "name" character varying(50) NOT NULL,
    "notes" "text"
);

ALTER TABLE "public"."destination" OWNER TO "postgres";

ALTER TABLE "public"."destination" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "public"."destination_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."itinerary" (
    "id" integer NOT NULL,
    "country_id" integer DEFAULT 0 NOT NULL,
    "user_id" integer DEFAULT 0 NOT NULL,
    "budget" double precision DEFAULT 0 NOT NULL,
    "title" character varying(100) DEFAULT '0'::character varying NOT NULL,
    "title_image" character varying(100) DEFAULT ''::character varying NOT NULL
);

ALTER TABLE "public"."itinerary" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."itinerary_destination" (
    "id" integer NOT NULL,
    "destination_id" integer DEFAULT 0 NOT NULL,
    "itinerary_id" integer DEFAULT 0 NOT NULL
);

ALTER TABLE "public"."itinerary_destination" OWNER TO "postgres";

ALTER TABLE "public"."itinerary_destination" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "public"."itinerary_destination_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

ALTER TABLE "public"."itinerary" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "public"."itinerary_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

CREATE TABLE IF NOT EXISTS "public"."user_account" (
    "id" integer NOT NULL,
    "username" character varying(256) NOT NULL,
    "password" character varying(256) NOT NULL,
    "role_id" integer NOT NULL
);

ALTER TABLE "public"."user_account" OWNER TO "postgres";

ALTER TABLE "public"."user_account" ALTER COLUMN "id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "public"."user_account_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);

ALTER TABLE ONLY "public"."country"
    ADD CONSTRAINT "country_name_key" UNIQUE ("name");

ALTER TABLE ONLY "public"."country"
    ADD CONSTRAINT "country_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."customers"
    ADD CONSTRAINT "customers_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."destination"
    ADD CONSTRAINT "destination_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."itinerary_destination"
    ADD CONSTRAINT "itinerary_destination_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."itinerary"
    ADD CONSTRAINT "itinerary_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."user_account"
    ADD CONSTRAINT "user_account_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."destination"
    ADD CONSTRAINT "destinationcountryfk" FOREIGN KEY ("country_id") REFERENCES "public"."country"("id");

ALTER TABLE ONLY "public"."itinerary_destination"
    ADD CONSTRAINT "iddestinationfk" FOREIGN KEY ("destination_id") REFERENCES "public"."destination"("id");

ALTER TABLE ONLY "public"."itinerary_destination"
    ADD CONSTRAINT "iditineraryfk" FOREIGN KEY ("itinerary_id") REFERENCES "public"."itinerary"("id");

ALTER TABLE ONLY "public"."itinerary"
    ADD CONSTRAINT "itinerarycountryfk" FOREIGN KEY ("country_id") REFERENCES "public"."country"("id");

ALTER TABLE ONLY "public"."itinerary"
    ADD CONSTRAINT "itineraryuserfk" FOREIGN KEY ("user_id") REFERENCES "public"."customers"("id");

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON TABLE "public"."country" TO "anon";
GRANT ALL ON TABLE "public"."country" TO "authenticated";
GRANT ALL ON TABLE "public"."country" TO "service_role";

GRANT ALL ON SEQUENCE "public"."country_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."country_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."country_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."customers" TO "anon";
GRANT ALL ON TABLE "public"."customers" TO "authenticated";
GRANT ALL ON TABLE "public"."customers" TO "service_role";

GRANT ALL ON SEQUENCE "public"."customers_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."customers_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."customers_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."destination" TO "anon";
GRANT ALL ON TABLE "public"."destination" TO "authenticated";
GRANT ALL ON TABLE "public"."destination" TO "service_role";

GRANT ALL ON SEQUENCE "public"."destination_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."destination_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."destination_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."itinerary" TO "anon";
GRANT ALL ON TABLE "public"."itinerary" TO "authenticated";
GRANT ALL ON TABLE "public"."itinerary" TO "service_role";

GRANT ALL ON TABLE "public"."itinerary_destination" TO "anon";
GRANT ALL ON TABLE "public"."itinerary_destination" TO "authenticated";
GRANT ALL ON TABLE "public"."itinerary_destination" TO "service_role";

GRANT ALL ON SEQUENCE "public"."itinerary_destination_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."itinerary_destination_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."itinerary_destination_id_seq" TO "service_role";

GRANT ALL ON SEQUENCE "public"."itinerary_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."itinerary_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."itinerary_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."user_account" TO "anon";
GRANT ALL ON TABLE "public"."user_account" TO "authenticated";
GRANT ALL ON TABLE "public"."user_account" TO "service_role";

GRANT ALL ON SEQUENCE "public"."user_account_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."user_account_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."user_account_id_seq" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;