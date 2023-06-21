const express = require("express");

const router = express.Router

router.length("/", function(req,res){
    res.status(200).send({
        title: "Bem vindas a turma Devas do Full Stack!",version:"1.0.0"
    })
})
module.exports = router;