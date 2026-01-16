import { BingoModal } from './components/BingoModal';
import { CardDeck } from './components/CardDeck';
import { GameScreen } from './components/GameScreen';
import { StartScreen } from './components/StartScreen';
import { useBingoGame } from './hooks/useBingoGame';

function App() {
  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    startShuffle,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  if (gameState === 'start') {
    return <StartScreen onStart={startGame} onStartShuffle={startShuffle} />;
  }

  if (gameState === 'shuffle') {
    return <CardDeck onReset={resetGame} />;
  }

  return (
    <>
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === 'bingo'}
        onSquareClick={handleSquareClick}
        onReset={resetGame}
      />
      {showBingoModal && <BingoModal onDismiss={dismissModal} />}
    </>
  );
}

export default App;
