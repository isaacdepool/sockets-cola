// Comando para establecer la conexion
var socket = io();

var seachParams = new URLSearchParams( window.location.search );

var label = $('small');

// Conectado al servidor 
socket.on('connect', function(){
    console.log('conectado al servidor');
});

// Desconectado del servidor
socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});

if( !seachParams.has('escritorio')){

    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = seachParams.get('escritorio');

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function(){

    socket.emit('atenderTicket', {escritorio: escritorio}, function(resp){
    
        var audio = new Audio('audio/new-ticket.mp3');
        audio.play();
        
        if(resp.numero){

            label.text(resp.numero);

        }else{
            label.text(resp);
            alert(resp)
        } 
        
    });

});

