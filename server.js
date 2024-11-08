import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()

const port = process.env.port || 3000;


app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Api workng")
})

app.listen(port, () => console.log("listening on port ", port))