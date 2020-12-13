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

test('Escenario donde la reina debe comer',()=>{
    const board = "rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR";
    const tab = tablero.crearTablero(board);
     tab[9][8] = "q";
     tab[9][7] = "P";
     tab[9][9] = "H";
     tab[12][5] = " ";
     tab[13][4] = "K";
     tab[10][8] = "R";
     tab[10][9] = "B";
    const fila = 9;
    const col = 8;
    var mejorMov =
            {
                "from_fila" : 9,
                "from_colum" : 8,
                "to_fila" : 13,
                "to_colum" : 4,
                "puntos": 1000
            }
            
    expect(negras.moveBlackQueen(tab,fila,col)).toEqual(mejorMov);
});

test('Escenario donde el rey debe comer',()=>{
    const board = "rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR";
    const tab = tablero.crearTablero(board);
     tab[9][8] = "k";
     tab[9][7] = "P";
     tab[9][9] = "H";
     tab[10][7] = "K";
     tab[10][8] = "R";
     tab[10][9] = "B";
    const fila = 9;
    const col = 8;
    var mejorMov =
            {
                "from_fila" : 9,
                "from_colum" : 8,
                "to_fila" : 10,
                "to_colum" : 7,
                "puntos": 1000
            }
            
    expect(negras.moveBlackKing(tab,fila,col)).toEqual(mejorMov);
});

test('Escenario donde la torre debe comer',()=>{
    const board = "rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR";
    const tab = tablero.crearTablero(board);
     tab[9][8] = "r";
     tab[9][0] = "K";
     tab[9][15] = "H";
     tab[11][8] = "P";
     tab[6][8] = "Q";
    const fila = 9;
    const col = 8;
    var mejorMov =
            {
                "from_fila" : 9,
                "from_colum" : 8,
                "to_fila" : 9,
                "to_colum" : 0,
                "puntos": 1000
            }
            
    expect(negras.moveBlackRook(tab,fila,col)).toEqual(mejorMov);
});

test('Escenario donde el alfil debe comer',()=>{
    const board = "rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR";
    const tab = tablero.crearTablero(board);
     tab[6][11] = "b";
     tab[4][9] = "Q";
     tab[4][13] = "H";
     tab[11][6] = "K";
     tab[10][15] = "R";
    const fila = 6;
    const col = 11;
    var mejorMov =
            {
                "from_fila" : 6,
                "from_colum" : 11,
                "to_fila" : 11,
                "to_colum" : 6,
                "puntos": 1000
            }
            
    expect(negras.moveBlackBishop(tab,fila,col)).toEqual(mejorMov);
});

test('Escenario donde el caballo debe comer',()=>{
    const board = "rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR";
    const tab = tablero.crearTablero(board);
     tab[6][11] = "h";
     tab[4][10] = "H";
     tab[5][13] = "R";
     tab[7][9] = "B";
     tab[8][10] = "Q";
     tab[8][12] = "K";
     tab[7][13] = "P";
    const fila = 6;
    const col = 11;
    var mejorMov =
            {
                "from_fila" : 6,
                "from_colum" : 11,
                "to_fila" : 8,
                "to_colum" : 12,
                "puntos": 1000
            }
            
    expect(negras.moveBlackHorse(tab,fila,col)).toEqual(mejorMov);
});