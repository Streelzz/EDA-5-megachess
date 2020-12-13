/*Crea una matriz con el string recibido, esta matriz representa al tablero en su estado actual*/
function crearTablero(board){
    var tablero = new Array(16);
  
    for(var i=0;i<16;i++){
        tablero[i] = new Array(16);
    }
    
    var indice = 0;
  
    for(var i=0;i<16;i++){
      for(var j=0;j<16;j++){
         tablero[i][j] = board.charAt(indice);
         indice++;
      }
    }
    return tablero;
  }

/*Asigna los puntajes a las piezas del tablero*/
function puntaje(pieza,mult){
    var puntos = 0;
        switch(pieza){
            case 'p': puntos = 10*mult;break; 
            case 'P': puntos = 10*mult;break;
            case 'q': puntos = 5*mult;break;
            case 'Q': puntos = 5*mult;break;
            case 'h': puntos = 30*mult;break;
            case 'H': puntos = 30*mult;break;
            case 'b': puntos = 40*mult;break;
            case 'B': puntos = 40*mult;break;
            case 'r': puntos = 60*mult;break;
            case 'R': puntos = 60*mult;break;
            case 'k': puntos = 100*mult;break; 
            case 'K': puntos = 100*mult;break;          
        }
      return puntos;
}
  
module.exports = {
                    crearTablero,
                    puntaje
                  }