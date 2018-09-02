var socket = io();

console.log("ready");
socket.on("stock price update" , function(stockprice){
    console.log("updated");
    $("#stockprice").text( stockprice );
    socket.emit("buy", "no");
    socket.emit("buy");
    socket.emit("buy", null , function (data){
        console.log("call");
    });
});
socket.on("welcome" , function(w){
    console.log("received a welcome !");
    socket.emit("thanks");
});

function buy(){
    socket.emit( "buy" , "toto" , function(d , data){
        console.log("emitted");
    });
    console.log("buy msg emitted");
}