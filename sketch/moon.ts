export class Moon {
    constructor(private p: p5, private x: number, private y: number) {

    }

    setx(x: number) {
        this.x = x;
    }

    sety(y: number) {
        this.y = y;
    }

    draw(time: number, radius: number, speed = 1) {
        this.p.fill(211, 211, 211);
        time = time * speed;
        let x = this.p.cos(time * 0.0174532925) * radius + this.x;
        let y = this.p.sin(time * 0.0174532925) * radius + this.y;
        this.p.ellipse(x, y, 10);
    }
}