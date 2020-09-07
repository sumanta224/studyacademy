var express = require("express");
var app = express();
var path=require("path");
var port= process.env.PORT||"40000";
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "./about.html");
});
app.get("/contrtact", (req, res) => {
    res.sendFile(__dirname + "./contract.html");
});
app.get("/notes", (req, res) => {
    res.sendFile(__dirname + "./notes.html");
});
app.get("/videos", (req, res) => {
    res.sendFile(__dirname + "./video.html");
});


app.listen(port, () => {
    console.log("Server listening on port " + port);
});

