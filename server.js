const express = require('express');
const app = express();
const port = 3000;

// Setting up the public directory
app.use(express.static('web'));

app.listen(port, () => console.log(`listening on port ${port}!`));