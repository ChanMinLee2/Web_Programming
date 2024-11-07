// src/App.js
import React, { useEffect } from "react";
import Phaser from "phaser";
import MyGame from "./Game/Game";

function App() {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
      scene: MyGame,
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div>
      <h1>Phaser with React</h1>
      <div id="phaser-game" />
    </div>
  );
}

export default App;
