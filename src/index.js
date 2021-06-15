const express = require("express"); // vao lock-json lay express ra
const morgan = require("morgan");
const handlebars  = require('express-handlebars');
const path = require("path");


const app = express();  // return obj de xay dung website

//
app.use(express.static(path.join(__dirname, 'public')));


// HTTP logger
app.use(morgan('combined'));

// Template Engine
app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', '.hbs'); // set view engine la handlebars

app.set('views', path.join(__dirname, 'resources\\views'));


const port = 3000;

app.get("/", (req,res) =>(res.render('home')));

app.get("/news", (req,res) =>(res.render('news')));


app.listen(port, () => console.log(`Server is ready in port ${port}`));
// route: lay root , response tra ve hello world. Lang nghe cong 3000 va in ra cau console in terminal
