import { CANVAS_SIZE_X,CANVAS_SIZE_Y } from './constants';

export class Sun {
    constructor(private p: p5) {

    }

    draw() {
        this.p.fill(255, 165, 0);
        this.p.ellipse(CANVAS_SIZE_X / 2, CANVAS_SIZE_Y / 2, 80);
    }
}