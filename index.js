const express = require('express');
const userRoutes = require('./routes/userRoutes');
const error = require('./middlewares/error');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

app.use(express.json());

app.use('/user', userRoutes);
app.use('/login', loginRoutes);

app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
