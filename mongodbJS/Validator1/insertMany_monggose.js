const mongoose = require('mongoose');
//connection creation and create a new db
mongoose.connect('mongodb://127.0.0.1:27017/thapaChannel')
    .then(() => console.log('Connected!'))
    .catch((err) => { console.log(err) });

//create the structure of the documents
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    },
    // Add this line
});

//create the model of the collection
const playlist = new mongoose.model('playlist', playlistSchema);

// to try to create the document using the async and await

const createDocument = async () => {
    try {
        const nodePlayList = new playlist({
            name: 'Node JS',
            ctype: 'Back END',
            videos: 50,
            author: 'Thapa Techincal',
            active: true,
        });
        const mongoPlaylist = new playlist({
            name: 'Mongo DB',
            ctype: 'DataBase',
            videos: 50,
            author: 'Thapa Techincal',
            active: true,
        });
        const javascriptPlaylist = new playlist({
            name: 'Front End',
            ctype: 'front end and back end',
            videos: 50,
            author: 'Thapa Techincal',
            active: true,
        });
        const reactPlayList = new playlist({
            name: 'React js',
            ctype: 'Back END',
            videos: 90,
            author: 'Thapa Techincal',
            active: true,
        });
        const cssPlaylist = new playlist({
            name: 'CSS',
            ctype: 'Front End',
            videos: 150,
            author: 'Thapa Techincal',
            active: true,
        });


        //   our existing code for creating documents...
        const result = await playlist.insertMany([cssPlaylist, reactPlayList,
            javascriptPlaylist, mongoPlaylist, nodePlayList]);
        // console.log(result);
        // To display all documents in the collection
        const allPlaylists = await playlist
        // Comparison Operator

        find({ videos: { $lte: 50 } }); //greater than or equal to
        find({ ctype: { $in: ["Back END", " DataBase"] } }); // are select any in document
        find({ ctype: { $nin: ["Back END", " DataBase"] } }); // are not selected any in doc
        find({ ctype: { $ne: ["Back END", " DataBase"] } }); // not equal to the specified value

        //  or Operator
        find({
            $or: [
                { ctype: 'Back End' },
                { author: 'Thapa Techincal' }
            ]
        }).select({ name: 1 });
        //AND Operator
        find({
            $and: [
                { ctype: 'Back End' },
                { author: 'Thapa Techincal' }
            ]
        }).select({ name: 1 });
        //NOR Operator
        find({
            $nor: [
                { ctype: 'Back End' },
                { author: 'Thapa Techincal' }
            ]
        }).select({ name: 1 });

        // NOT Operator
        find({
            $nor: [
                { ctype: 'Back End' },
                { author: 'Thapa Techincal' }
            ]
        }).select({ name: 1 });
        //  how to count the document 
        // we can use the count method the find the total number of document in this collection
        // 1 for ascending order and -1 fr descending 
        find({ author: 'Thapa Techincal' })
            .select({ name: 1 })
            .sort({ name: -1 })
            .countDocuments();
        console.log('All Playlists:', allPlaylists);

    } catch (err) {
        console.log(err);
    }
}
//createDocument();
// Update the document in the mongoose.Collection
const UpdateDoc = async (_id) => {
    const result = await playlist.updateOne(
        { _id },
        { $set: { name: 'Java Script' } }
    );
    console.log(result);
}
// UpdateDoc("670a6e8c9a81963f5b5b8050");
//FindByIdAndUpdate 
const FindByIdAndUpdate = async (_id) => {
    const result = await playlist.findByIdAndUpdate(
        { _id },
        { $set: { name: 'Java Script' }},
        {
        new:true,
        useFindAndModify:false
        });
    console.log(result);
    }  
    // FindByIdAndUpdate("670a6e8c9a81963f5b5b8050");
    const DeleteDocument = async (_id) => {
    const result = await playlist.deleteOne({ _id });
    console.log(result);
    }  
   // DeleteDocument("670a6e8c9a81963f5b5b8051");

    const findByIdAndDelete1 = async (_id) => {
        const result = await playlist.findByIdAndDelete({ _id });
        console.log(result);
        }  
        findByIdAndDelete1("670a6e8c9a81963f5b5b8051");