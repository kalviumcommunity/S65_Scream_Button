const express = require('express');
const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
    try {
        res.send('pong');
    } catch (error) {
        console.error('Error in ping route:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});