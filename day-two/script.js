let secondHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");

function setDate() {
    let now = new Date();

    let seconds = now.getSeconds();
    let secondsDegrees = (seconds / 60) * 360 + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    let minutes = now.getMinutes();
    let minutesDegrees = (minutes / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    let hours = now.getHours;
    let hoursDegrees = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);