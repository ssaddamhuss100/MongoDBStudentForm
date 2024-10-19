const mongoose = require('mongoose');
//connection creation and create a new db
mongoose.connect('mongodb://127.0.0.1:27017/thapaChannel')
  .then(() => console.log('Connected!'))
  .catch((err)=>{console.log(err)});

  //create the structure of the documents
  const playlistSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    ctype:String,
    videos:Number,
    active:Boolean,
    date:{
        type:Date,
        default :Date.now
    }
  });

  //create the model of the collection
  const playlist = new mongoose.model('Playlist', playlistSchema);

// to try to create the document using the async and await

const createDocument = async ()=>{
   try{
    const reactPlaylist = new playlist({
            name:'react js',
            ctype:'Back END',
            videos:50,
            author:'Thapa Techincal',
            active:true,
          })
          const nodePlayList = new playlist({
            name:'Node JS',
            ctype:'FRONT END',
            videos:50,
            author:'Thapa Techincal',
            active:true,
          })
           const result = await playlist.insertMany([nodePlayList,reactPlaylist]);      
           console.log(result);
    }catch(err){
        console.log(err);
    }
};

//createDocument();

//displayDocument
const getDocument = async ()=>{
    const result = await playlist.find({ctype:"Back END"})
     .select({name:1});
    console.log(result);
}

getDocument();