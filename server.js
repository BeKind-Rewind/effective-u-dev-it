const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Route handler for req not supported, default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Function to start the express.js on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});