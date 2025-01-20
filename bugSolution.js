const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', async (req, res) => {
  try {
    // ... database interaction with error handling ...
    // Example using async/await and a promise-based database library:
    const result = await database.createUser(req.body);
    res.status(201).send(result);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send({ error: 'Failed to create user' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));