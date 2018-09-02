var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.use(express.static('static'));

app.get("/", function( req , res){
    res.sendFile(__dirname + "/index.html" );
});

http.listen(8000, function(){
    console.log("Listening on 8000");
});

io.on("connection" , function(socket){
    io.emit("welcome");
    io.on("buy", function(data){
        console.log("received a buy");
    });
    io.on("thanks" , function(dat){
        console.log("received a thanks");
    });
    console.log("Socket connection etablished");
});

setInterval( function(){
    var stockprice = Math.floor( Math.random() * 1000 );
    io.emit( "stock price update" , stockprice);
} , 2000 );
