import * as ex from "excalibur";
import { Player } from "./player";

export class Level extends ex.Scene {
  player = new Player(this);
  scoreLabel = new ex.Label({
    text: "Score: 0",
    x: 0,
    y: 0,
    z: 1,
    font: new ex.Font({
      size: 20,
      color: ex.Color.White,
    }),
  });

  override onInitialize(engine: ex.Engine): void {
    this.add(this.player);
    this.add(this.scoreLabel);
  }
}
