const articleService = require('../articles/articles.service');

async function getUserArticles(req, res) {
  try {
    const articles = await articleService.getArticlesByUser(req.params.userId);
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  // ...tes autres exports
  getUserArticles,
};
