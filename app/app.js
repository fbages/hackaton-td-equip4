const express = require('express');
const http = require('http')
const app = express();
const server = http.createServer(app);



const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`)
})