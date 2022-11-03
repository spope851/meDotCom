create table if not exists mandarin (
    id serial primary key,
    traditional varchar (255) not null,
    simplified varchar (255) not null,
    pinyin varchar (255) not null,
    meaning varchar (2048) not null
);
