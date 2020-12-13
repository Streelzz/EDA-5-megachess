var auth_token="192d8725-66e6-49ae-8530-45e1286738f1";
    var webSocket = new WebSocket('ws://megachess.herokuapp.com/service?authtoken='+auth_token);
    
    webSocket.onerror = function(event) {
      onError(event)
    };

    webSocket.onopen = function(event) {
      onOpen(event)
    };

    webSocket.onmessage = function(e) {
          var msg = JSON.parse(e.data);
          console.log(msg);
          evaluarMensaje(msg)
    };
    
    webSocket.onclose = e =>{
            console.log('Conexion cerrada');
            console.log(e);
            
    }
    
    function onMessage(event) {
      document.getElementById('messages').innerHTML 
        += '<br />' + event.data;
    }

    function onOpen(event) {
      document.getElementById('messages').innerHTML 
        = 'Conectado';
    }

    function onError(event) {
      alert(event.data);
    }
