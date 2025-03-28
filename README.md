# Étude de Cas 4 – API Articles (Projet CDA)

Projet réalisé dans le cadre de la formation CDA (Concepteur Développeur d'Applications) – ISCOD.

---

## 🎯 Objectif

Développer une API REST complète en Node.js + Express, connectée à MongoDB, permettant de gérer des articles avec authentification, rôles utilisateur, gestion des droits, temps réel via Socket.io et déploiement avec PM2.

---

## 🛠️ Technologies

- Node.js
- Express
- MongoDB + Mongoose
- Socket.io
- JWT (authentification)
- PM2 (déploiement)
- Jest / Supertest / Mockingoose (tests unitaires)

---

## 📁 Structure du projet

. ├── api/ │ ├── articles/ │ └── users/ ├── middleware/ ├── tests/ ├── logs/ ├── ecosystem.config.js └── server.js

yaml
Copier
Modifier

---

## 🔐 Authentification & Rôles

- L’authentification se fait via JWT.
- Deux rôles d’utilisateur :
  - `user` (peut créer un article)
  - `admin` (peut modifier/supprimer tous les articles)

---

## 🔁 Fonctionnalités temps réel

- Utilisation de Socket.io pour notifier en temps réel :
  - Création d’un article (`articleCreated`)
  - Modification (`articleUpdated`)
  - Suppression (`articleDeleted`)

---

## 🧪 Tests unitaires

- Création, modification et suppression d’un article testées
- Mock des modèles avec `mockingoose`
- Supertest pour les appels API simulés

---

## ⚙️ Déploiement avec PM2

```bash
pm2 start ecosystem.config.js
