const express= require('express');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();

dotenv.config({path:'./config/config.env'});
app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

connectDB();

const libraryRouter = require('./route/libraryRoute')

app.use('/',libraryRouter);

const server = app.listen(process.env.PORT,() => {
console.log('server is running on the port 3000');
});

process.on("unhandledRejection",(err,promise) => {
   console.log(`Error : ${err.message}`);
   server.close( () => process.exit(1));
});