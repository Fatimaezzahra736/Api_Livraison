const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  adresse: String,
  telephone: String,
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
