import {
	Actor,
	Vector,
	vec,
	Keys,
	Color,
	SpriteSheet,
	Engine,
} from "excalibur";

import { Level } from "./level.js";
import { Config } from "./config.js";
import { Resources } from "./resources.js";
import { GameEngine } from "./game-engine.js";

export class Player extends Actor {
	startSprite!: ex.Sprite;
	currMoveDir!: ex.Vector;

	constructor(private level: Level) {
		super({
			pos: Config.BirdStartPos,
			radius: 8,
			color: Color.Yellow,
		});
		this.currMoveDir = Vector.Zero;
	}
	override onInitialize(engine: ex.Engine): void {
		// Slice up image into a sprite sheet
		const spriteSheet = SpriteSheet.fromImageSource({
			image: Resources.BirdImage,
			grid: {
				rows: 1,
				columns: 4,
				spriteWidth: 32,
				spriteHeight: 32,
			},
		});
		this.startSprite = spriteSheet.getSprite(1, 0);
		this.graphics.use(this.startSprite);

		engine.input.keyboard.on("hold", (event) => {
			switch (event.key) {
				case Keys.W:
				case Keys.Up:
					this.currMoveDir.addEqual(Vector.Up);
					break;
				case Keys.S:
				case Keys.Down:
					this.currMoveDir.addEqual(Vector.Down);
					break;
				case Keys.A:
				case Keys.Left:
					this.currMoveDir.addEqual(Vector.Left);
					break;
				case Keys.D:
				case Keys.Right:
					this.currMoveDir.addEqual(Vector.Right);
					break;
			}

			switch (event.key) {
				case Keys.Escape:
					if (engine instanceof GameEngine) {
						engine.togglePause();
					}
					break;
			}
		});
	}

	override update(engine: Engine, deltaMS: number): void {
		this.vel = this.currMoveDir.scale(Config.PlayerSpeed * deltaMS);
		super.update(engine, deltaMS);
		this.currMoveDir = Vector.Zero;
	}
}
