const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// app.use();
const users = [
	{
		id:1,
		name:"Mridul"
	}
]

app.get("/",(req,res)=>{
	res.send("Server is connected");
})

app.get("/users",(req,res)=>{
	res.send(users);
})

app.listen(port,()=>{
	console.log(`server is running on port: ${port}`);
})