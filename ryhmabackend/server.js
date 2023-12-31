const express = require('express');
const pool = require('./database');
const cors = require('cors')
const port = process.env.PORT || 3000;
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());

//The express.json() function is a built-in middleware function in Express. 
//It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

//"async and await make promises easier to write"
// async makes a function return a Promise
// The keyword async before a function makes the function return a promise.
// Syntax:  "async(req, res) => {}"
// await makes a function wait for a Promise
// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues
// Syntax:  "async(req, res) => {let value = await promise}"
app.post('/api/signup', async (req, res) => {
    try {
      const credentials = req.body;
      console.log("user signup post req arrived")
      // Check if the user already exists
      const existingUser = await pool.query(
        "SELECT * FROM usertable WHERE email = $1", [credentials.email]
      )
      if (existingUser.rows.length > 1) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Add a new user to the table
     await pool.query("INSERT INTO usertable(email, password) values($1, $2)", [credentials.email, credentials.password])
     console.log(credentials.email + " added to db")
  
      // Create and send JWT
      const token = jwt.sign({ email: credentials.email, password: credentials.password }, 'salav6ti'); 
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM usertable WHERE email = $1", [email]);
        if (user.rows.length > 0 && user.rows[0].password === password) {
            const token = jwt.sign({ email: email }, "salav6ti");
            res.json({ token });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.post('/api/posts', async(req, res) => {
    try {
        console.log("a post request has arrived");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO posttable(date, body) values ($1, $2)    RETURNING*", [post.date, post.body]
            // $1, $2, $3 are mapped to the first, second and third element of the passed array (post.title, post.body, post.urllink)
            // The RETURNING keyword in PostgreSQL allows returning a value from the insert or update statement.
            // using "*" after the RETURNING keyword in PostgreSQL, will return everything
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
}); 



app.get('/api/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const posts = await pool.query(
            "SELECT * FROM posttable"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});



app.get('/api/posts/:id', async(req, res) => {
    try {
        console.log("get a post with route parameter  request has arrived");
        // The req.params property is an object containing properties mapped to the named route "parameters". 
        // For example, if you have the route /posts/:id, then the "id" property is available as req.params.id.
        const { id } = req.params; // assigning all route "parameters" to the id "object"
        const posts = await pool.query( // pool.query runs a single query on the database.
            //$1 is mapped to the first element of { id } (which is just the value of id). 
            "SELECT * FROM posttable WHERE id = $1", [id]
        );
        res.json(posts.rows[0]); // we already know that the row array contains a single element, and here we are trying to access it
        // The res.json() function sends a JSON response. 
        // This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method.
    } catch (err) {
        console.error(err.message);
    }
}); 



app.put('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("update request has arrived");
        const updatepost = await pool.query(
            "UPDATE posttable SET (date, body) = ($2, $3) WHERE id = $1", [id, post.date, post.body]
        );
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});



app.delete('/api/posts/', async(req, res) => {
    try {
        
        console.log("delete all posts request has arrived");
        const deletepost = await pool.query(
            "TRUNCATE TABLE posttable"
        );
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
}); 

app.delete('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        //const post = req.body; // we do not need a body for a delete request
        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM posttable WHERE id = $1", [id]
        );
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
}); 


app.listen(port, () => {
    console.log("Server is listening to port " + port)
});