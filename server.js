// Express JS
const express = require(`express`);
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const path = require(`path`);
const fs = require(`fs`);

// Bring the data (JSON)
// const { notes } = require(`./data/notes.json`);


// Add public folder
app.use(express.static(__dirname + `/public`));


// API Routes


// Routes
app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `./public/html/landing.html`));
});

app.get(`/notes`, (req, res) => {
    res.sendFile(path.join(__dirname, `./public/html/notes.html`));
});

app.get(`*`, (req, res) => {
    res.sendFile(path.join(__dirname, `./public/html/landing.html`));
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})