import express from "express"
import { Connection } from "./db1.js"


const app=express()
const port=3000
Connection()

app.listen(port,()=>{
    console.log(`server is run at ${port}`);
})