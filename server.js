const express = require ('express');

const app = express();

const port = 5001;

app.get("/", (req, res) => {
    res.send("Hellow from the Docker ...");
})
app.listen(port, (req, res) => {
    console.log(`in docker server Listening on port ${port}` );
})