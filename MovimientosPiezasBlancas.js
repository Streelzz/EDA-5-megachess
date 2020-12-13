var {movimiento, seleccionarMejorMovimiento, moveDefault} = require('./mi_turno')
/*Funciones para obtener los mejores movimientos de cada pieza de color blanco del tablero*/

/*Funcion del peon blanco, que recible el tablero actual y la posicion del peon en cuestion y retorna el mejor movimiento posible*/
function moveWhitePawn(tablero,fila,col){

/*Guardo en pieza el caracter del peon blanco*/
    var pieza = tablero[fila][col];
/*Array que contendra todos los posibles movimientos de la pieza*/
    var whitePawnArray = new Array();

/*Arrays que contienen las posibles direcciones xy en las que se puede mover el peon blanco*/
    const xDir = [-1, 0, +1];
    const yDir = [-1, -1, -1];

/*Bucle de 3 ya que el peon solo tiene 3 movimientos, el 4 posible lo calculo con el cuando dir es igual a 1*/  
    for(let dir = 0; dir < 3; dir++){
 /*Las variables f y c, tienen los valores de la fila y columna del posible movimiento que puede realizar el peon blanco */  
    var f = fila + yDir[dir];
    var c =  col + xDir[dir];

/*Se verifica que la fila como la columna sea validas(esten ambos entre 0 y 15 incluidos)*/   
            if(c >= 0 && c < 16 && f >=0 && f < 16){
/*Cuando dir vale 1 el movimiento es el hacia adelante*/
                    if(dir == 1){
/*La idea es que el peon blanco corone lo antes posible, por eso a medida que se acerca a la fila 7(donde corona),
el movimiento reciba como parametro un numero que va creciendo para que genere mayor puntaje y sea seleccionado*/
                            if(fila > 12){
                                    if(tablero[f][c].charCodeAt() == 32){
                                    var mov = movimiento(fila,col,f,c,pieza,7);         
                                    whitePawnArray.push(mov);
                                    }
                            }else if(fila == 12){
                                    if(tablero[f][c].charCodeAt() == 32){
                                            var mov = movimiento(fila,col,f,c,pieza,7.5);         
                                            whitePawnArray.push(mov);
                                            var siguiente = f-1;
/*Si estoy en la fila 12 verifico que la fila 10 este vacia en la misma columna que la pieza para poder mover 2 lugares */                              
                                                    if(tablero[siguiente][c].charCodeAt() == 32 && fila == 12){
                                                            var mov = movimiento(fila,col,siguiente,c,pieza,8);         
                                                            whitePawnArray.push(mov);
                                                    }
                                    }             
                            }else if(fila < 12){
                                    var mov = movimiento(fila,col,f,c,pieza,8.5);         
                                    whitePawnArray.push(mov);
                            }
/*Movimiento hacia adelante a los costados(izq y der)*/
                    }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                            var mov = movimiento(fila,col,f,c,tablero[f][c],10);     
                            whitePawnArray.push(mov);
/*Si la pieza no puede realizar ningun movimiento guardo un movimiento default en el array */
                    }else{
                    var mov = moveDefault();        
                    whitePawnArray.push(mov);
                    } 
            }
    
    }
/*Selecciono el movimiento que me genere el mayor puntaje y lo retorno*/
    return seleccionarMejorMovimiento(whitePawnArray);
    
}

/*Funcion del caballo blanco, que recible el tablero actual y la posicion del caballo en cuestion y retorna el mejor movimiento posible*/
function moveWhiteHorse(tablero,fila,col){

/*Guardo en pieza el caracter del caballo blanco*/
    var pieza = tablero[fila][col];
/*Array que contendra todos los posibles movimientos de la pieza*/
    var whiteHorseArray = new Array();
/*Arrays que contienen las posibles direcciones xy en las que se puede mover el caballo blanco*/  
    const xDir = [-1, -2, -2, -1, +1, +2, +2, +1];
    const yDir = [-2, -1, +1, +2, +2, +1, -1, -2];

/*Bucle de 8 ya que el caballo solo tiene 8 movimientos posibles*/   
    for(let dir = 0; dir < 8; ++dir){
/*Las variables f y c, tienen los valores de la fila y columna del posible movimiento que puede realizar el rey blanco */  
            var f = fila + yDir[dir];
            var c =  col + xDir[dir];
/*Se verifica que la fila como la columna sea validas(esten ambos entre 0 y 15 incluidos)*/     
            if(c >= 0 && c < 16 && f >= 0 && f < 16){
                /*Si se puede realizar el movimiento sin matar(vacio)*/
                            if(tablero[f][c].charCodeAt() == 32){
                                    var mov = movimiento(fila, col,f,c,pieza,1) 
                                    whiteHorseArray.push(mov);
                /*Si se puede realizar el movimiento y mata*/                                                             
                            }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                                    var mov =movimiento(fila, col,f,c,tablero[f][c],10)         
                                    whiteHorseArray.push(mov);                              
                            }else{
                                    break;
                            }
              }
    }

