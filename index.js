import express from "express";
const app = express();
import fs from 'fs'
import mongoose from 'mongoose'

const url = `your url`

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
    
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);

            return res.json({message : "error here"});
        }
    
        const jsonData = JSON.parse(data);
        console.log(jsonData);
        // res.json({array :jsonData })
        for(var i = 0 ; i<jsonData.length ;i++)
        {
            if(jsonData[i].id == id)
            {
                return res.json({yourBlog : jsonData[i]});
            }
        }
        return res.json({message : "incoreect id"})

    });


})

app.listen(3000 , ()=>{
    console.log("server started")
} )