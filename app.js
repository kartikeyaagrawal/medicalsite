const express = require("express")
const app = express();
//const bodyparser= require("body-parser")



const mongo =require("mongodb")
// parse application/json
//app.use(bodyparser.json({limit: '40mb', extended: true}))


app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
 app.use(express.json({limit: '40mb', extended: true}))             //thsi changes the request to json format to get int reafble 

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.get("/",(req,res)=>{
    res.render("addblog")
});
app.get("/post",(req,res)=>{
    res.render("post")
});

app.post("/api",(req,res)=>{
    var apple= JSON.stringify(req.body)
    console.log(req.body)
    var banana=req.body.kick;
//    console.log(banana);
//    console.log(JSON.parse(apple));
   
        var fs = require('fs');

        
        fs.appendFile('mynewfile1.json', apple, function (err) {
        if (err) throw err;
        console.log('Saved!');
        }); 
    // res.end()

})

app.listen(3000,function(){
    console.log("started at port 3000")
})