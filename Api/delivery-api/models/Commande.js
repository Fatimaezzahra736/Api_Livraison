const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  adresseLivraison: { type: String, required: true },
  statut: {
    type: String,
    enum: ['en_attente', 'en_livraison', 'livree'],
    default: 'en_attente'
  },
  livreur: { type: mongoose.Schema.Types.ObjectId, ref: 'Livreur' },
}, { timestamps: true });

module.exports = mongoose.model('Commande', commandeSchema);
