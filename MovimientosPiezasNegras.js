/*Funciones para obtener los mejores movimientos de cada pieza de color negro del tablero*/

/*Funcion del peon negro, que recible el tablero actual y la posicion del peon en cuestion y retorna el mejor movimiento posible*/
function moveBlackPawn(tablero,fila,col){

/*Guardo en pieza el caracter del peon negro*/
    var pieza = tablero[fila][col];
/*Array que contendra todos los posibles movimientos de la pieza*/
    var blackPawnArray = new Array();

/*Arrays que contienen las posibles direcciones xy en las que se puede mover el peon negro*/
    const xDir = [-1, 0, +1];
    const yDir = [+1, +1, +1];
    
/*Bucle de 3 ya que el peon solo tiene 3 movimientos, el 4 posible lo calculo con el cuando dir es igual a 1*/
    for(let dir = 0; dir < 3; dir++){
    
/*Las variables f y c, tienen los valores de la fila y columna del posible movimiento que puede realizar el peon negro */
    var f = fila + yDir[dir];
    var c =  col + xDir[dir];
    
/*Se verifica que la fila como la columna sea validas(esten ambos entre 0 y 15 incluidos)*/
            if(c >= 0 && c < 16 && f >=0 && f < 16){                
/*Cuando dir vale 1 el movimiento es el hacia adelante*/
                    if(dir == 1){
/*La idea es que el peon negro corone lo antes posible, por eso a medida que se acerca a la fila 7(donde corona),
el movimiento reciba como parametro un numero que va creciendo para que genere mayor puntaje y sea seleccionado*/
                            if(fila < 3){
                                    if(tablero[f][c].charCodeAt() == 32){
                                    var mov = movimiento(fila,col,f,c,pieza,7);         
                                    blackPawnArray.push(mov);
                                    }
                            }else if(fila == 3){
                                    if(tablero[f][c].charCodeAt() == 32){
                                            var mov = movimiento(fila,col,f,c,pieza,7.5);         
                                            blackPawnArray.push(mov);
                                            var siguiente = f+1;
/*Si estoy en la fila 3 verifico que la fila 5 este vacia en la misma columna que la pieza para poder mover 2 lugares */
                                                    if(tablero[siguiente][c].charCodeAt() == 32 && fila == 3){
                                                            var mov = movimiento(fila,col,siguiente,c,pieza,8);         
                                                            blackPawnArray.push(mov);
                                                    }
                                    }             
                            }else if(fila > 3){
                                    var mov = movimiento(fila,col,f,c,pieza,8.5);         
                                    blackPawnArray.push(mov);
                            }
/*Movimiento hacia adelante a los costados(izq y der)*/
                    }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                                    var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                                    blackPawnArray.push(mov);
/*Si la pieza no puede realizar ningun movimiento guardo un movimiento default en el array */
                    }else{
                            var mov = moveDefault();
                            blackPawnArray.push(mov);
                    } 
            }
    
    }
/*Selecciono el movimiento que me genere el mayor puntaje y lo retorno*/
    return seleccionarMejorMovimiento(blackPawnArray);
}

/*Funcion del caballo negro, que recible el tablero actual y la posicion del caballo en cuestion y retorna el mejor movimiento posible*/
function moveBlackHorse(tablero,fila,col){
        
/*Guardo en pieza el caracter del caballo negro*/
    var pieza = tablero[fila][col];
/*Array que contendra todos los posibles movimientos de la pieza*/
    var blackHorseArray = new Array(); 
/*Arrays que contienen las posibles direcciones xy en las que se puede mover el caballo negro*/
    const xDir = [-1, -2, -2, -1, +1, +2, +2, +1];
    const yDir = [-2, -1, +1, +2, +2, +1, -1, -2];

/*Bucle de 8 ya que el caballo solo tiene 8 movimientos posibles*/   
    for(let dir = 0; dir < 8; ++dir){
/*Las variables f y c, tienen los valores de la fila y columna del posible movimiento que puede realizar el caballo negro */  
            var f = fila + yDir[dir];
            var c =  col + xDir[dir];

/*Se verifica que la fila como la columna sea validas(esten ambos entre 0 y 15 incluidos)*/           
            if(c >= 0 && c < 16 && f >= 0 && f < 16){ 
                /*Si se puede realizar el movimiento sin matar(vacio)*/
                            if(tablero[f][c].charCodeAt() == 32){
                                    var mov = movimiento(fila, col,f,c,pieza,1) 
                                    blackHorseArray.push(mov);
                /*Si se puede realizar el movimiento y mata*/                                                            
                            }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                                    var mov =movimiento(fila, col,f,c,tablero[f][c],10)         
                                    blackHorseArray.push(mov);                               
                            }else{
                                    break;
                            }
              }
    }

/*Si la pieza no puede realizar ningun movimiento retorna un movimiento default, sino retorna el que genera mayor puntaje*/
            if(blackHorseArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(blackHorseArray);
            }
}

