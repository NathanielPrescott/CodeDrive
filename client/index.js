const express = require('express');

const index = express();
const port = process.env.PORT || 3000;

index.get('/', (req, res) => {
  res.send('Welcome to CodeDrive Client!');
});

index.listen(port, () => {
  console.log(`Running on port ${port}`);
});
