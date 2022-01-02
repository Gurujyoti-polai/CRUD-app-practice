const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect('mongodb://localhost/codeial_practice', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        const db = mongoose.connection;
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB