const express = require("express");

app.get("/", (req,res)=>{
 res.send("CI/CD Pipeline is Working 24/7🚀");
});

app.listen(3000, "0.0.0.0", ()=>{
 console.log("Server running on port 3000");
});
