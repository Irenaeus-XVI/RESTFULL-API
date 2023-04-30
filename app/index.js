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
    console.log(`app is listening at http://localhost:${port}`);
});


//NOTE - Get All persons on the api
app.get('/persons', (req, res) => {
    persons.length ? res.json(persons) : res.json("Message : No Persons Found ")
    // res.sendFile(path.join(__dirname, '/index.html'));
    //    res.write("hiiiiiii132iiiiiiiiii")
});



let id = 0;

//NOTE - Create a new person
app.post('/persons', (req, res) => {
    let body = req.body;
    let person;
    id++;
    person = { id: id, ...body };
    persons[id - 1] = person;
    res.send(person);
});






//NOTE - Retrieve specific Person
app.get('/persons/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    id = parseInt(id);
    console.log("asd", req.params.id, "", id, typeof (req.params.id));
    let personObject = persons.filter((e, index) => {
        console.log(index);
        return e.id == id;
    });
    console.log(personObject);
    personObject.length ? res.send(personObject) : res.send({ "Message": "Person not Found " });

});

//NOTE - PUT(Update Person Data )
app.put('/persons/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let index;
    persons.find((e, i) => {
        if (e.id == id) {
            index = i;
        }
    });

    let updatedPerson = {
        id, ...req.body
    }


    persons[index] = updatedPerson;
    res.send(updatedPerson);
});


//NOTE - Delete (Delete Person Data )



app.delete('/persons/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let deletedIndex = persons.findIndex((e) => e.id == id);
    if(deletedIndex>=0){
        console.log(deletedIndex);

        persons.splice(deletedIndex,1)
        res.status(200).send(
            "Message: person Deleted"
        )
    }
    else{
        res.status(404).send(
            "Message: person Don't Found "
        )
    }
    
  
});