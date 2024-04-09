
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

COMMENT ON SCHEMA "public" IS 'standard public schema';

CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";

CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";

CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

CREATE OR REPLACE FUNCTION "public"."delete_claim"("uid" "uuid", "claim" "text") RETURNS "text"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
    BEGIN
      IF NOT is_claims_admin() THEN
          RETURN 'error: access denied';
      ELSE        
        update auth.users set raw_app_meta_data = 
          raw_app_meta_data - claim where id = uid;
        return 'OK';
      END IF;
    END;
$$;

ALTER FUNCTION "public"."delete_claim"("uid" "uuid", "claim" "text") OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."get_claim"("uid" "uuid", "claim" "text") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
    DECLARE retval jsonb;
    BEGIN
      IF NOT is_claims_admin() THEN
          RETURN '{"error":"access denied"}'::jsonb;
      ELSE
        select coalesce(raw_app_meta_data->claim, null) from auth.users into retval where id = uid::uuid;
        return retval;
      END IF;
    END;
$$;

ALTER FUNCTION "public"."get_claim"("uid" "uuid", "claim" "text") OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."get_claims"("uid" "uuid") RETURNS "jsonb"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
    DECLARE retval jsonb;
    BEGIN
      IF NOT is_claims_admin() THEN
          RETURN '{"error":"access denied"}'::jsonb;
      ELSE
        select raw_app_meta_data from auth.users into retval where id = uid::uuid;
        return retval;
      END IF;
    END;
$$;

ALTER FUNCTION "public"."get_claims"("uid" "uuid") OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."get_my_claim"("claim" "text") RETURNS "jsonb"
    LANGUAGE "sql" STABLE
    AS $$
  select 
  	coalesce(nullif(current_setting('request.jwt.claims', true), '')::jsonb -> 'app_metadata' -> claim, null)
$$;

ALTER FUNCTION "public"."get_my_claim"("claim" "text") OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."get_my_claims"() RETURNS "jsonb"
    LANGUAGE "sql" STABLE
    AS $$
  select 
  	coalesce(nullif(current_setting('request.jwt.claims', true), '')::jsonb -> 'app_metadata', '{}'::jsonb)::jsonb
$$;

ALTER FUNCTION "public"."get_my_claims"() OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."is_claims_admin"() RETURNS boolean
    LANGUAGE "plpgsql"
    AS $$
  BEGIN
    IF session_user = 'authenticator' THEN
      --------------------------------------------
      -- To disallow any authenticated app users
      -- from editing claims, delete the following
      -- block of code and replace it with:
      -- RETURN FALSE;
      --------------------------------------------
      IF extract(epoch from now()) > coalesce((current_setting('request.jwt.claims', true)::jsonb)->>'exp', '0')::numeric THEN
        return false; -- jwt expired
      END IF;
      If current_setting('request.jwt.claims', true)::jsonb->>'role' = 'service_role' THEN
        RETURN true; -- service role users have admin rights
      END IF;
      IF coalesce((current_setting('request.jwt.claims', true)::jsonb)->'app_metadata'->'claims_admin', 'false')::bool THEN
        return true; -- user has claims_admin set to true
      ELSE
        return false; -- user does NOT have claims_admin set to true
      END IF;
      --------------------------------------------
      -- End of block 
      --------------------------------------------
    ELSE -- not a user session, probably being called from a trigger or something
      return true;
    END IF;
  END;
$$;

ALTER FUNCTION "public"."is_claims_admin"() OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."register_user_account"("uid" "uuid") RETURNS "text"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
    BEGIN      
      update auth.users set raw_app_meta_data = 
        raw_app_meta_data || 
          json_build_object('role_id', 2)::jsonb where id = uid;
      return 'OK';
    END;
$$;

ALTER FUNCTION "public"."register_user_account"("uid" "uuid") OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."register_user_account"("uid" "uuid", "full_name" "text") RETURNS "text"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
    BEGIN      
      insert into public.user_account (id, full_name, role_id)
        values (uid, full_name, 2);

      update auth.users set raw_app_meta_data = 
        raw_app_meta_data || 
          json_build_object('full_name', full_name, 'role_id', 2)::jsonb where id = uid;
      return 'OK';
    END;
$$;

ALTER FUNCTION "public"."register_user_account"("uid" "uuid", "full_name" "text") OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."set_claim"("uid" "uuid", "claim" "text", "value" "jsonb") RETURNS "text"
    LANGUAGE "plpgsql" SECURITY DEFINER
    SET "search_path" TO 'public'
    AS $$
    BEGIN
      IF NOT is_claims_admin() THEN
          RETURN 'error: access denied';
      ELSE        
        update auth.users set raw_app_meta_data = 
          raw_app_meta_data || 
            json_build_object(claim, value)::jsonb where id = uid;
        return 'OK';
      END IF;
    END;
