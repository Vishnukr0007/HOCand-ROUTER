const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

//MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/store', {
  
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

//Routes
const userRoutes = require('./UserRouter');
app.use('/api/user', userRoutes);

//Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
  