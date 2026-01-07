import * as ex from "excalibur";
import { Level } from "./level.js";
import { Config } from "./config.js";
import { Resources } from "./resources.js";

export class Player extends ex.Actor {
	startSprite!: ex.Sprite;

	constructor(private level: Level) {
		super({
			pos: Config.BirdStartPos,
			radius: 8,
			color: ex.Color.Yellow,
		});
	}
	override onInitialize(): void {
		// Slice up image into a sprite sheet
		const spriteSheet = ex.SpriteSheet.fromImageSource({
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
	}
}
