const express = require("express"); // vao lock-json lay express ra
const app = express();  // return obj de xay dung website
const port = 3000;

app.get("/", (req,res) => res.send("Hello World!!!")).listen(port, () => console.log(`Server is ready in port ${port}`));
// route: lay root , response tra ve hello world. Lang nghe cong 3000 va in ra cau console in terminal
