const express = require("express"); // vao lock-json lay express ra
const morgan = require("morgan");
const handlebars = require("express-handlebars");
var methodOverride = require('method-override') //override method
const path = require("path");

const route = require("./routes");
const SoftMiddleware = require('./app/middlewares/SoftMiddlewares');

const db = require('./config/db'); // khai bao DB connection

const port = 3000;
const app = express(); // return obj de xay dung website

//connect DB 
db.connect();


// static file
app.use(express.static(path.join(__dirname, "public")));

//
app.use(
  express.urlencoded({
    extended: true,
  })
); // doc data tu form
app.use(express.json()); // doc data tu 1 resource, XMLHttpRequest, axios,

app.use(methodOverride('_method'))// override method when submit form
app.use(SoftMiddleware);// use middlewares
// HTTP logger
//app.use(morgan('combined'));

// Template Engine
app.engine(".hbs", handlebars(
  { 
    extname: ".hbs",
    helpers: {
      sum: (a,b) => a+b,
      sortable: (field,sort) =>{
        const icons = {
          default: 'arrow-down-outline',
          desc: 'arrow-up-outline',
          asc: 'arrow-down-outline'
        }
        const types = {
          default: 'desc',
          asc: 'desc',
          desc: 'asc'
        }

        const icon = icons[sort.type];
        const type = types[sort.type];

        return `<a href="?_sort&column=${field}&type=${type}"> 
                  <ion-icon name="${icon}"></ion-icon>
                </a>`
      }
    }
  }
  ));

app.set("view engine", ".hbs"); // set view engine la handlebars

app.set("views", path.join(__dirname, "resources","views"));

// routes init

route(app);




app.listen(port, () => console.log(`Server is ready in port ${port}`));
// route: lay root , response tra ve hello world. Lang nghe cong 3000 va in ra cau console in terminal
