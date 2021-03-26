CREATE TABLE IF NOT EXISTS users_information
(
    id      INTEGER PRIMARY KEY AUTOINCREMENT,
    name    TEXT NOT NULL,
    email   TEXT NOT NULL UNIQUE,
    comment TEXT NOT NULL
);

