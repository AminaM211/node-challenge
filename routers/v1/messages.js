const express = require('express');
const router = express.Router();

let messages = [ 
    "Hello Amina",
    "Hello Again",
    "How are you?" ,
];


router.get("/",  (req, res)=>{
    res.json({
        "status": "success",
        "data": messages
    }); 
});

router.get("/:id",  (req, res)=>{ 
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
 

router.post("/", (req, res)=>{
    let message = req.body.message;
    messages.push(message);
    res.send("POST /messages");
});

module.exports = router;
