const express = require('express');

const index = express();
const port = process.env.PORT || 3100;

index.get('/', (req, res) => {
  res.send('Welcome to CodeDrive Service!');
});

index.listen(port, () => {
  console.log(`Running on port ${port}`);
});
