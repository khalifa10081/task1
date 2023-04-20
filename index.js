import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

const students = [
    {
        id: 1,
        name: "Mahmoud",
        city: "Aswan",
    },
    {
        id: 2,
        name: "Ahmed",
        city: "tanta",
    },
    {
        id: 3,
        name: "Ali",
        city: "cairo",
    },
];

const studentsFunction = (requset, response) => {
    
    response.render("students", { layout: false, students});
   
};

app.get('/students', studentsFunction);


app.get('/students/:id' , (req , res ) => {
   
    const id = req.params.id;
    const student = students.find((item) => {
        return item.id ==id;
    })

    res.render("student", { layout: false, student });

   
});


app.listen(5000);