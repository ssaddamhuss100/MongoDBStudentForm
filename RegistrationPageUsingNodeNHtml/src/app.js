import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './db/conn.js';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3100;
// Middleware for parsing the json object
app.use(bodyParser.json());
// Connect to MongoDB
connectDB();
// Absolute path only
const fileResolved = path.resolve('public',);
app.use(express.static(fileResolved));


app.get('/',(req,res)=>{
    res.send('this is the file of the the app.js');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