$$;

ALTER FUNCTION "public"."set_claim"("uid" "uuid", "claim" "text", "value" "jsonb") OWNER TO "postgres";

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
    "address" "json" NOT NULL,
    "avatar" character varying(256) NOT NULL,
    "created_at" timestamp(0) without time zone NOT NULL,
    "email" character varying(256) NOT NULL,
    "name" character varying(256) NOT NULL,
    "phone_number" character varying(256) NOT NULL,
    "id" "uuid" DEFAULT "auth"."uid"() NOT NULL
);

ALTER TABLE "public"."customers" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."destination" (
    "id" integer NOT NULL,
    "country_id" integer NOT NULL,
    "cost" double precision DEFAULT 0 NOT NULL,
    "name" character varying(50) NOT NULL,
    "notes" "text",
    "image_name" "text"
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
    "budget" double precision DEFAULT 0 NOT NULL,
    "title" character varying(100) DEFAULT '0'::character varying NOT NULL,
    "title_image" character varying(100) DEFAULT ''::character varying NOT NULL,
    "user_id" "uuid"
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
    "id" "uuid" DEFAULT "auth"."uid"() NOT NULL,
    "full_name" character varying NOT NULL,
    "role_id" smallint
);

ALTER TABLE "public"."user_account" OWNER TO "postgres";

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
    ADD CONSTRAINT "public_itinerary_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."customers"("id");

ALTER TABLE ONLY "public"."user_account"
    ADD CONSTRAINT "public_user_account_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON UPDATE CASCADE ON DELETE CASCADE;

ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON FUNCTION "public"."delete_claim"("uid" "uuid", "claim" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."delete_claim"("uid" "uuid", "claim" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."delete_claim"("uid" "uuid", "claim" "text") TO "service_role";

GRANT ALL ON FUNCTION "public"."get_claim"("uid" "uuid", "claim" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."get_claim"("uid" "uuid", "claim" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_claim"("uid" "uuid", "claim" "text") TO "service_role";

GRANT ALL ON FUNCTION "public"."get_claims"("uid" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_claims"("uid" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_claims"("uid" "uuid") TO "service_role";

GRANT ALL ON FUNCTION "public"."get_my_claim"("claim" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."get_my_claim"("claim" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_my_claim"("claim" "text") TO "service_role";

GRANT ALL ON FUNCTION "public"."get_my_claims"() TO "anon";
GRANT ALL ON FUNCTION "public"."get_my_claims"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_my_claims"() TO "service_role";

GRANT ALL ON FUNCTION "public"."is_claims_admin"() TO "anon";
GRANT ALL ON FUNCTION "public"."is_claims_admin"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."is_claims_admin"() TO "service_role";

GRANT ALL ON FUNCTION "public"."register_user_account"("uid" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."register_user_account"("uid" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."register_user_account"("uid" "uuid") TO "service_role";

GRANT ALL ON FUNCTION "public"."register_user_account"("uid" "uuid", "full_name" "text") TO "anon";
GRANT ALL ON FUNCTION "public"."register_user_account"("uid" "uuid", "full_name" "text") TO "authenticated";
GRANT ALL ON FUNCTION "public"."register_user_account"("uid" "uuid", "full_name" "text") TO "service_role";

GRANT ALL ON FUNCTION "public"."set_claim"("uid" "uuid", "claim" "text", "value" "jsonb") TO "anon";
GRANT ALL ON FUNCTION "public"."set_claim"("uid" "uuid", "claim" "text", "value" "jsonb") TO "authenticated";
GRANT ALL ON FUNCTION "public"."set_claim"("uid" "uuid", "claim" "text", "value" "jsonb") TO "service_role";

GRANT ALL ON TABLE "public"."country" TO "anon";
GRANT ALL ON TABLE "public"."country" TO "authenticated";
GRANT ALL ON TABLE "public"."country" TO "service_role";

GRANT ALL ON SEQUENCE "public"."country_id_seq" TO "anon";
GRANT ALL ON SEQUENCE "public"."country_id_seq" TO "authenticated";
GRANT ALL ON SEQUENCE "public"."country_id_seq" TO "service_role";

GRANT ALL ON TABLE "public"."customers" TO "anon";
GRANT ALL ON TABLE "public"."customers" TO "authenticated";
GRANT ALL ON TABLE "public"."customers" TO "service_role";

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
