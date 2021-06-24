const canvas = document.querySelector('#canvas');

if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'rgba(255,0,0,0.1)';
    ctx.lineWidth = 5;

    const centerX = 100;
    const centerY = 100;
    const radius = 80;

    const points = [];


    ctx.beginPath();

    for (let i = 0, sides = 60; i < sides; i ++) {
        const angle = (i / sides) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        points.push({x, y});
        ctx.lineTo(x,y);
    }

    ctx.closePath();
    ctx.stroke();

    console.log(points);
}