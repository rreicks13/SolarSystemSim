import { Moon } from './moon';
import { CANVAS_SIZE_X, CANVAS_SIZE_Y } from './constants';

export class Planet {
    color = [125, 125, 125];
    moons: Moon[] = [];
    x = CANVAS_SIZE_X / 2;
    y = CANVAS_SIZE_Y / 2;
    size = 50;
    constructor(private p: p5) {

    }

    setx(x: number) {
        this.x = x;
    }

    sety(y: number) {
        this.y = y;
    }

    setColor(r: number, g: number, b: number) {
        this.color = [r, g, b];
    }

    addMoon(v: number, rOffset = 0) {
        let moon = new Moon(this.p, v, rOffset);
        this.moons.push(moon);
    }

    setSize(size: number) {
        this.size = size;
    }

    draw(time: number, radius: number, speed = 1) {
        this.p.fill(this.color[0], this.color[1], this.color[2]);
        time = time * speed;
        let x = this.p.cos(time * 0.0174532925) * radius + this.x;
        let y = this.p.sin(time * 0.0174532925) * radius + this.y;
        this.p.ellipse(x, y, this.size);
        this.moons.forEach(moon => {
            moon.setx(x);
            moon.sety(y);
            moon.draw(time);
        })

    }
}