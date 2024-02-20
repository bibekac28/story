import express from "express"
import bodyParser from "body-parser";



const app = express();
const port = 3000
var todo_array = []
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res)=> {
    res.render("index.ejs")
})

app.get("/delete", (req, res)=> {
    todo_array.pop()
    res.render("index.ejs", {
        todo_list: todo_array,
    })
})

app.post("/submit", (req, res)=> {
    var todo_list = (req.body["todo"])
    todo_array.push(todo_list)
    res.render("index.ejs", {
       todolist: todo_array,
    })

})

app.listen(port, ()=> {
    console.log("port running in 3000")
});