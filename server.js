const express = require("express");
const db=require("./db")
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("server Wokring 🥵🥵🥵")
});
const port=process.env.port || 8000;
app.listen(port,()=>'server running on port');