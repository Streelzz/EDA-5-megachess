function estrategiaInicial(tablero,color){
    var colorActual = color;
    if(colorActual == "black"){
        var arrayMejoresMovimientosBlack = new Array();  
        for(let i = 2; i < 11 ; i++){
            for(let j = 0; j < tablero.length ; j++){
                    switch(tablero[i][j]){
                        case 'p': arrayMejoresMovimientosBlack.push(moveBlackPawnInicial(tablero,i,j));break;
                        case 'q': arrayMejoresMovimientosBlack.push(moveBlackQueenInicial(tablero,i,j));break;
                        
                    }
            }  
        }
        arrayMejoresMovimientosBlack  = removerMoveDefault(arrayMejoresMovimientosBlack);
        console.log(arrayMejoresMovimientosBlack);
        var move = seleccionarMejorMovimiento(arrayMejoresMovimientosBlack);
        return move;  
    }else{
        var arrayMejoresMovimientosWhite = new Array();  
        for(let i = 4; i < 14 ; i++){
            for(let j = 0; j < tablero.length ; j++){
                    switch(tablero[i][j]){
                        case 'P': arrayMejoresMovimientosWhite.push(moveWhitePawnInicial(tablero,i,j));break;
                        case 'Q': arrayMejoresMovimientosWhite.push(moveWhiteQueenInicial(tablero,i,j));break;
                    }
            }  
        }
        console.log(arrayMejoresMovimientosWhite);
        arrayMejoresMovimientosWhite = removerMoveDefault(arrayMejoresMovimientosWhite);
        var move = seleccionarMejorMovimiento(arrayMejoresMovimientosWhite);
        return move;  
    }
}

function moveBlackPawnInicial(tablero,fila,col){

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
                                    var mov = movimiento(fila, col,f,c,tablero[f][c],20)     
                                    blackPawnArray.push(mov);
                    }else{
                            var mov = moveDefault();
                            blackPawnArray.push(mov);
                    } 
            }
    
    }

    return seleccionarMejorMovimiento(blackPawnArray);
}

function moveWhitePawnInicial(tablero,fila,col){

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
                            var mov = movimiento(fila,col,f,c,tablero[f][c],20);     
                            whitePawnArray.push(mov);
                    }else{
                    var mov = moveDefault();        
                    whitePawnArray.push(mov);
                    } 
            }
    
    }
    
    return seleccionarMejorMovimiento(whitePawnArray);
    
}

function moveWhiteQueenInicial(tablero,fila,col){

    var pieza = tablero[fila][col];
    var whiteQueenArray = new Array();
    
    const xDir = [-1, 0, +1, +1, -1];
    const yDir = [-1, -1, -1, 0, 0];
    
    for(let dir = 0; dir < 5; dir++){
    
    var f = fila + yDir[dir];
    var c =  col + xDir[dir];
    
            if(c >= 0 && c < 16 && f >=0 && f < 16){
                    if(dir == 1 && fila == 9){
                            if(tablero[f][c].charCodeAt() == 32){
                                    var mov = movimiento(fila,col,f,c,pieza,13.5);         
                                    whiteQueenArray.push(mov);
                            }else if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                                    var mov = movimiento(fila,col,f,c,pieza,14);         
                                    whiteQueenArray.push(mov);
                            }else{
                                var mov = moveDefault();        
                                whiteQueenArray.push(mov);
                        } 
                    }else if(dir == 0 || dir == 2){
                        if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                                var mov = movimiento(fila,col,f,c,tablero[f][c],20);     
                                whiteQueenArray.push(mov);
                        }else{
                                var mov = moveDefault();        
                                whiteQueenArray.push(mov);
                        } 
                    }else if(dir > 2){
                        for(let paso = 1; paso < 16; ++paso){
                                var f = fila + paso*yDir[dir];
                                var c =  col + paso*xDir[dir];
                                        if(c >= 0 && c < 16 && f >=0 && f < 16){
                                                if(tablero[f][c].charCodeAt() > 97 && tablero[f][c].charCodeAt() != 32){
                                                        var mov = movimiento(fila,col,f,c,tablero[f][c],21);     
                                                        whiteQueenArray.push(mov);
                                                }else{
                                                        var mov = moveDefault();        
                                                        whiteQueenArray.push(mov);
                                                } 
                                        }
                        }

                    }else{
                            var mov = moveDefault();        
                            whiteQueenArray.push(mov);
                    } 
            }
    
    }
    
    return seleccionarMejorMovimiento(whiteQueenArray);
    
}

function moveBlackQueenInicial(tablero,fila,col){
    var pieza = tablero[fila][col];
    var blackPawnArray = new Array();
    
    const xDir = [-1, 0, +1, +1, -1];
    const yDir = [+1, +1, +1, 0, 0];
    
    for(let dir = 0; dir < 3; dir++){
    
    var f = fila + yDir[dir];
    var c =  col + xDir[dir];
    
            if(c >= 0 && c < 16 && f >=0 && f < 16){
                    if(dir == 1 && fila == 6){
                            if(tablero[f][c].charCodeAt() == 32){
                                    var mov = movimiento(fila,col,f,c,pieza,13.5);         
                                    blackPawnArray.push(mov);
                            }else if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                                    var mov = movimiento(fila,col,f,c,pieza,14);         
                                    blackPawnArray.push(mov);
                            }else{
                                var mov = moveDefault();        
                                blackPawnArray.push(mov);
                        } 
                    }else if(dir == 0 || dir == 2){
                        if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                                var mov = movimiento(fila,col,f,c,tablero[f][c],20);     
                                blackPawnArray.push(mov);
                        }else{
                                var mov = moveDefault();        
                                blackPawnArray.push(mov);
                        } 
                    }else if(dir > 2){
                        for(let paso = 1; paso < 16; ++paso){
                                var f = fila + paso*yDir[dir];
                                var c =  col + paso*xDir[dir];
                                        if(c >= 0 && c < 16 && f >=0 && f < 16){
                                                if(tablero[f][c].charCodeAt() < 97 && tablero[f][c].charCodeAt() != 32){
                                                        var mov = movimiento(fila,col,f,c,tablero[f][c],21);     
                                                        blackPawnArray.push(mov);
                                                }else{
                                                        var mov = moveDefault();        
                                                        blackPawnArray.push(mov);
                                                } 
                                        }
                        }

                    }else{
                            var mov = moveDefault();        
                            blackPawnArray.push(mov);
                    } 
            }
    
    }

    return seleccionarMejorMovimiento(blackPawnArray);
}

function contarPeones16(tablero, color){
     
    var contador = 0;
  if(color == 'black'){
        for(var i = 2; i < 7; i++){
            for(var j = 0 ; j < 16; j++){
                if(tablero[i][j] == 'p'){
                    contador++;
                }
            }
        }
  }else{
        for(var i = 9; i < 14; i++){
            for(var j = 0; j < 16; j++){
                if(tablero[i][j] == 'P'){
                    contador++;
                }
            }
        }
  }
   
  return contador;
}
