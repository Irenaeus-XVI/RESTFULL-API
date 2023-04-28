//NOTE -  Import express frame work to my environment  
const e = require('express');

const express = require('express');

const app = express();

app.use(express.json())


//NOTE -   Choose the free port to work with
const port = 8000;

const path = require('path');

//NOTE - Declare empty array that will save all of the object 
let persons = [];



//NOTE - Listen to the port 
app.listen(port, () => {
    console.log(`app is listining at http://localhost:${port}`);
});


//NOTE - Get All persons on the api

app.get('/persons', (req, res) => {
    res.json(persons);
    // res.sendFile(path.join(__dirname, '/index.html'));
    //    res.write("hiiiiiii132iiiiiiiiii")

});





//NOTE - Create a new person
app.post('/persons', (req, res) => {

    let body = req.body;
    persons.push(body);
    // console.log("persons:",...persons,"length",persons.length);

    let person = [...persons]
    for (let i = 0; i < person.length; i++) {
        // console.log(`person ${i}:` ,person[i]);
        const { id, name, age, gender, email } = person[i];
        console.log(id, name, age, gender, email);

    }
    res.send(req.body);

});






//NOTE - Retrieve specific Person
app.get('/persons/:id', (req, res) => {
    let id = req.params.id.split(':').join("");
    console.log(id);
    id = parseInt(id);
    console.log("asd", req.params.id, "", id, typeof (req.params.id));
    let personObject = persons.filter((e) => {
        return e.id == id;
    });
    console.log(personObject);
    personObject.length ?res.send(personObject) : res.send({ "Message": "Person not dound " });
  
});