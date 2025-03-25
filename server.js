const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const articleRoutes = require('./api/articles/articles.router');
const userRoutes = require('./api/users/users.router');

// Middleware pour parser le JSON
app.use(express.json());

// Middleware pour injecter Socket.io dans chaque requête
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Déclaration des routes
app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 3001;
http.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur le port ${PORT}`);
});
