const express = require ('express');
const app = express(); //contain all methods

const PORT=process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send("hello from express...Priyanshu");
});

app.listen(PORT,() => console.log(`listening on port ${PORT}`)
); //to create server

