import { imageFromPath } from './tools.js';

export default function Paddle() {
    let image = imageFromPath('./images/paddle.png');
    let o = {
        image,
        x: 100,
        y: 200,
        speed: 5
    };

    console.log(o);
    return o;
}
