const mongoose = require('mongoose');
const validator = require('validator');
//connection creation and create a new db
mongoose.connect('mongodb://127.0.0.1:27017/thapaChannel')
  .then(() => console.log('Connected!'))
  .catch((err)=>{console.log(err)});

  //create the structure of the documents
  const playlistSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true, // to required the input field
        // lowercase:true, lowercase is going to lower case of the given input name
        uppercase:true, //convert the upper case
        unique:true, // write the unique value
        trim:true, // to remove the leading and trailing space in input field
        minlength:[5,'minimum length is more than 2'],
        max_length:30, // restrict the input at minimum length
    },
    ctype:{
        type : String,
        required:true, // to fill the value
        lowercase:true,//to convert the lower case
        enum: ['frontend','backend','database'], //enum to find the given input to match the same output in the database
    },

    videos:{
        type: Number,
        validate(value){
            if(value < 0){
                throw new Error('Videos count should not be negative!! ');
            }
        }
    },

    author: String,
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is Invalid');
            }
        }
    },
    active: Boolean,
    date:{
        type: Date,
        default : Date.now
    }
  });

  //create the model of the collection
  const List = new mongoose.model('List', playlistSchema);

// to try to create the document using the async and await

const createDocument = async ()=>{
   try{
    const reactPlaylist = new List({
            name:'React JS',
            ctype:'DataBase',
            videos:5,
            author:'Saddam Hussain',
            email:'Saddamhuss100@gmail.com',
            active:true,
          });
           const result = await List.insertMany([reactPlaylist]);      
           console.log(result);
    }catch(err){
        console.log(err);
    }
}
createDocument();