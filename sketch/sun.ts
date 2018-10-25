export class Sun {
    constructor(private p: p5) {

    }

    draw() {
        this.p.fill(255, 165, 0);
        this.p.ellipse(250, 250, 80);
    }
}