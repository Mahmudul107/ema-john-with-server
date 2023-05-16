const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Dotenv configuration
const app = express();
const port = process.env.PORT || 5000;



// Middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('John is busy with shopping')
})


app.listen(port, () => {
    console.log(`Ema john server listening on: ${port}`);
})