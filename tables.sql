CREATE TABLE
IF NOT EXISTS users
(
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE TABLE
IF NOT EXISTS expenses
(
    id SERIAL PRIMARY KEY,
    users_id INTEGER,
    date TEXT,
    income INTEGER,
    expense INTEGER,
    description TEXT,
    uuid TEXT
);