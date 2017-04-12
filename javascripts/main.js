$(document).ready(function() {
    $('code').each(function(i, el) {
        var fen = $(el).text();
        var div = $("<div class='chessboard' style='width: 400px' />");
        $(el).replaceWith(div);
        var board = new ChessBoard(div, {
          draggable: true,
          pieceTheme: '/images/chesspieces/wikipedia/{piece}.png'
        });
        board.position(fen, true);
    });
    $('blockquote').each(function(i, el) {
        var link = $('<a href="#">Solution</a>');
        link.click(function() {
            $(el).toggle();
            return false;
        });
        $(el).before(link);
        $(el).toggle();
    });

});
