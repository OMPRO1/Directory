const express = require('express');
const app = express();
const PORT = 4000;

app.get("/api",(req,res) => {
    res.send("Hello how are it's been long time i haven't seen you");
});

app.listen(PORT, () => {
    console.log("App is listening on port : ",PORT);
});