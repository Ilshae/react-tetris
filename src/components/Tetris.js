import React, { useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';

// Styled Components
import { StyledTetrisWrapper, StyledTetris, KeyContainer, KeyContainerFooter, UpKey, Key, DisplayContainer } from './styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10){
      setLevel(prev => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game Over
      if (player.pos.y < 1) {
        console.log('GAME OVER!!!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ key }) => {
    if (!gameOver) {
      if (key === "ArrowDown") {
        setDropTime(1000 / (level + 1) + 200);
        console.log("DropTime");
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ key }) => {
    if (!gameOver) {
      if (key === "ArrowLeft") {
        movePlayer(-1);
      } else if (key === "ArrowRight") {
        movePlayer(1);
      } else if (key === "ArrowDown") {
        dropPlayer();
      } else if (key === "ArrowUp") {
        playerRotate(stage, 1);
      }
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          <StartButton callback={startGame} />
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <DisplayContainer>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </DisplayContainer>
          )}
          <KeyContainer>
          <UpKey>
            <Key onClick={(e) => {e.key="ArrowUp"; move(e); keyUp(e);}}>&#8679;</Key>
          </UpKey>
          <KeyContainerFooter>
            <Key onClick={(e) => {e.key="ArrowLeft"; move(e); keyUp(e);}}>&#8678;</Key>
            <Key onClick={(e) => {e.key="ArrowDown"; move(e); keyUp(e);}}>&#8681;</Key>
            <Key onClick={(e) => {e.key="ArrowRight"; move(e); keyUp(e);}}>&#8680;</Key>
          </KeyContainerFooter>
        </KeyContainer>
        </aside>
        
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
