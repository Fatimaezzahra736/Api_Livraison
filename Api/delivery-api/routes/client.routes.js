const express = require('express');
const router = express.Router();
const Client = require('../models/Client');
const auth = require('../middlewares/auth');

// Ajouter un client
router.post('/', auth, async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Lister tous les clients
router.get('/', auth, async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

// Modifier un client
router.put('/:id', auth, async (req, res) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(client);
});

// Supprimer un client
router.delete('/:id', auth, async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json({ message: "Client supprimé" });
});

module.exports = router;
