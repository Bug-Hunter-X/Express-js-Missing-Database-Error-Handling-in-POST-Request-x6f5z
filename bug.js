const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  console.log(req.body);
  // Missing error handling for database operations
  // ... database interaction ...
  res.status(201).send();
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));