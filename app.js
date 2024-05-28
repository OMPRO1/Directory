const express = require('express');
const app = express();
const PORT = 4000;

app.get("/api",(req,res) => {
    res.send("Hello how are it's been long time i haven't seen you");
});

app.all("*",(req,res) => {
    res.send("ERROR 404 Path not found!");
});

app.listen(PORT, () => {
    console.log("App is listening on port : ",PORT);
});

