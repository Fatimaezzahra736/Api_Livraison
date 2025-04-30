// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware JSON
app.use(express.json());

// Importer routes ici (exemple plus tard)
// app.use('/api/commandes', require('./routes/commande.routes'));
// Importer le fichier de route
const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

const clientRoutes = require('./routes/client.routes');
app.use('/api/clients', clientRoutes);

const commandeRoutes = require('./routes/commande.routes');
app.use('/api/commandes', commandeRoutes);

const livreurRoutes = require('./routes/livreur.routes');
app.use('/api/livreurs', livreurRoutes);


const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Connexion MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Connecté à MongoDB");
    app.listen(PORT, () => console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`));
  })
  .catch(err => console.error("Erreur MongoDB :", err));
  app.get('/', (req, res) => {
    res.send('API Running ✅');
  });
  