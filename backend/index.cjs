const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,      
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
});

app.post('/api/rsvp', (req, res) => {
    const { firstName, lastName, email, attending, guests, message } = req.body;
    const sql = "INSERT INTO rsvps (firstName, lastName, email, attending, guests, message) VALUES (?, ?, ?, ?, ?, ?)";
    
    db.query(sql, [firstName, lastName, email, attending, guests, message], (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: "Success! Data saved in MySQL." });
    });
});

app.listen(5000, () => console.log("Backend server running on port 5000"));