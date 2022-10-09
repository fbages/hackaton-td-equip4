const express = require('express');
const helmet = require('helmet');
const notfound404 = require('./middlewares/notfound404');
const http = require('http')
const app = express();
const server = http.createServer(app);
const routerCsv = require('./routes/routesCsv');

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(helmet());

//Routes
app.use(routerCsv);

//Middleware ErrorHandler
app.use(notfound404);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`)
})