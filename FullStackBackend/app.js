const express = require("express");
const cors = require("cors");
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const connectDB = require('./src/config/DB');
const UserRoutes = require('./src/Route/UsersRoute.js');
dotenv.config();

const app = express();

connectDB();
const PORT=process.env.PORT || 7000;
// Enable CORS for all routes
app.use(cors());
app.use(express.json());

app.use('/api',UserRoutes);


app.listen(PORT, () => {
console.log(`Server is running at http://localhost:${PORT}`);
});