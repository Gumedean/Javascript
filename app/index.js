const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Get the request to homepage");
});

app.listen(3000);