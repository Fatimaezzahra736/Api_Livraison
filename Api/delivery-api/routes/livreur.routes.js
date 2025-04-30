const express = require('express');
const router = express.Router();
const Livreur = require('../models/Livreur');
const auth = require('../middlewares/auth');

// Ajouter livreur
router.post('/', auth, async (req, res) => {
  try {
    const livreur = await Livreur.create(req.body);
    res.status(201).json(livreur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Liste livreurs
router.get('/', auth, async (req, res) => {
  const livreurs = await Livreur.find();
  res.json(livreurs);
});

// Modifier livreur
router.put('/:id', auth, async (req, res) => {
  const livreur = await Livreur.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(livreur);
});

// Supprimer livreur
router.delete('/:id', auth, async (req, res) => {
  await Livreur.findByIdAndDelete(req.params.id);
  res.json({ message: "Livreur supprimé" });
});

module.exports = router;
