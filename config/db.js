const mongoose = require('mongoose');

const connectDB = async () => {

const conn = await mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});

console.log(`database connect on ${conn.connection.host}`)


}

module.exports = connectDB;