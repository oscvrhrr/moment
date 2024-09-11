#! /usr/bin/env node

const  { Client } = require("pg");

const SQL = `
    CREATE TABLE festivals (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY.
        name TEXT,
        genre TEXT,
        start_date DATE,
        end_date DATE

    );
    ('EDC', 'EDM', 'Las Vegas', 'https://nomusica.com/wp-content/uploads/2024/05/EDC-Las-Vegas-2025.jpg'),
    ('Summerfest','Multi-genre','Milwaukee','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLuakYtnM2j80VnYs2NFWO8xAVzOVoAMZzw&s')


`



async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  }
  
  main();