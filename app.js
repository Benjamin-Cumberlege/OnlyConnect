const express = require("express");
const app = express();

const port = 8080;

app.get("*", (req, res) => {
    res.send("<h1>Test 2</h1>")
})

app.listen(port, () => {
    console.log(`Listing on port ${port}`)
})