require('dotenv').config();
const express = require("express");
const { ObjectId } = require("mongodb");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri =
	`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cqkzp8h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
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
		// await client.connect();

		const mydb = client.db("coffeeDB");
		const coffeeCollection = mydb.collection("coffees");
		const userCollection = mydb.collection("users");
		app.get("/coffees", async (req, res) => {
			const result =  coffeeCollection.find();
			const coffees = await result.toArray();
			res.send(coffees);
		});

		app.post("/coffees", async (req, res) => {
			const newCoffee = await req.body;
			const result = await coffeeCollection.insertOne(newCoffee);
			res.send(result);
		});

		app.delete("/coffees/:id", async (req, res) => {
			const id = req.params.id;
			const query = { _id: new ObjectId(id) };
			const result = await coffeeCollection.deleteOne(query);
			res.send(result);
		});

		app.put("/coffees/:id", async (req, res) => {
			const id = req.params.id;
			const updateInfo = req.body;
			const options = { upsert: true };
			const filter = {_id:new ObjectId(id)}
			const updateCoffee = {
				$set:{
					coffeeName:updateInfo.coffeeName,
					chefName:updateInfo.chefName,
					supplierName:updateInfo.supplierName,
					taste:updateInfo.taste,
					category:updateInfo.category,
					details:updateInfo.details,
					photo:updateInfo.photo
				}
			}
			const result = await coffeeCollection.updateOne(filter,updateCoffee,options);
			res.send(result);
		});

		// user related APIs
		app.get('/users', async(req,res) => {
			const result = userCollection.find();
			const users = await result.toArray();
			res.send(users);
		})
		app.post('/users', async(req,res) => {
			const newUser = req.body;
			const result = userCollection.insertOne(newUser);
			res.send(result);
		})

		// Send a ping to confirm a successful connection
		// await client.db("admin").command({ ping: 1 });
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
	res.send("Connected");
});

app.listen(port, () => {
	console.log(`listening from port: ${port}`);
});
