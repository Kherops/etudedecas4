const express = require('express');
const router = express.Router();
const controller = require('./users.controller');

// Route publique pour afficher les articles d’un utilisateur
router.get('/:userId/articles', controller.getUserArticles);

module.exports = router;
