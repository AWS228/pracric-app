const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from GitHub Actions!'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app; // Export for testing

