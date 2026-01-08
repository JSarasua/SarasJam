import { Color, Actor, Vector, vec, Engine } from "excalibur";

import { Level } from "./level.js";
import { Config } from "./config";
import { EnemyData } from "./enemy-data.js";
import { Player } from "./player.js";

export class Enemy extends Actor {
	baseSpeed!: number;
	constructor(
		private data: EnemyData,
		private startPos: Vector,
		private player: Player,
		private level: Level,
	) {
		super({
			pos: startPos,
			radius: data.radius,
			color: data.color,
		});
		this.baseSpeed = data.speed;
	}

	override update(engine: Engine, deltaMS: number): void {
		let direction: Vector = this.player.pos.sub(this.pos);
		this.vel = direction.scale(this.baseSpeed);
		super.update(engine, deltaMS);
	}
}
