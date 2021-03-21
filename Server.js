const express = require ('express');
const app = express(); //contain all methods
const path=require('path');


const PORT=process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname)+'/index.html');
});

app.listen(PORT,() => console.log(`listening on port ${PORT}`)
); //to create server

