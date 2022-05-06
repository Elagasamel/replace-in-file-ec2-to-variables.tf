//Définition des modules
const express 
= require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

//On définit notre objet express nommé app
const app = express();  //  La constante app est l'instanciation d'un objet Express, qui va contenir notre serveur ainsi que les méthodes dont nous aurons besoin pour le faire fonctionner.
  
  app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Connected to React");
});

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        "Access-Control-Expose-Headers": true,
        "Access-Control-Allow-Headers": true,
    })
);

app.use(express.json())
app.use(bodyParser.json());
 

 
const calculRouter=require('./routes/calcul-routes');
app.use('/api/calcul',calculRouter.routes);

const storageRouter=require('./routes/storage-routes');
app.use('/api/storage',storageRouter.routes);


app.post('/api',(req, res) => {
  console.log(req.body)
  res.end("Success")
  });

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`app started on port ${PORT}`));