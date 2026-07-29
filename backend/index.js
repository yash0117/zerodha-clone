require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");


const {HoldingsModel} = require('./model/HoldingsModels');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;



const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);


app.get("/allHoldings", authMiddleware, async (req, res) => {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", authMiddleware, async (req, res) => {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
});


app.post('/newOrder', async(req,res)=> {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    await newOrder.save();

    res.send("Order saved!");
});

if (!uri) {
    console.error('MONGO_URL environment variable is not set.');
    process.exit(1);
}

const startServer = async () => {
    try {
        await mongoose.connect(uri);
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`App started on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

startServer();


