const canvas = document.getElementById("string");
const ctx = canvas.getContext("2d");
const numPoints = 1000;
const pointSpacing = canvas.width / numPoints;
let amplitude = 20;
let frequency = 1;
let time = 0;

function animateWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.strokeStyle = "gray";
    ctx.stroke();

    for (let i = 0; i < numPoints; i++) {
        const x = i * pointSpacing;
        const displacement = amplitude * Math.sin(2 * Math.PI * frequency * x / canvas.width - time);
        const y = canvas.height / 2 + displacement;

        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
    }

    time += 0.02;
    
    requestAnimationFrame(animateWave);
}

animateWave();

const increaseFrequencyButton = document.getElementById("increase");
const decreaseFrequencyButton = document.getElementById("decrease");

const frequencyDisplay = document.getElementById("frequencyDisplay");
const messageElement = document.getElementById("message");

increaseFrequencyButton.addEventListener("click", () => {
    if (frequency < 15) {
        frequency += 1;
        frequencyDisplay.textContent = frequency;
        messageElement.textContent = "";
    } else {
        messageElement.textContent = "La frecuencia no puede ser mayor a 15.";
    }
});

decreaseFrequencyButton.addEventListener("click", () => {
    if (frequency > 1) {
        frequency -= 1;
        frequencyDisplay.textContent = frequency;
        messageElement.textContent = "";
    } else {
        messageElement.textContent = "La frecuencia no puede ser menor a 1.";
    }
});


const frequencyInput = document.getElementById("frequencyInput");
const setFrequencyButton = document.getElementById("setFrequency");

setFrequencyButton.addEventListener("click", () => {
    const newFrequency = parseInt(frequencyInput.value);
    if (newFrequency >= 1 && newFrequency <= 15) {
        frequency = newFrequency;
        frequencyDisplay.textContent = frequency;
        messageElement.textContent = "";
    } else {
        messageElement.textContent = "La frecuencia debe estar entre 1 y 15.";
    }
});
