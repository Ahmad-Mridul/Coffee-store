const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { MongoClient, ServerApiVersion } = require("mongodb");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve images from uploads folder

const uri = "mongodb+srv://lamridulbtech:BAdM6q1YZszYUq8J@cluster0.rhoqvhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your URI

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

// Multer Setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    },
});
const upload = multer({ storage: storage });

async function run() {
    try {
        await client.connect();
        const database = client.db("coffeeDB");
        const coffeesCollection = database.collection("coffees");

        app.get("/coffees", async (req, res) => {
            const cursor = coffeesCollection.find();
            const coffees = await cursor.toArray();
            res.send(coffees);
        });

        app.post("/coffees", upload.single("photo"), async (req, res) => {
            const coffeeData = req.body;
            coffeeData.photoPath = req.file.path; // Save file path in DB

            const result = await coffeesCollection.insertOne(coffeeData);
            res.send(result);
        });

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
