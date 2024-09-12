let revealedPieces = 0;

function revealPiece(pieceNumber) {
    const piece = document.getElementById(`piece${pieceNumber}`);
    piece.src = `images/puzzle-piece-${pieceNumber}.jpg`;  // Image for the piece
    revealedPieces++;

    if (revealedPieces === 4) {
        setTimeout(() => {
            document.getElementById('puzzle').style.display = 'none';
            document.getElementById('message').classList.remove('hidden');
        }, 1000);
    }
}
