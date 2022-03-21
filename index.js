const express = require('express');
const userRoutes = require('./routes/userRoutes.routes');
const error = require('./middlewares/error');
const loginRoutes = require('./routes/loginRoutes.routes');
const categoriesRoutes = require('./routes/categories.routes');
const postRoutes = require('./routes/post.routes');

const app = express();

app.use(express.json());

app.use('/user', userRoutes);
app.use('/login', loginRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);

app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
