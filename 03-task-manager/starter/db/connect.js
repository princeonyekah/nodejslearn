
const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://ponyekah:1234@nodeexpressprojects.ymso2aa.mongodb.net/?retryWrites=true&w=majority'
mongoose
    .connect(connectionString,{
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    }
   )
    .then(()=> console.log('CONNECTED TO THE DB...'))
    .catch((err) => console.log(err) )