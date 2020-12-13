const {puntaje} = require('./Tablero_puntajePiezas')

/*Procedimiento que envia al websocket el mejor movimiento posible*/
function mi_turno(msg){
    var board = msg.data.board;
    var color = msg.data.actual_turn;
    var board_id = msg.data.board_id;
    var turn_token = msg.data.turn_token;
    
    var tablero = crearTablero(board);
    
    var jugadasPosibles = new Array();
    var cantPeones = contarPeones16(tablero,color);

    if(cantPeones > 20){
        var mov = estrategiaInicial(tablero,color,cantPeones);
        jug = mejorPuntaje(mov,board_id,turn_token);

        console.log(mov)
        webSocket.send(JSON.stringify(jug));
    }else{
        jugadasPosibles = posiblesMovimientos(color,tablero); 
        var mejorJugada = seleccionarMejorMovimiento(jugadasPosibles); 
        var move = mejorPuntaje(mejorJugada,board_id,turn_token);
        
        console.log(move)
        webSocket.send(JSON.stringify(move));
  }
}

/*Funcion que retorna un array con los mejores movimientos que cada pieza puede realizar*/
function posiblesMovimientos(color,tablero){

    var colorActual = color;
    if(colorActual == "black"){
            var arrayMejoresMovimientosBlack = new Array();        
            
            for(let i = 0 ;i < tablero.length; i++){
                    for(let j = 0 ;j < tablero[0].length; j++){
                            switch(tablero[i][j]) {
                                    case 'p': arrayMejoresMovimientosBlack.push(moveBlackPawn(tablero,i,j));            
                                    break;
                                    case 'r': arrayMejoresMovimientosBlack.push(moveBlackRook(tablero,i,j));  
                                    break;
                                    case 'b': arrayMejoresMovimientosBlack.push(moveBlackBishop(tablero,i,j));  
                                    break;
                                    case 'h': arrayMejoresMovimientosBlack.push(moveBlackHorse(tablero,i,j)); 
                                    break;
                                    case 'k': arrayMejoresMovimientosBlack.push(moveBlackKing(tablero,i,j)); 
                                    break;
                                    case 'q': arrayMejoresMovimientosBlack.push(moveBlackQueen(tablero,i,j));  
                                    break;
                                    default:  break;
                            } 
    
                    } 
            }
            arrayMejoresMovimientosBlack  = removerMoveDefault(arrayMejoresMovimientosBlack);
            return arrayMejoresMovimientosBlack;
    
    }else if(colorActual == "white"){
            var arrayMejoresMovimientosWhite = new Array();
            
            for(let i = 0;i < tablero.length; i++){
                    for(let j = 0;j < tablero[0].length; j++){  
                            switch(tablero[i][j]) {
                                    case 'P': arrayMejoresMovimientosWhite.push(moveWhitePawn(tablero,i,j));           
                                    break;
                                    case 'R': arrayMejoresMovimientosWhite.push(moveWhiteRook(tablero,i,j));
                                    break;
                                    case 'B': arrayMejoresMovimientosWhite.push(moveWhiteBishop(tablero,i,j));
                                    break;
                                    case 'H': arrayMejoresMovimientosWhite.push(moveWhiteHorse(tablero,i,j));
                                    break;
                                    case 'K': arrayMejoresMovimientosWhite.push(moveWhiteKing(tablero,i,j)); 
                                    break;
                                    case 'Q': arrayMejoresMovimientosWhite.push(moveWhiteQueen(tablero,i,j));
                                    break;    
                                    default: break;
                            } 
                    } 
            }  
            arrayMejoresMovimientosWhite = removerMoveDefault(arrayMejoresMovimientosWhite);
            return arrayMejoresMovimientosWhite;
    } 
           /* if(arrayMejoresMovimientos.length == 0){
                    return arrayMejoresMovimientos.push(moveDefault());
            }else{
                    return arrayMejoresMovimientos;
            }*/
           
}
 
/*Funcion que retorna el movimiento con el mayor puntaje*/
function seleccionarMejorMovimiento(movimientosPosibles){

    var arrayPuntajesrep = new Array();
    
    var mejorMov = movimientosPosibles.reduce((prev,current)=>{
        if (prev.puntos > current.puntos){
            return prev;
        } else if (prev.puntos < current.puntos){
            return current;
        } else {
            return Math.random() >= 0.5 ? prev : current; 
        }
    }
    )
    
    for(let i = 0; i < movimientosPosibles.length ; i++){
            if(mejorMov.puntos == movimientosPosibles[i].puntos){
                    arrayPuntajesrep.push(movimientosPosibles[i]);
            }
    }
    
    var cantRep = arrayPuntajesrep.length -1;
    var rndm = Math.round(Math.random()*cantRep);
    
    return arrayPuntajesrep[rndm];
}

/*Funcion que genera un movimiento con su respectivo puntaje */
function movimiento(f_fila, f_col, t_f,t_c,pieza,mult){

    var points = puntaje(pieza,mult);
            var datos = {
                  "from_fila" : f_fila,
                  "from_colum" : f_col,
                  "to_fila" : t_f,
                  "to_colum" : t_c,
                  "puntos": points
                };
    
          return datos;
}

/*Funcion que remueve los movimientos defaults*/
function removerMoveDefault (arr) {
    for(let i = 0;i < arr.length ;++i){
            var p = arr[i].puntos;
           
            if(p == 0){
                    arr.splice(i,1);
                    i--;
            }
    }
    
    return arr;
}

/*Funcion que genera un movimiento default que sirve cuando una pieza no puede realizar ningun movimiento
(Sino el array queda vacio y genera errores)*/
function moveDefault(){
        var datos = {
                "from_fila" : 0,
                "from_colum" : 0,
                "to_fila" : 0,
                "to_colum" : 0,
                "puntos":0
                };

        return datos;
}

/*Funcion que crea el mejor movimiento a enviar por el websocket */
function mejorPuntaje(mJugada,board_id,turn_token){

var move =  {
        "action": "move", 
        "data": {
        "board_id": board_id,
        "turn_token": turn_token,
        "from_row": null,
        "from_col": null,
        "to_row": null,
        "to_col": null
        }
};
    
  move.data.from_row = mJugada.from_fila;
  move.data.from_col = mJugada.from_colum;
  move.data.to_row = mJugada.to_fila
  move.data.to_col = mJugada.to_colum
  return move;
}

module.exports = {
        movimiento,
        seleccionarMejorMovimiento,
        moveDefault
}