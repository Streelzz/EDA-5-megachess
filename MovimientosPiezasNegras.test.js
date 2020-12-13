const negras = require('./MovimientosPiezasNegras')
const tablero = require('./Tablero_puntajePiezas')

test('Escenario donde el peon debe comer',()=>{
    const board = "rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR";
    const tab = tablero.crearTablero(board);
     tab[6][7] = "P";
     tab[6][9] = "Q";
     tab[3][8] = " ";
     tab[5][8] = "p";
    const fila = 5;
    const col = 8;
    var mejorMov =
            {
                "from_fila" : 5,
                "from_colum" : 8,
                "to_fila" : 6,
                "to_colum" : 7,
                "puntos": 100
            }
            
    expect(negras.moveBlackPawn(tab,fila,col)).toEqual(mejorMov);
});

test('Escenario donde el peon esta en la fila 3 y debe moverse 2 lugares hacia adelante',()=>{
    const board = "rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR";
    const tab = tablero.crearTablero(board);
    const fila = 3;
    const col = 8;
    var mejorMov =
            {
                "from_fila" : 3,
                "from_colum" : 8,
                "to_fila" : 5,
                "to_colum" : 8,
                "puntos": 80
            }
            
    expect(negras.moveBlackPawn(tab,fila,col)).toEqual(mejorMov);
});

test('Escenario donde el peon esta a una fila por coronar',()=>{
    const board = "rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR";
    const tab = tablero.crearTablero(board);
    tab[3][8] = " ";
    tab[6][8] = "p";
    const fila = 6;
    const col = 8;
    var mejorMov =
            {
                "from_fila" : 6,
                "from_colum" : 8,
                "to_fila" : 7,
                "to_colum" : 8,
                "puntos": 85
            }
            
    expect(negras.moveBlackPawn(tab,fila,col)).toEqual(mejorMov);
});