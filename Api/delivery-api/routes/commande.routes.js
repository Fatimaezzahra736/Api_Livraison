const express = require('express');
const router = express.Router();
const Commande = require('../models/Commande');
const auth = require('../middlewares/auth');

// Ajouter commande
router.post('/', auth, async (req, res) => {
  try {
    const commande = await Commande.create(req.body);
    res.status(201).json(commande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Liste commandes
router.get('/', auth, async (req, res) => {
  const commandes = await Commande.find()
    .populate('client')
    .populate('livreur');
  res.json(commandes);
});

// Modifier commande (statut ou livreur)
router.put('/:id', auth, async (req, res) => {
  const commande = await Commande.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(commande);
});

// Supprimer commande
router.delete('/:id', auth, async (req, res) => {
  await Commande.findByIdAndDelete(req.params.id);
  res.json({ message: "Commande supprimée" });
});

module.exports = router;
