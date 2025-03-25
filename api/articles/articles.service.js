const Article = require('./articles.schema');

async function createArticle(data) {
  return await Article.create(data);
}

async function updateArticle(id, data) {
  return await Article.findByIdAndUpdate(id, data, { new: true });
}

async function deleteArticle(id) {
  return await Article.findByIdAndDelete(id);
}

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle
};
const Article = require('./articles.schema');

async function getArticlesByUser(userId) {
  return await Article.find({ auteurId: userId })
    .populate('auteurId', '-password'); // Populate les infos du user sauf le mdp
}

module.exports = {
  // ...tes autres méthodes
  getArticlesByUser,
};
