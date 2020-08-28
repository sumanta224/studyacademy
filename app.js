var express = require("express");
var app = express();
var path=require("path");
var port= process.env.PORT||"40000";
app.use(express.static(path.join(__dirname,"public")));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/ABOUT", (req, res) => {
    res.sendFile(__dirname + "/#");
});
app.get("/CUNTRACT", (req, res) => {
    res.sendFile(__dirname + "/#");
});
app.get("/NOTES", (req, res) => {
    res.sendFile(__dirname + "/#");
});
app.get("/VIDEOS", (req, res) => {
    res.sendFile(__dirname + "/video.html");
});


app.listen(port, () => {
    console.log("Server listening on port " + port);
});

