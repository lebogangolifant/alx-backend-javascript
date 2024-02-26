import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 1245;

// Use routes defined in index.js
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
