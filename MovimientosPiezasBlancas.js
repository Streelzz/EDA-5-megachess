function moveWhitePawn(tablero,fila,col){

    var pieza = tablero[fila][col];
    var whitePawnArray = new Array();
    
    const xDir = [-1, 0, +1];
    const yDir = [-1, -1, -1];
    
    for(let dir = 0; dir < 3; dir++){
    
    var f = fila + yDir[dir];
    var c =  col + xDir[dir];
    
            if(c >= 0 && c < 16 && f >=0 && f < 16){
                    if(dir == 1){
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
                                                    if(tablero[siguiente][c].charCodeAt() == 32 && fila == 12){
                                                            var mov = movimiento(fila,col,siguiente,c,pieza,8);         
                                                            whitePawnArray.push(mov);
                                                    }
                                    }             
                            }else if(fila < 12){
                                    var mov = movimiento(fila,col,f,c,pieza,8.5);         
                                    whitePawnArray.push(mov);
                            }
                    }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                            var mov = movimiento(fila,col,f,c,tablero[f][c],10);     
                            whitePawnArray.push(mov);
                    }else{
                    var mov = moveDefault();        
                    whitePawnArray.push(mov);
                    } 
            }
    
    }
    
    return seleccionarMejorMovimiento(whitePawnArray);
    
}

function moveWhiteHorse(tablero,fila,col){

    var pieza = tablero[fila][col];
    var whiteHorseArray = new Array();
    var uno = 1;
    
    const xDir = [-1, -2, -2, -1, +1, +2, +2, +1];
    const yDir = [-2, -1, +1, +2, +2, +1, -1, -2];
    
    for(let dir = 0; dir < 8; ++dir){
            var f = fila + yDir[dir];
            var c =  col + xDir[dir];
     
            if(c >= 0 && c < 16 && f >= 0 && f < 16){
                            if(tablero[f][c].charCodeAt() == 32){
                                    var mov = movimiento(fila, col,f,c,pieza,uno) 
                                    whiteHorseArray.push(mov);                                                            
                            }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                                    var mov =movimiento(fila, col,f,c,tablero[f][c],10)         
                                    whiteHorseArray.push(mov);                              
                            }else{
                                    break;
                            }
              }
    }
            if(whiteHorseArray.length == 0){
                            return moveDefault();
            }else{
                            return seleccionarMejorMovimiento(whiteHorseArray);
            }
}
    
function moveWhiteKing(tablero,fila,col){

    var pieza = tablero[fila][col];
    const xDir = [-1, -1, -1, 0, +1, +1, +1, 0];
    const yDir = [-1, 0, +1, +1, +1, 0, -1, -1];
    var whiteKingArray = new Array();
    
    for(let dir = 0; dir < 8; dir++){
    
              var f = fila + yDir[dir];
              var c =  col + xDir[dir];
              
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)         
                              whiteKingArray.push(mov);                    
                    }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              whiteKingArray.push(mov);
                    }else{
                            break;
                    }  
              }
        
    }
    
            if(whiteKingArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(whiteKingArray);
            }
}  

function moveWhiteBishop(tablero,fila,col){

    var pieza = tablero[fila][col];
    const xDir = [+1, +1, -1, -1];
    const yDir = [+1, -1, -1, +1];
    var whiteBishopArray = new Array();
    
    for(let dir = 0; dir < 4; ++dir){
        for(let paso =1; paso < 16; ++paso){
              var f = fila + paso*yDir[dir];
              var c =  col + paso*xDir[dir];
              
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)         
                              whiteBishopArray.push(mov);
                    }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              whiteBishopArray.push(mov);
                              break;
                    }else{
                            break;
                    }  
              }else{                
                             break;
              }
        }
    }
            if(whiteBishopArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(whiteBishopArray);
            } 
}
    
function moveWhiteRook(tablero,fila,col){

    var pieza = tablero[fila][col];
    const xDir = [+1, -1, 0, 0];
    const yDir = [ 0, 0, +1, -1];
    var whiteRookArray = new Array();
    
    for(let dir = 0; dir < 4; ++dir){
        for(let paso =1; paso <16; ++paso){
              var f = fila + paso*yDir[dir];
              var c =  col + paso*xDir[dir];
              
              if(c >= 0 && c < 16 && f >=0 && f < 16){
                    if(tablero[f][c].charCodeAt() == 32){
                              var mov = movimiento(fila, col,f,c,pieza,1)         
                              whiteRookArray.push(mov);
                    }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                              var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                              whiteRookArray.push(mov);
                              break;
                    }else{
                            break;
                    }  
              }else{                
                             break;
              }
        }
    }
            if(whiteRookArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(whiteRookArray);
            } 
}
    
function moveWhiteQueen(tablero,fila,col){

        var pieza = tablero[fila][col];
        const xDir = [+1, -1, 0, 0, +1, +1, -1, -1];
        const yDir = [ 0, 0, +1, -1, +1, -1, -1, +1];
        var whiteQueenArray = new Array();
        
        for(let dir = 0; dir < 8; dir++){
            for(let paso = 1; paso < 16; ++paso){
                  var f = fila + paso*yDir[dir];
                  var c =  col + paso*xDir[dir];
                  
                  if(c >= 0 && c < 16 && f >=0 && f < 16){
                        if(tablero[f][c].charCodeAt() == 32){
                                  var mov = movimiento(fila, col,f,c,pieza,1)         
                                  whiteQueenArray.push(mov);                          
                        }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                                  var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                                  whiteQueenArray.push(mov);
                                  break;
                        }else{
                                break;
                        }  
                  }else{                
                                break;
                  }
            }
        }
        
                if(whiteQueenArray.length == 0){
                        return moveDefault();
                }else{
                        return seleccionarMejorMovimiento(whiteQueenArray);
                }
        
}

/*function moveWhiteQueen(tablero,fila,col){

    var pieza = tablero[fila][col];
    const xDir = [+1, -1, 0, 0, +1, +1, -1, -1];
    const yDir = [ 0, 0, +1, -1, +1, -1, -1, +1];
    var whiteQueenArray = new Array();
    
    if(fila == 8  && contarPeones16(tablero, "white") > 16){    
            var mov = movimiento(fila, col,fila-1,col,pieza,13)         
            whiteQueenArray.push(mov);    
    }else{
        for(let dir = 0; dir < 8; dir++){
            for(let paso = 1; paso < 16; ++paso){
                var f = fila + paso*yDir[dir];
                var c =  col + paso*xDir[dir];
                
                if(c >= 0 && c < 16 && f >=0 && f < 16){
                        if(tablero[f][c].charCodeAt() == 32){
                                var mov = movimiento(fila, col,f,c,pieza,1)         
                                whiteQueenArray.push(mov);                          
                        }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                                var mov = movimiento(fila, col,f,c,tablero[f][c],10)     
                                whiteQueenArray.push(mov);
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
            if(whiteQueenArray.length == 0){
                    return moveDefault();
            }else{
                    return seleccionarMejorMovimiento(whiteQueenArray);
            }
    
}*/
    

module.exports = {
                    moveWhitePawn,
                    moveWhiteHorse,
                    moveWhiteKing,
                    moveWhiteBishop,
                    moveWhiteRook,
                    moveWhiteQueen
                  }
        