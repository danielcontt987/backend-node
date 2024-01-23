const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors')

const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

server.listen(port, '192.168.1.9', () => {
    console.log('Aplicación de nodeJS ' + process.pid + ' Iniciada...')
});

app.get('/', (req, res) =>{
    res.send('Ruta raís del backend');
});

//Error hanlder

app.use((err, req, res, next) => {
    console.log(err);
    console.log(err.status || 500).send(err.stack);
})