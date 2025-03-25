const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
  auteurId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dateCreation: { type: Date, default: Date.now },
  dateModification: { type: Date, default: Date.now },

  // 🔽 Enumération à ajouter :
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  }
});

module.exports = mongoose.model('Article', articleSchema);