const express = require ('express');
const path=require('path');
const app = express(); //contain all methods
const PORT=process.env.PORT || 3000;

app.set('view engine','ejs'); //fpr setting template egine

// app.set('views',path.resolve(__dirname)+'/templates'); // to change views directory
// console.log(app.get('view engine'));
// console.log(app.get('views')); //to print views folder path 





//app.use(express.static('public')); //used for static route{middle ware}

app.get('/',(req,res) => {
   // res.sendFile(path.resolve(__dirname)+'/index.html');
    res.render('index',{title:'home page'});  //rendering file using templating engine
});

app.get('/about',(req,res) => {
    // res.sendFile(path.resolve(__dirname)+'/about.html');
    res.render('about',{title:'my about page'}); 
});

app.get('/download',(req,res) => {                         //serving file for download 
    res.download(path.resolve(__dirname)+'/about.html ')
})



app.listen(PORT,() => console.log(`listening on port ${PORT}`)
); //to create server

