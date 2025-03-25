const request = require('supertest');
const app = require('../server');
const mockingoose = require('mockingoose');
const Article = require('../api/articles/articles.schema');
const User = require('../api/users/users.schema');

jest.mock('../middleware/middleware.auth', () => (req, res, next) => {
  req.user = {
    _id: 'user123',
    role: 'admin'
  };
  next();
});

describe('Article API', () => {

  beforeEach(() => {
    mockingoose.resetAll();
  });

  it('devrait créer un article', async () => {
    const mockArticle = {
      _id: 'article123',
      titre: 'Test',
      contenu: 'Contenu de test',
      auteurId: 'user123',
      status: 'draft'
    };

    mockingoose(Article).toReturn(mockArticle, 'save');

    const res = await request(app)
      .post('/api/articles')
      .send({ titre: 'Test', contenu: 'Contenu de test' });

    expect(res.status).toBe(201);
    expect(res.body.titre).toBe('Test');
  });

  it('devrait modifier un article', async () => {
    const updated = { titre: 'Modifié' };
    const mockUpdatedArticle = {
      _id: 'article123',
      titre: 'Modifié',
      contenu: 'Contenu original',
      auteurId: 'user123'
    };

    mockingoose(Article).toReturn(mockUpdatedArticle, 'findOneAndUpdate');

    const res = await request(app)
      .put('/api/articles/article123')
      .send(updated);

    expect(res.status).toBe(200);
    expect(res.body.titre).toBe('Modifié');
  });

  it('devrait supprimer un article', async () => {
    mockingoose(Article).toReturn({}, 'findOneAndDelete');

    const res = await request(app)
      .delete('/api/articles/article123');

    expect(res.status).toBe(204);
  });

});
