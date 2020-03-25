const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse url
app.use(bodyParser.urlencoded({ extended: true }))

//Specifié un port serveur
app.listen(3000, function() {
    console.log("Server started on port 3000");
})

// GET request
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// method POST 
app.post('/', (req, res) => {
    console.log(req.body.statut);
    let salaire = req.body.salaire;
    let statut = req.body.statut;
    const salaireNet = salaire * statut;
    res.send("Votre salaire net sera d'environ" + salaireNet);
});

