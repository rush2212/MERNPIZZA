const mongoose = require("mongoose");
var mongoURL = 'mongodb+srv://rush_2212:Rush99743abh@cluster0.uzo6q.mongodb.net/mern-pizza'
mongoose.connect(mongoURL,{useUnifiedTopology:true},{useNewURLParser:true})
var db=mongoose.connection
db.on('connected', ()=>{
    console.log('hogaya bc');
})
db.on('error', ()=>{
    console.log('na ho paya bc');
})
module.exports =mongoose