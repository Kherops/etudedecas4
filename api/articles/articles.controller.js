const service = require('./articles.service');

async function createArticle(req, res) {
  try {
    const data = {
      ...req.body,
      auteurId: req.user._id
    };
    const article = await service.createArticle(data);

    // Temps réel
    req.io.emit('articleCreated', article);

    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateArticle(req, res) {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Accès refusé' });
    }

    const article = await service.updateArticle(req.params.id, req.body);
    req.io.emit('articleUpdated', article);

    res.status(200).json(article);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteArticle(req, res) {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Accès refusé' });
    }

    await service.deleteArticle(req.params.id);
    req.io.emit('articleDeleted', req.params.id);

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle
};
