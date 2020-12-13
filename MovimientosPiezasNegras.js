function moveBlackPawn(tablero,fila,col){

    var pieza = tablero[fila][col];
    var blackPawnArray = new Array();
    
    const xDir = [-1, 0, +1];
    const yDir = [+1, +1, +1];
    
    for(let dir = 0; dir < 3; dir++){
    
    var f = fila + yDir[dir];
    var c =  col + xDir[dir];
    
            if(c >= 0 && c < 16 && f >=0 && f < 16){
                    if(dir == 1){
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
                                                    if(tablero[siguiente][c].charCodeAt() == 32 && fila == 3){
                                                            var mov = movimiento(fila,col,siguiente,c,pieza,8);         
                                                            blackPawnArray.push(mov);
                                                    }
                                    }             
                            }else if(fila > 3){
                                    var mov = movimiento(fila,col,f,c,pieza,8.5);         
                                    blackPawnArray.push(mov);
                            }
                    }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                                    var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                                    blackPawnArray.push(mov);
                    }else{
                            var mov = moveDefault();
                            blackPawnArray.push(mov);
                    } 
            }
    
    }

    return seleccionarMejorMovimiento(blackPawnArray);
}

function moveBlackHorse(tablero,fila,col){

    var pieza = tablero[fila][col];
    var blackHorseArray = new Array();
    var uno = 1;
    
    const xDir = [-1, -2, -2, -1, +1, +2, +2, +1];
    const yDir = [-2, -1, +1, +2, +2, +1, -1, -2];
    
    for(let dir = 0; dir < 8; ++dir){
            var f = fila + yDir[dir];
            var c =  col + xDir[dir];
     
            if(c >= 0 && c < 16 && f >= 0 && f < 16){
                            if(tablero[f][c].charCodeAt() == 32){
                                    var mov = movimiento(fila, col,f,c,pieza,uno) 
                                    blackHorseArray.push(mov);                                                            
                            }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                                    var mov =movimiento(fila, col,f,c,tablero[f][c],10)         
                                    blackHorseArray.push(mov);                               
                            }else{
                                    break;
                            }
              }
    }
            if(blackHorseArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(blackHorseArray);
            }
}
    
function moveBlackKing(tablero,fila,col){

    var pieza = tablero[fila][col];
    const xDir = [-1, -1, -1, 0, +1, +1, +1, 0];
    const yDir = [-1, 0, +1, +1, +1, 0, -1, -1];
    var blackKingArray = new Array();
    
    for(let dir = 0; dir < 8; dir++){
    
              var f = fila + yDir[dir];
              var c =  col + xDir[dir];
              
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)         
                              blackKingArray.push(mov);;                       
                    }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              blackKingArray.push(mov);
                    }else{
                            break;
                    }  
              }
        
    }
    
            if(blackKingArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(blackKingArray);
            }
}    

function moveBlackBishop(tablero,fila,col){

    var pieza = tablero[fila][col];
    const xDir = [+1, +1, -1, -1];
    const yDir = [+1, -1, -1, +1];
    var blackBishopArray = new Array();
    
    for(let dir = 0; dir < 4; ++dir){
        for(let paso =1; paso < 16; ++paso){
              var f = fila + paso*yDir[dir];
              var c =  col + paso*xDir[dir];
              
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)         
                              blackBishopArray.push(mov);
                    }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              blackBishopArray.push(mov);
                              break;
                    }else{
                            break;
                    }  
              }else{                
                    break;
              }
        }
    }
            if(blackBishopArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(blackBishopArray);
            }
}

function moveBlackRook(tablero,fila,col){

    var pieza = tablero[fila][col];
    const xDir = [+1, -1, 0, 0];
    const yDir = [ 0, 0, +1, -1];
    var blackRookArray = new Array();
    
    for(let dir = 0; dir < 4; ++dir){
        for(let paso = 1; paso < 16; ++paso){
              var f = fila + paso*yDir[dir];
              var c =  col + paso*xDir[dir];
              
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)      
                              blackRookArray.push(mov);
                    }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              blackRookArray.push(mov);
                              break;
                    }else{
                            break;
                    }  
              }else{                
                             break;
              }
        }
    }
    
            if(blackRookArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(blackRookArray); 
            }
}

function moveBlackQueen(tablero,fila,col){

    var pieza = tablero[fila][col];
    const xDir = [+1, -1, 0, 0, +1, +1, -1, -1];
    const yDir = [ 0, 0, +1, -1, +1, -1, -1, +1];
    var blackQueenArray = new Array();
    
    for(let dir = 0; dir < 8; dir++){
        for(let paso = 1; paso < 16; ++paso){
              var f = fila + paso*yDir[dir];
              var c =  col + paso*xDir[dir];
              
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)         
                              blackQueenArray.push(mov);  
                    }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              blackQueenArray.push(mov);
                              break;
                    }else{
                            break;
                    }  
              }else{                
                             break;
              }
        }
    }
            if(blackQueenArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(blackQueenArray);
            }
}
    
/*function moveBlackQueen(tablero,fila,col){

    var pieza = tablero[fila][col];
    const xDir = [+1, -1, 0, 0, +1, +1, -1, -1];
    const yDir = [ 0, 0, +1, -1, +1, -1, -1, +1];
    var blackQueenArray = new Array();
 
if(fila == 7 && contarPeones16(tablero, "black") > 16){
        var mov = movimiento(fila,col,fila+1,col,pieza,13)         
        blackQueenArray.push(mov);    
}else{
    for(let dir = 0; dir < 8; dir++){
        for(let paso = 1; paso < 16; ++paso){
              var f = fila + paso*yDir[dir];
              var c =  col + paso*xDir[dir];
              
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)         
                              blackQueenArray.push(mov);  
                    }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              blackQueenArray.push(mov);
                              break;
                    }else{
                            break;
                    }  
              }else{                
                             break;
              }
        }
    }
            
}

if(blackQueenArray.length == 0){
    return moveDefault();
}else{
    return seleccionarMejorMovimiento(blackQueenArray);
}
}*/