--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3 (Ubuntu 11.3-1.pgdg18.04+1)
-- Dumped by pg_dump version 11.5

-- Started on 2019-09-11 16:56:10 PDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
-- SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
-- SET row_security = off;


drop table public.users CASCADE;
drop table public.schools CASCADE;
drop table public.classes CASCADE;
drop table public.events CASCADE;
drop table public.schoolsubs CASCADE;
drop table public.classsubs CASCADE;
drop table public.eventsubs CASCADE;

------- Create tables ------

CREATE TABLE public.classes (
    "class_id" serial NOT NULL,
    "class_name" varchar NOT NULL,
    "subject" varchar NOT NULL,
    "school_id" INT,
    PRIMARY KEY ("class_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE public.events (
    "event_id" serial NOT NULL,
    "event_name" varchar NOT NULL,
    "event_location" varchar NOT NULL,
    "class_id" INT,
    PRIMARY KEY ("event_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE public.schools (
    "school_id" serial NOT NULL,
    "school_name" varchar NOT NULL,
    "school_location" varchar NOT NULL,
    PRIMARY KEY ("school_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE public.users (
    "user_id" serial NOT NULL,
    "first_name" varchar NOT NULL,
    "last_name" varchar NOT NULL,
    "user_name" varchar NOT NULL,
    "user_password" varchar NOT NULL,
    "user_email" varchar NOT NULL,
    "user_location" varchar NOT NULL,
    PRIMARY KEY ("user_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE public.schoolsubs (
    "schoolsub_id" serial NOT NULL,
    "user_id" INT,
    "school_id" INT,
    PRIMARY KEY ("schoolsub_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE public.classsubs (
    "classsub_id" serial NOT NULL,
    "user_id" INT,
    "class_id" INT,
    PRIMARY KEY ("classsub_id")
) WITH (
    OIDS=FALSE
);

CREATE TABLE public.eventsubs (
    "eventsub_id" serial NOT NULL,
    "user_id" INT,
    "event_id" INT,
    PRIMARY KEY ("eventsub_id")
) WITH (
    OIDS=FALSE
);


------- Alter tables / add Contraints ----

ALTER TABLE public.classsubs ADD CONSTRAINT fk_class FOREIGN KEY ("class_id") REFERENCES  public.classes("class_id");
ALTER TABLE public.classsubs ADD CONSTRAINT fk_user FOREIGN KEY ("user_id") REFERENCES  public.users("user_id");

ALTER TABLE public.eventsubs ADD CONSTRAINT fk_event FOREIGN KEY ("event_id") REFERENCES  public.events("event_id");
ALTER TABLE public.eventsubs ADD CONSTRAINT fk_user FOREIGN KEY ("user_id") REFERENCES  public.users("user_id");

ALTER TABLE public.schoolsubs ADD CONSTRAINT fk_school FOREIGN KEY ("school_id") REFERENCES  public.schools("school_id");
ALTER TABLE public.schoolsubs ADD CONSTRAINT fk_user FOREIGN KEY ("user_id") REFERENCES  public.users("user_id");

ALTER TABLE public.classes ADD CONSTRAINT fk_school FOREIGN KEY ("school_id") REFERENCES  public.schools("school_id");
ALTER TABLE public.events ADD CONSTRAINT fk_class FOREIGN KEY ("class_id") REFERENCES  public.classes("class_id");

--------- Add dummy data --------

INSERT INTO public.users (first_name, last_name, user_name, user_password, user_email, user_location) VALUES ('Ali', 'Rahman', 'arahman', 'password', 'arahman@gmail.com', 'California');
INSERT INTO public.users (first_name, last_name, user_name, user_password, user_email, user_location) VALUES ('Will', 'Bladon', 'wbladon', 'password', 'wbladon@gmail.com', 'California');
INSERT INTO public.users (first_name, last_name, user_name, user_password, user_email, user_location) VALUES ('Vince', 'Ho', 'vho', 'password', 'vho@gmail.com', 'California');
INSERT INTO public.users (first_name, last_name, user_name, user_password, user_email, user_location) VALUES ('Heidi', 'Bang', 'hbang', 'password', 'hbang@gmail.com', 'California');


INSERT INTO public.schools ("school_name", "school_location") VALUES ('Codesmith', 'Venice');
INSERT INTO public.schools ("school_name", "school_location") VALUES ('PCC', 'Pasadena');
INSERT INTO public.schools ("school_name", "school_location") VALUES ('Bama', 'Tuscaloosa');
INSERT INTO public.schools ("school_name", "school_location") VALUES ('UMich', 'Ann Arbor');
INSERT INTO public.schools ("school_name", "school_location") VALUES ('Harvard', 'Cambridge');


INSERT INTO public.classes (class_name, subject, school_id) VALUES ('COMP101', 'Javascript Fundamentals', 1);
INSERT INTO public.classes (class_name, subject, school_id) VALUES ('COMP201', 'Intro to Node', 1);
INSERT INTO public.classes (class_name, subject, school_id) VALUES ('COMP401', 'Back-end', 1);
INSERT INTO public.classes (class_name, subject, school_id) VALUES ('HIST101', 'History', 2);
INSERT INTO public.classes (class_name, subject, school_id) VALUES ('HIST404', 'Advanced History', 2);
INSERT INTO public.classes (class_name, subject, school_id) VALUES ('Psych101', 'Psychology', 2);
INSERT INTO public.classes (class_name, subject, school_id) VALUES ('MATH101', 'Intro to Math', 3);
INSERT INTO public.classes (class_name, subject, school_id) VALUES ('MATH201', 'Algebra', 3);
INSERT INTO public.classes (class_name, subject, school_id) VALUES ('MATH305', 'Linear Equations', 3);


INSERT INTO public.events (event_name, event_location, class_id) VALUES ('Coding party', 'Starbucks', 1);
INSERT INTO public.events (event_name, event_location, class_id) VALUES ('Study history', 'Hogwarts Library', 2);
INSERT INTO public.events (event_name, event_location, class_id) VALUES ('Do math stuff', 'Venice Beach', 3);


INSERT INTO public.schoolsubs (user_id, school_id) VALUES (1, 1);
INSERT INTO public.schoolsubs (user_id, school_id) VALUES (2, 1);
INSERT INTO public.schoolsubs (user_id, school_id) VALUES (3, 1);
INSERT INTO public.schoolsubs (user_id, school_id) VALUES (4, 1);


INSERT INTO public.classsubs (user_id, class_id) VALUES (1, 1);
INSERT INTO public.classsubs (user_id, class_id) VALUES (1, 2);

INSERT INTO public.classsubs (user_id, class_id) VALUES (2, 1);
INSERT INTO public.classsubs (user_id, class_id) VALUES (2, 2);

INSERT INTO public.classsubs (user_id, class_id) VALUES (3, 1);
INSERT INTO public.classsubs (user_id, class_id) VALUES (3, 2);

INSERT INTO public.classsubs (user_id, class_id) VALUES (4, 1);
INSERT INTO public.classsubs (user_id, class_id) VALUES (4, 2);


INSERT INTO public.eventsubs (user_id, event_id) VALUES (1, 1);
INSERT INTO public.eventsubs (user_id, event_id) VALUES (2, 1);
INSERT INTO public.eventsubs (user_id, event_id) VALUES (3, 1);
INSERT INTO public.eventsubs (user_id, event_id) VALUES (4, 1);

INSERT INTO public.eventsubs (user_id, event_id) VALUES (1, 2);
INSERT INTO public.eventsubs (user_id, event_id) VALUES (2, 2);
INSERT INTO public.eventsubs (user_id, event_id) VALUES (3, 3);
INSERT INTO public.eventsubs (user_id, event_id) VALUES (4, 3);