/*Funcion del rey negro, que recible el tablero actual y la posicion del rey en cuestion y retorna el mejor movimiento posible*/
function moveBlackKing(tablero,fila,col){

/*Guardo en pieza el caracter del rey negro*/
    var pieza = tablero[fila][col];
/*Array que contendra todos los posibles movimientos de la pieza*/
    var blackKingArray = new Array();
/*Arrays que contienen las posibles direcciones xy en las que se puede mover el rey negro*/   
    const xDir = [-1, -1, -1, 0, +1, +1, +1, 0];
    const yDir = [-1, 0, +1, +1, +1, 0, -1, -1];
 
/*Bucle de 8 ya que el rey solo tiene 8 movimientos posibles*/     
    for(let dir = 0; dir < 8; dir++){
/*Las variables f y c, tienen los valores de la fila y columna del posible movimiento que puede realizar el rey negro */   
              var f = fila + yDir[dir];
              var c =  col + xDir[dir];

/*Se verifica que la fila como la columna sea validas(esten ambos entre 0 y 15 incluidos)*/                
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                /*Si se puede realizar el movimiento sin matar(vacio)*/
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)         
                              blackKingArray.push(mov);; 
                /*Si se puede realizar el movimiento y mata*/                        
                    }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              blackKingArray.push(mov);
                    }else{
                /*Si encuentra una pieza aliada corta*/
                            break;
                    }  
              }
        
    }
/*Si la pieza no puede realizar ningun movimiento retorna un movimiento default, sino retorna el que genera mayor puntaje*/   
            if(blackKingArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(blackKingArray);
            }
}   

/*Funcion del alfil negro, que recible el tablero actual y la posicion del alfil en cuestion y retorna el mejor movimiento posible*/
function moveBlackBishop(tablero,fila,col){

/*Guardo en pieza el caracter del alfil negro*/
    var pieza = tablero[fila][col]; 
/*Array que contendra todos los posibles movimientos de la pieza*/
    var blackBishopArray = new Array();
/*Arrays que contienen las posibles direcciones xy en las que se puede mover el alfil negro*/   
    const xDir = [+1, +1, -1, -1];
    const yDir = [+1, -1, -1, +1];

/*Bucle de 4 ya que el alfil solo tiene 4 direcciones posibles*/    
    for(let dir = 0; dir < 4; ++dir){
/*Bucle de 1 a 16 ya que el alfil por cada direccion tiene como maximo 15 movimientos, sin contar la posicion inicial de la pieza*/  
        for(let paso =1; paso < 16; ++paso){
/*Las variables f y c, tienen los valores de la fila y columna del posible movimiento que puede realizar el rey negro */               
              var f = fila + paso*yDir[dir];
              var c =  col + paso*xDir[dir];

/*Se verifica que la fila como la columna sea validas(esten ambos entre 0 y 15 incluidos)*/                
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                /*Si se puede realizar el movimiento sin matar(vacio)*/
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)         
                              blackBishopArray.push(mov);
                /*Si se puede realizar el movimiento y mata*/            
                    }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              blackBishopArray.push(mov);
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
            if(blackBishopArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(blackBishopArray);
            }
}

/*Funcion de la torre negra, que recible el tablero actual y la posicion de la torre en cuestion y retorna el mejor movimiento posible*/
function moveBlackRook(tablero,fila,col){

/*Guardo en pieza el caracter de la torre negra*/
    var pieza = tablero[fila][col];
/*Array que contendra todos los posibles movimientos de la pieza*/
    var blackRookArray = new Array();
/*Arrays que contienen las posibles direcciones xy en las que se puede mover la torre negra*/  
    const xDir = [+1, -1, 0, 0];
    const yDir = [ 0, 0, +1, -1];

/*Bucle de 4 ya que la torre solo tiene 4 direcciones posibles*/      
    for(let dir = 0; dir < 4; ++dir){
/*Bucle de 1 a 16 ya que el alfil por cada direccion tiene como maximo 15 movimientos, sin contar la posicion inicial de la pieza*/            
        for(let paso = 1; paso < 16; ++paso){
/*Las variables f y c, tienen los valores de la fila y columna del posible movimiento que puede realizar la torre negra*/ 
              var f = fila + paso*yDir[dir];
              var c =  col + paso*xDir[dir];

/*Se verifica que la fila como la columna sea validas(esten ambos entre 0 y 15 incluidos)*/                
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                /*Si se puede realizar el movimiento sin matar(vacio)*/
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)      
                              blackRookArray.push(mov);
                /*Si se puede realizar el movimiento y mata*/  
                    }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              blackRookArray.push(mov);
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
            if(blackRookArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(blackRookArray); 
            }
}

/*Funcion de la reina negra, que recible el tablero actual y la posicion de la reina en cuestion y retorna el mejor movimiento posible*/
function moveBlackQueen(tablero,fila,col){
        
/*Guardo en pieza el caracter de la reina negra*/
    var pieza = tablero[fila][col];
 /*Array que contendra todos los posibles movimientos de la pieza*/
    var blackQueenArray = new Array();
/*Arrays que contienen las posibles direcciones xy en las que se puede mover la reina negra*/ 
    const xDir = [+1, -1, 0, 0, +1, +1, -1, -1];
    const yDir = [ 0, 0, +1, -1, +1, -1, -1, +1];

/*Bucle de 8 ya que la torre solo tiene 8 direcciones posibles*/   
    for(let dir = 0; dir < 8; dir++){
/*Bucle de 1 a 16 ya que la reina por cada direccion tiene como maximo 15 movimientos, sin contar la posicion inicial de la pieza*/  
        for(let paso = 1; paso < 16; ++paso){
/*Las variables f y c, tienen los valores de la fila y columna del posible movimiento que puede realizar la reina negra*/ 
              var f = fila + paso*yDir[dir];
              var c =  col + paso*xDir[dir];

/*Se verifica que la fila como la columna sea validas(esten ambos entre 0 y 15 incluidos)*/              
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                /*Si se puede realizar el movimiento sin matar(vacio)*/
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)         
                              blackQueenArray.push(mov); 
                /*Si se puede realizar el movimiento y mata*/  
                    }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              blackQueenArray.push(mov);
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
            if(blackQueenArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(blackQueenArray);
            }
}   