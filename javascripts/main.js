$(document).ready(function() {
    $('.chessboard').each(function(i, el) {
        el.style.width="400px";
        var fen = $(el).text();
        var board = new ChessBoard(el, {
          draggable: true,
          pieceTheme: '/images/chesspieces/wikipedia/{piece}.png'
        });
        board.position(fen, true);
    });

});
