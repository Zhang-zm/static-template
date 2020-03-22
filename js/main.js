import Paddle from './Paddle.js';

export default function main() {
    let canvas = document.querySelector('#id-canvas');
    let context = canvas.getContext('2d');

    let paddle = Paddle();

    let leftDown = false;
    let rightDown = false;

    window.addEventListener('keydown', function(event) {
        const key = event.key;

        if (key === 'a') {
            leftDown = true;
        } else if (key === 'd') {
            rightDown = true;
        }
    });

    window.addEventListener('keyup', function(event) {
        const key = event.key;

        if (key === 'a') {
            leftDown = false;
        } else if (key === 'd') {
            rightDown = false;
        }
    });

    // 希望一秒刷新60次
    setInterval(function() {
        if (leftDown) {
            paddle.x -= paddle.speed;
        } else if (rightDown) {
            paddle.x += paddle.speed;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(paddle.image, paddle.x, paddle.y);
    }, 1000 / 60);
}
