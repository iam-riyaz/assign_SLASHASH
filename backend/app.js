import express from 'express';
import mysql from "mysql2";
import cors from "cors";

const app= express()
app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Riyaz@intmysql',
    database: 'my-project',
  });


//   root route
app.get("/",async (req,res)=>{
    res.status(200).send("route is working")
})
  
//   post method 
app.post('/add_to_favorite',async(req,res)=>{

    console.log("request:", req.body)
    const {Title,Poster,Year,Type}= req.body
    const newData = {
        Title: Title,
        Poster: Poster,
        Year:Year,
        Type:Type
      };

    connection.query('INSERT INTO slashash.fav_movie SET ?', newData, (err, results, fields) => {
        if (err) {
          console.log('Error inserting data:', err);
        } else {
          console.log('Data inserted successfully.');
          res.status(200).send({results})
        }
      
        // Close the connection when done with queries
        
      });
    


})

// get method
app.get("/get_data",async(req,res)=>{
    connection.query('SELECT * FROM slashash.fav_movie', (err, results, fields)=>{

        if (err) {
            console.error('Error executing query:', err);
            return;
          }
        
          // Process the results here
          console.log('Query results:', results);
          res.status(200).send({results})

    })

})




app.listen(2000, ()=>{
    connection.connect((err)=>{
        if(err){
            console.log(err)
            return;
        }
        else{
            console.log("mysql connection established")
            
        }
    })
    console.log("listening on port  2000")
})