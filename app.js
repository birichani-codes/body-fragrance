const express = require('express');
const app = express();
const PORT = 3000;

// Serving static files from "public" directory
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Products route
app.get('/products', (req, res) => {
    res.sendFile(__dirname + '/views/products.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
