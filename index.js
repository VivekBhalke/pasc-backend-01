import express from "express";
const app = express();
import fs from 'fs'
import mongoose from 'mongoose'

const url = `mongodb+srv://sample_user:demo@my-sample-cluster-b3ugy.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
app.get("/getSingleBlog" , (req , res)=>{
    const id = req.query.id;
    res.json({id : id});
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);

            return res.json({message : "error here"});
        }
    
        const jsonData = JSON.parse(data);
        console.log(jsonData);
    });


})

app.listen(3000 , ()=>{
    console.log("server started")
} )