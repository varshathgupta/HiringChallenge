const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "musicSystem",
});
app.post("/create", (req, res) => {
    const artwork = req.body.artwork;
    const song = req.body.song;
    const dor = req.body.dor;
    const artist = req.body.artist;
    const rating = req.body.rating;
    const dob = req.body.dob;
    const bio= re.body.bio;

    db.query(
        "INSERT INTO songs (artwork, song, dor, rating,) VALUES (?,?,?,?)",
        [artwork, song, dor, rating,artist],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      )
      db.query(
        "INSERT INTO artists (artist,dob,bio) VALUES(?,?,?)",
        [artist,dob,bio],
        (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send("Values Inserted");
            }
          }
      )
})

app.get("/songs", (req, res) => {
  db.query("SELECT * FROM songs", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/artists", (req, res) => {
  db.query("SELECT * FROM artists", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});