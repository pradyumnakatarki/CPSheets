import express from "express";
import bodyParser from "body-parser";

const port = 3000;

const app = express();

app.listen(port, () => {
    console.log(`Working on ${port}`)
});

app.get("/", (req, res) => {
    res.send(`Working on ${port}`)
})