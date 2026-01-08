import { Engine } from "excalibur";

export class GameEngine extends Engine {
	paused = false;

	togglePause(enabled?: boolean) {
		this.paused = enabled ?? !this.paused;
		this.timescale = this.paused ? 0 : 1;
	}
}
