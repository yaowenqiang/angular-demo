//var http = require('http');
//http.createServer(function(req,res){
    //res.writeHead(200,{'content-type:':'text/plain'})
    //res.end('Hello world\n');
//}).listen(1337,'0.0.0.0');
//console.log('Server running on http://127.0.0.1:1337/');

$(document).ready(function(){
    console.log('hello console');
    var currentStep = 0;
    $('#step1').hide();
    $('#step2').hide();
    $('#btnStep1').click(function(){
        $('#step1').show();
        $('#step2').hide();
    currentStep = 1;
    });
    $('#btnStep2').click(function(){
        $('#step1').hide();
        $('#step2').show();
        currentStep = 2;
    });
});
