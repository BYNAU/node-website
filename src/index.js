const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get("/", (req,res) => {
    res.send("<h1>Sal que te paso a buscar!!!</h1>")
})

app.get("/about", (req,res) => {
    res.send("<h1>Acerca de..</h1>")
})


app.get(('/*'),(req,res)=>{
    res.status(404).render('./404.ejs',{title:'not found'})
})
    





app.listen(3000)
console.log("Server on port 3000")
