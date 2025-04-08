const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const testMCP = require('./routes/testMCP');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', testMCP);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});