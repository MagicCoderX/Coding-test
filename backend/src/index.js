const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { authenticateUser } = require('./middleware');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
