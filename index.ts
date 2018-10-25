import { Sun } from './sketch/sun';
import { Planet } from './sketch/planet';
import { CANVAS_SIZE_X, CANVAS_SIZE_Y } from './sketch/constants';

var sketch = (p: p5) => {
    const sun = new Sun(p);
    const mercury = new Planet(p);
    mercury.setSize(15);
    const venus = new Planet(p);
    venus.setSize(15);
    venus.setColor(255, 99, 71);
    const earth = new Planet(p);
    earth.setSize(30);
    earth.setColor(125, 125, 256);
    earth.addMoon(3);
    const mars = new Planet(p);
    mars.setSize(40);
    mars.setColor(255, 0, 0);
    mars.addMoon(-5);
    mars.addMoon(3, 10);
    let t = 0;
    let stars: [{x: number, y: number}] = [{x: 1, y: 1}];
    for (var star = 0; star < 1000; star++) {
        stars.push({x: Math.round(p.random(0, CANVAS_SIZE_X)), y: Math.round(p.random(0, CANVAS_SIZE_Y))});
    }

    p.setup = () => {
        p.createCanvas(CANVAS_SIZE_X, CANVAS_SIZE_Y);
    }
    
    p.draw = () => {
        p.background(0);
        p.fill(255, 215, 0);
        for(var star = 0; star < stars.length; star++) {
            p.ellipse(stars[star].x, stars[star].y, 3);
        }

        t = t + 1;
        sun.draw();
        mercury.draw(t, 60, 3);
        venus.draw(t, 90, 1.8);
        earth.draw(t, 150, 1);
        mars.draw(t, 200, .6);
    }
}

new p5(sketch);