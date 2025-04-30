const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Cet utilisateur existe déjà" });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash });
    res.status(201).json({ message: "Utilisateur créé", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Mot de passe incorrect" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: "Connecté", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Déconnexion
router.post('/logout', (req, res) => {
  // Côté backend on ne fait rien ici car le token est géré côté client.
  // On répond simplement pour indiquer que le client doit supprimer le token.
  res.json({ message: "Déconnexion réussie. Supprimez le token côté client." });
});

module.exports = router;
