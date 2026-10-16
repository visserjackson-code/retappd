import Database from "better-sqlite3";

const db = new Database('scratch.db');

db.exec(`
    DROP TABLE IF EXISTS books;
    CREATE TABLE books (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    pages INTEGER
    );
    `)

const insert = db.prepare('INSERT INTO books (title, pages) VALUES (?, ?)');
insert.run('Brave New World', 275);


const rows = db.prepare('SELECT * FROM books').all();
console.log(rows);
