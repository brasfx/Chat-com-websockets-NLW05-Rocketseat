import express from 'express';
import './database';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Olá mundo' });
});

app.post('/users', (req, res) => {
  return res.json({ message: 'Usuário salvo com sucesso!' });
});
app.listen(3333, () => console.log('Servidor na porta 3333'));
