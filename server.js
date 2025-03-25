const articleRoutes = require('./api/articles/articles.router');
app.use('/api/articles', articleRoutes);


const userRoutes = require('./api/users/users.router');
app.use('/api/users', userRoutes);
