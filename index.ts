import { Sun } from './sketch/sun';
import { Earth } from './sketch/earth';

var sketch = (p: p5) => {
    const sun = new Sun(p);
    const earth = new Earth(p, 250, 250);
    let frames = 0;
    let t = 0;
    let r = 100;

    p.setup = () => {
        p.createCanvas(500, 500);
    }
    
    p.draw = () => {
        frames++;
        if (frames % 5 == 0) {
            t = t + 2;
            p.background(100);
            sun.draw();
            earth.draw(t, r);
        }
    }
}

new p5(sketch);