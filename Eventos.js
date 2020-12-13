function evaluarMensaje(msg){
    if(msg.event == "ask_challenge"){     
            var board_id = msg.data.board_id
             ask_challenge(board_id);        
    }else if(msg.event == "your_turn"){
              mi_turno(msg);
    }else if(msg.event == "update_user_list"){
              var users_list = msg.data.users_list;
              mostrarUsuarios("oponentes",users_list);     
    }
}

function ask_challenge(board_id){
    accept_challenge(board_id);
}

function accept_challenge(board_id){
    var accept = {
        "action": "accept_challenge", 
        "data": { 
                "board_id":board_id
                }
        }
        webSocket.send(JSON.stringify(accept));
}

function challenge(name){
    var desafiar = {
                    "action":"challenge", 
                    "data": {
                            "username": "",
                            "message": ""
                            }
                    };

    desafiar.data.username = name;
    webSocket.send(JSON.stringify(desafiar));
}

function get_conected_users(){
    var lista_usuarios = {
                          "action": "get_connected_users",
                          "data": {}
                         };

    webSocket.send(JSON.stringify(lista_usuarios));
}

function abort(board_id){
    var  abort = {
                  "action": "abort",
                  "data":{
                            "board_id": ""
                         }
                 }
    abort.data.board_id = board_id;
    webSocket.send(JSON.stringify(abort))
}