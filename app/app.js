const dotenv = require('dotenv').config();
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const validation = require('./middlewares/validator');
const http = require('http')
const app = express();
const server = http.createServer(app);
const routerCsv = require('./routes/routesCsv');
const router = express.Router();

//DB config
const db = require('./config/config');

//Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
app.use(routerCsv);

app.use(router.get('', (req,res)=>{
  console.log('Arribada solucitud');
  res.send('inici');
}));

//Middleware ErrorHandler
app.use(errorHandler);

app.use(function(req, res, next) {
    res.status(404);
   // respond with json
   if (req.accepts('json')) {
    res.json({ error: 'Page not found' });
    return;
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`)
})