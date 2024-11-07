// src/Game.js
import Phaser from "phaser";

class MyGame extends Phaser.Scene {
  constructor() {
    super("game-scene");
    this.player = null;
  }

  preload() {
    this.load.image("sky", "https://labs.phaser.io/assets/skies/sky1.png");
    this.load.image(
      "logo",
      "https://labs.phaser.io/assets/sprites/phaser3-logo.png"
    );
    this.load.image("red", "https://labs.phaser.io/assets/sprites/red.png");
    this.load.image("player", "https://labs.phaser.io/assets/sprites/blue.png"); // 플레이어 스프라이트 추가
  }

  create() {
    this.add.image(400, 300, "sky");

    const logo = this.physics.add.image(400, 150, "logo");
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    const red = this.physics.add.image(400, 500, "red");
    red.setInteractive();
    red.on("pointerdown", () => {
      red.setVelocityY(-300);
    });

    // 플레이어 객체 생성
    this.player = this.physics.add.sprite(400, 300, "player");
    this.player.setCollideWorldBounds(true); // 화면 경계 내에서 움직이도록 설정

    // 방향키 입력 설정
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // 방향키 입력 처리
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-200); // 왼쪽으로 이동
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(200); // 오른쪽으로 이동
    } else {
      this.player.setVelocityX(0); // 정지
    }

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-200); // 위로 이동
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(200); // 아래로 이동
    } else {
      this.player.setVelocityY(0); // 정지
    }
  }
}

export default MyGame;
