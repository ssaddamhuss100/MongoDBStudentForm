const mongoose = require('mongoose');
    
   mongoose.connect('mongodb://localhost:27017/students-api').then(()=>{
    console.log('mongo db  is successful connected');
}).catch((err)=>{
    console.log('No Connection');
})

// Export the mongoose instance
exports.default  = mongoose;
// export default = mongoose;