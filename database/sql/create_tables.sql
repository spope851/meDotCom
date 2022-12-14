create table if not exists mandarin (
    id serial primary key,
    traditional varchar (255) not null,
    simplified varchar (255) not null,
    pinyin varchar (255) not null,
    meaning varchar (2048) not null
);

create table if not exists content (
    id serial primary key,
    title varchar (255) not null,
    img varchar (255),
    domain varchar (255) not null,
    summary varchar (2048) not null
);

create table if not exists truths (
    id serial primary key,
    sentence varchar (2048) not null,
    is_true bit not null
);