/*Si la pieza no puede realizar ningun movimiento retorna un movimiento default, sino retorna el que genera mayor puntaje*/
            if(whiteHorseArray.length == 0){
                            return moveDefault();
            }else{
                            return seleccionarMejorMovimiento(whiteHorseArray);
            }
}
 
/*Funcion del rey blanco, que recible el tablero actual y la posicion del rey en cuestion y retorna el mejor movimiento posible*/
function moveWhiteKing(tablero,fila,col){

/*Guardo en pieza el caracter del rey blanco*/
    var pieza = tablero[fila][col];
/*Array que contendra todos los posibles movimientos de la pieza*/
    var whiteKingArray = new Array();
/*Arrays que contienen las posibles direcciones xy en las que se puede mover el rey blanco*/
    const xDir = [-1, -1, -1, 0, +1, +1, +1, 0];
    const yDir = [-1, 0, +1, +1, +1, 0, -1, -1];
   
/*Bucle de 8 ya que el rey solo tiene 8 movimientos posibles*/      
    for(let dir = 0; dir < 8; dir++){
/*Las variables f y c, tienen los valores de la fila y columna del posible movimiento que puede realizar el rey blanco */  
              var f = fila + yDir[dir];
              var c =  col + xDir[dir];

/*Se verifica que la fila como la columna sea validas(esten ambos entre 0 y 15 incluidos)*/      
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                /*Si se puede realizar el movimiento sin matar(vacio)*/
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)         
                              whiteKingArray.push(mov);
                /*Si se puede realizar el movimiento y mata*/                            
                    }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              whiteKingArray.push(mov);
                    }else{
                /*Si encuentra una pieza aliada corta*/
                            break;
                    }  
              }
        
    }

/*Si la pieza no puede realizar ningun movimiento retorna un movimiento default, sino retorna el que genera mayor puntaje*/
            if(whiteKingArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(whiteKingArray);
            }
}

/*Funcion del alfil blanco, que recible el tablero actual y la posicion del alfil en cuestion y retorna el mejor movimiento posible*/
function moveWhiteBishop(tablero,fila,col){

/*Guardo en pieza el caracter del alfil blanco*/
    var pieza = tablero[fila][col];
/*Array que contendra todos los posibles movimientos de la pieza*/
    var whiteBishopArray = new Array();
/*Arrays que contienen las posibles direcciones xy en las que se puede mover el alfil blanco*/    
    const xDir = [+1, +1, -1, -1];
    const yDir = [+1, -1, -1, +1];
   
/*Bucle de 4 ya que el alfil solo tiene 4 direcciones posibles*/ 
    for(let dir = 0; dir < 4; ++dir){
/*Bucle de 1 a 16 ya que el alfil por cada direccion tiene como maximo 15 movimientos, sin contar la posicion inicial de la pieza*/
        for(let paso =1; paso < 16; ++paso){
/*Las variables f y c, tienen los valores de la fila y columna del posible movimiento que puede realizar el rey blanco*/
              var f = fila + paso*yDir[dir];
              var c =  col + paso*xDir[dir];
              
/*Se verifica que la fila como la columna sea validas(esten ambos entre 0 y 15 incluidos)*/  
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                /*Si se puede realizar el movimiento sin matar(vacio)*/
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)         
                              whiteBishopArray.push(mov);
                /*Si se puede realizar el movimiento y mata*/   
                    }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              whiteBishopArray.push(mov);
                /*Se corta el bucle despues de encontrar una pieza que puede matar*/
                              break;
                    }else{
                /*Si encuentra una pieza aliada corta tambien*/
                            break;
                    }  
              }else{    
                /*Si se sale del rango tambien corta */            
                             break;
              }
        }
    }

/*Si la pieza no puede realizar ningun movimiento retorna un movimiento default, sino retorna el que genera mayor puntaje*/
            if(whiteBishopArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(whiteBishopArray);
            } 
}

