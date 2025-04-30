# 📦 API REST — Système de Livraison

Ce projet est une API REST construite avec **Node.js**, **Express.js** et **MongoDB**, permettant de gérer un système de livraison incluant les clients, les livreurs et les commandes.

## 🚀 Fonctionnalités principales

- 🔐 Authentification avec JWT (inscription, connexion, déconnexion)
- 👤 Gestion des utilisateurs (hash mot de passe avec bcrypt)
- 📇 CRUD complet :
  - Clients
  - Livreurs
  - Commandes (liées à client & livreur)
- 🛡️ Sécurité avec middleware JWT pour protéger les routes
- ⚠️ Gestion des erreurs (doublons, champs manquants, routes introuvables)
- 🧪 Fichier `.rest` prêt pour tester l’API via VS Code (REST Client)

---

## 🗃️ Stack technique

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- Bcrypt.js
- Dotenv

---

## 📁 Arborescence du projet (simplifiée)

delivery-api/
├── controllers/
         ├── models/ │
         ├── User.js │
         ├── Client.js │
         ├── Livreur.js │
         └── Commande.js
├── routes/ │
         ├── auth.routes.js │
         ├── client.routes.js │
         ├── livreur.routes.js │
         └── commande.routes.js
├── middlewares/ │
         └── auth.js
├── .env
├── server.js
├── package.json
└── api.rest

---

## 🔑 Authentification

- `POST /api/auth/register` — Créer un utilisateur
- `POST /api/auth/login` — Connexion et récupération du token
- `POST /api/auth/logout` — Déconnexion (supprimer token côté client)

---

## 📦 Endpoints CRUD

> Tous les endpoints nécessitent un token JWT dans le header :


### Clients
- `GET /api/clients` — Liste
- `POST /api/clients` — Ajouter
- `PUT /api/clients/:id` — Modifier
- `DELETE /api/clients/:id` — Supprimer

### Livreurs
- `GET /api/livreurs`
- `POST /api/livreurs`
- `PUT /api/livreurs/:id`
- `DELETE /api/livreurs/:id`

### Commandes
- `GET /api/commandes` — Avec `populate()` des clients et livreurs
- `POST /api/commandes`
- `PUT /api/commandes/:id`
- `DELETE /api/commandes/:id`

---

## ⚙️ Configuration `.env`

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/delivery
JWT_SECRET=supersecretkey

💻 Lancer le projet en local:
git clone ...
cd delivery-api
Installer les dépendances :
bash
npm install

Démarrer le serveur :
bash
npm start
Serveur lancé sur http://localhost:3000


Tester avec VS Code
Fichier api.rest prêt à l'emploi pour l'extension REST Client :
📥 Créez un utilisateur
🔐 Connectez-vous
🧾 Utilisez le token pour accéder aux routes protégées




Dans le cadre du module : Cloud / API Rest — Devoir Surveillé
Projet réalisé par : Fatima Ezzahra El Assabi / Wahiba Ait Taleb
