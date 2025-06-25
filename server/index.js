const express = require("express");
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { log } = require("console");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri =
	`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rhoqvhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; // Replace with your URI

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});


async function run() {
	try {
		await client.connect();
		const database = client.db("coffeeDB");
		const coffeesCollection = database.collection("coffees");

		app.get("/coffees",async(req,res)=>{
			const cursor = coffeesCollection.find();
			const result = await cursor.toArray();
			res.send(result);
		})

		app.get("/coffees/:id",async(req,res)=>{
			const id = req.params.id;
			const query = {_id:new ObjectId(id)};
			const result = await coffeesCollection.findOne(query);
			res.send(result);
		})

		app.post("/coffees",async(req,res)=>{
			const coffee = req.body;
			const result = await coffeesCollection.insertOne(coffee);
			res.send(result);
		})

		app.delete("/coffees/:id",async(req,res)=>{
			const id = req.params.id;
			const query = {_id:new ObjectId(id)};
			const result = await coffeesCollection.deleteOne(query);
			res.send(result);
		})

		await client.db("admin").command({ ping: 1 });
		console.log("Connected to MongoDB!");
	} finally {
		// await client.close();  // Keep connection open for server to work
	}
}

run().catch(console.dir);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
