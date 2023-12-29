const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ContactMessage = require('./ContactMessage');

const app = express();

app.use(bodyParser.json());
app.use(cors(
 {
  origin:["https://portfolio-ankit-nu.vercel.app"],
  method:["POST", "GET"],
  credentials:true
 }
));

const connectionString = 'mongodb+srv://rattanankit2004:clicknik@contactmessages.gwzotrv.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
 console.log('Connected to MongoDB');
});

app.post('/submit', async (req, res) => {
    const contactMessage = new ContactMessage({
        email: req.body.email,
        name: req.body.name,
        message: req.body.message,
    });

    try {
        await contactMessage.save();
        res.status(201).send(contactMessage);
    } catch (error) {
        console.error(error);  // Log the error to the console
        res.status(400).send(error);
    }
});

const PORT = process.env.PORT || 3000; // Use the port provided by Glitch or default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
