import { Moon } from './moon';

export class Earth {
    moon = new Moon(this.p, 250, 250);
    constructor(private p: p5, private x: number, private y: number) {

    }

    setx(x: number) {
        this.x = x;
    }

    sety(y: number) {
        this.y = y;
    }

    draw(time: number, radius: number, speed = 1) {
        this.p.fill(135,206,250);
        time = time * speed;
        let x = this.p.cos(time * 0.0174532925) * radius + this.x;
        let y = this.p.sin(time * 0.0174532925) * radius + this.y;
        this.p.ellipse(x, y, 40);
        this.moon.setx(x);
        this.moon.sety(y);
        this.moon.draw(time, 40, 3);
    }
}