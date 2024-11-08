import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoutes.js'

const app = express()

const port = process.env.port || 3000;
connectDb();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Api workng")
})

app.use('/api/admin', adminRouter)

connectCloudinary()


app.listen(port, () => console.log("listening on port ", port))