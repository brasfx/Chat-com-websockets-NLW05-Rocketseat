import express from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import path from 'path';
import './database';
import { routes } from './routes';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/pages/client', (_, res) => {
  return res.render('html/client.html');
});

app.get('/pages/admin', (_, res) => {
  return res.render('html/admin.html');
});
const http = createServer(app); // criando protocolo http
const io = new Server(http); // criando prtotocolo websocket

io.on('connection', (socket: Socket) => {
  console.log('Socket conectado, id: ', socket.id);
});

app.use(express.json());
app.use(routes);

export { http, io };
