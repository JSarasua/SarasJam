import { Color } from "excalibur";

export class EnemyData {
	constructor(
		public speed: number,
		public radius: number,
		public color: Color,
	) {}

	static readonly Jimmy = new EnemyData(5, 10, Color.Red);
}