/*Funcion de la torre blanca, que recible el tablero actual y la posicion de la torre en cuestion y retorna el mejor movimiento posible*/
function moveWhiteRook(tablero,fila,col){

/*Guardo en pieza el caracter de la torre blanca*/
    var pieza = tablero[fila][col];
/*Array que contendra todos los posibles movimientos de la pieza*/
    var whiteRookArray = new Array();
/*Arrays que contienen las posibles direcciones xy en las que se puede mover la torre blanca*/  
    const xDir = [+1, -1, 0, 0];
    const yDir = [ 0, 0, +1, -1];
  
/*Bucle de 4 ya que la torre solo tiene 4 direcciones posibles*/ 
    for(let dir = 0; dir < 4; ++dir){
/*Bucle de 1 a 16 ya que el alfil por cada direccion tiene como maximo 15 movimientos, sin contar la posicion inicial de la pieza*/
        for(let paso =1; paso <16; ++paso){
/*Las variables f y c, tienen los valores de la fila y columna del posible movimiento que puede realizar la torre blanca*/ 
              var f = fila + paso*yDir[dir];
              var c =  col + paso*xDir[dir];

/*Se verifica que la fila como la columna sea validas(esten ambos entre 0 y 15 incluidos)*/
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                /*Si se puede realizar el movimiento sin matar(vacio)*/
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)         
                              whiteRookArray.push(mov);
                /*Si se puede realizar el movimiento y mata*/  
                    }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              whiteRookArray.push(mov);
                /*Se corta el bucle despues de encontrar una pieza que puede matar*/
                              break;
                    }else{
                /*Si encuentra una pieza aliada corta tambien*/
                            break;
                    }  
              }else{
                /*Si se sale del rango tambien corta */                  
                             break;
              }
        }
    }

/*Si la pieza no puede realizar ningun movimiento retorna un movimiento default, sino retorna el que genera mayor puntaje*/
            if(whiteRookArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(whiteRookArray);
            } 
}
  
/*Funcion de la reina blanca, que recible el tablero actual y la posicion de la reina en cuestion y retorna el mejor movimiento posible*/
function moveWhiteQueen(tablero,fila,col){

/*Guardo en pieza el caracter de la reina blanca*/
        var pieza = tablero[fila][col];
/*Array que contendra todos los posibles movimientos de la pieza*/
        var whiteQueenArray = new Array();
/*Arrays que contienen las posibles direcciones xy en las que se puede mover la reina blanca*/ 
        const xDir = [+1, -1, 0, 0, +1, +1, -1, -1];
        const yDir = [ 0, 0, +1, -1, +1, -1, -1, +1];
        
/*Bucle de 8 ya que la torre solo tiene 8 direcciones posibles*/           
        for(let dir = 0; dir < 8; dir++){
/*Bucle de 1 a 16 ya que la reina por cada direccion tiene como maximo 15 movimientos, sin contar la posicion inicial de la pieza*/ 
            for(let paso = 1; paso < 16; ++paso){
/*Las variables f y c, tienen los valores de la fila y columna del posible movimiento que puede realizar la reina blanca*/ 
                  var f = fila + paso*yDir[dir];
                  var c =  col + paso*xDir[dir];

/*Se verifica que la fila como la columna sea validas(esten ambos entre 0 y 15 incluidos)*/                 
                  if(c >= 0 && c < 16 && f >=0 && f < 16){
                /*Si se puede realizar el movimiento sin matar(vacio)*/
                        if(tablero[f][c].charCodeAt() == 32){
                                  var mov = movimiento(fila, col,f,c,pieza,1)         
                                  whiteQueenArray.push(mov);
                /*Si se puede realizar el movimiento y mata*/                            
                        }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                                  var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                                  whiteQueenArray.push(mov);
                /*Se corta el bucle despues de encontrar una pieza que puede matar*/
                                  break;
                        }else{
                /*Si encuentra una pieza aliada corta tambien*/
                                break;
                        }  
                  }else{        
                /*Si se sale del rango tambien corta */         
                                break;
                  }
            }
        }

/*Si la pieza no puede realizar ningun movimiento retorna un movimiento default, sino retorna el que genera mayor puntaje*/
                if(whiteQueenArray.length == 0){
                        return moveDefault();
                }else{
                        return seleccionarMejorMovimiento(whiteQueenArray);
                }
        
}

module.exports = {
                    moveWhitePawn,
                    moveWhiteHorse,
                    moveWhiteKing,
                    moveWhiteBishop,
                    moveWhiteRook,
                    moveWhiteQueen
                  }
        