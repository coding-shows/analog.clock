function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minDeg = minutes * 6 + seconds * 0.1;
    const secDeg = seconds * 6;

    document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minDeg}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${secDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
