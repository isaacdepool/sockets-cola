// Comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

// Conectado al servidor 
socket.on('connect', function(){
    console.log('conectado al servidor');
});

// Desconectado del servidor
socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', (resp) =>{

    label.text(resp.actual);
});

$('button').on('click', function(){

    socket.emit('siguienteTicket', null, function(siguienteTicket){

        label.text(siguienteTicket);

    });

});

