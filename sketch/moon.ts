import { CANVAS_SIZE_X, CANVAS_SIZE_Y } from './constants';

export class Moon {
    x = CANVAS_SIZE_X / 2;
    y = CANVAS_SIZE_Y / 2;

    constructor(
        private p: p5,
        private velocity: number,
        private rOffset: number) {

    }

    setx(x: number) {
        this.x = x;
    }

    sety(y: number) {
        this.y = y;
    }

    draw(time: number) {
        this.p.fill(211, 211, 211);
        time = time * this.velocity;
        let x = this.p.cos(time * 0.0174532925) * (40 + this.rOffset) + this.x;
        let y = this.p.sin(time * 0.0174532925) * (40 + this.rOffset) + this.y;
        this.p.ellipse(x, y, 10);
    }
}