const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const { log } = require("console");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri =
	"mongodb+srv://birm2476:birm2476@cluster0.ryk4cdh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
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

		app.put("/coffees/:id",async(req,res)=>{
			const id = req.params.id;
			const updatedData = req.body;
			const options = {upsert	: true};
			const query = {_id:new ObjectId(id)}
			const update = {
				$set:{
					coffeeName: updatedData.coffeeName,
					chefName: updatedData.chefName,
					supplierName: updatedData.supplierName,
					taste: updatedData.taste,
					category: updatedData.category,
					details: updatedData.details,
					photo:updatedData.photo
				}
			}
			const result = await coffeesCollection.updateOne(query,update,options);
			res.send(result);
		})

		app.delete("/coffees/:id",async(req,res)=>{
			const id = req.params.id;
			const query = {_id:new ObjectId(id)};
			const result = await coffeesCollection.deleteOne(query);
			res.send(result);
		})
		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
