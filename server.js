const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // تأكد من صحة المسار

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://myuser:CELE%40HziD%25cf5By@cluster0.ibgji3f.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error connecting to MongoDB: ", err));

// Use routes
app.use('/api', authRoutes);

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
