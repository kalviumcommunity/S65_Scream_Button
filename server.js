const express = require('express');
const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
    try {
        res.send('pong');
    } catch (error) {
        res.status(500).send(error);
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});