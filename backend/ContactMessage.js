const mongoose = require('mongoose');

const ContactMessageSchema = new mongoose.Schema({
 email: String,
 name: String,
 message: String,
});

module.exports = mongoose.model('ContactMessage', ContactMessageSchema);