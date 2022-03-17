const express = require('express');
const cors = require('cors');
const app = express();

//authentication
const cookieParser = require('cookie-parser');


//bring in the middleware
app.use(cors({credentials: true, origin: 'http://localhost:3000'}), cookieParser(), express.json(), express.urlencoded({extended:true}));

//database connection
require("./config/mongoose.config")(process.env.DB);


//create routes
require("./routes/api.routes")(app);
require("./routes/database.routes")(app);



//connect server
app.listen(process.env.PORT, ()=>{console.log(`Server is up on port: ${process.env.PORT}`)})