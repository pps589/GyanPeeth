const express = require("express")
var app = express()
app.get("/apsi",function(request,response){
response.send("Hello World! I am dPardtha")
})
app.listen(8080, function () {
console.log("Started application on port %d", 8080)
});