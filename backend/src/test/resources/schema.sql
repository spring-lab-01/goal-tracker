--
CREATE TABLE goal
(
    id               INT PRIMARY KEY auto_increment,
    name             TEXT,
    description      TEXT,
    category         VARCHAR(255),
    created_datetime timestamp,
    created_by       int not null
);


--
CREATE TABLE activity
(
    id               INT PRIMARY KEY,
    name             TEXT,
    description      TEXT,
    milestone_id     int not null,
    created_datetime timestamp,
    created_by       int not null
);
