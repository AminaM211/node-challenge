const express = require('express');
const logger = require('./middelware/logger');
const e = require('express');
const app = express();
const port = 3000;

let messages = [ 
    "Hello Samplats",
    "Hello Again",
    "Hello Once More"
];

app.use("/messages", logger);
app.use(express.json());

app.get("/messages",  (req, res)=>{
    res.json(messages); 
});

app.get("/messages/:id",  (req, res)=>{ 
    let id = req.params.id;
    if(id >= messages.length){
        res.json({
            "status": "error",
            "message": "This message does not exist"
        });
    }

    else{
        res.json(messages[id]);
    }
});
 

app.post("/messages", (req, res)=>{
    let message = req.body.message;
    messages.push(message);
    res.send("POST /messages");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
