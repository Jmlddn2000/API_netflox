import express from "express"
import mongoose from "mongoose";
import route from "./route/route.js";
import cors from 'cors'
const app = express();

mongoose.connect("mongodb+srv://netflox:netflox@netflox.yzfbo6y.mongodb.net/netflox", {
   useNewUrlParser : true,
   useUnifiedTopology : true
});

app.use(cors())

const db = mongoose.connection;
const port = process.env.PORT ||3000

db.on("error", (error) => console.log(error))
db.once('open', () => console.log('Database Connected'))

app.get('/',(req, res) => res.send("masuk pak aji"))

app.use(express.json());
app.use(route);





app.listen(port, () => console.log("server up running")) 