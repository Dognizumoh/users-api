const express = require("express")
const usersRoute = require("./routes/usersRoutes")

const app = express();

//middlewares
app.use(express.json());

app.use(usersRoute)

//home route
app.get("/", (req, res)=>{
    res.status(200).send("<h1>WELCOME TO THE USERS DATABASE</h1>");
})

const PORT = 4000;

app.listen(PORT, ()=>{console.log("SERVER IS UP")
})
