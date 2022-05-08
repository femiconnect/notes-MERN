const express = require('express');
const dotenv = require('dotenv');

const app = express();

//DOTENV config
dotenv.config();

app.get('/', (req, res) => {
   res.send('API is runnings...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));