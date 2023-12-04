let startTime;
let isRunning = false;

function startStop() {
    const startStopButton = document.getElementById('startStop');

    if (isRunning) {
        isRunning = false;
        startStopButton.textContent = 'Start';
    } else {
        isRunning = true;
        startTime = new Date().getTime();
        startStopButton.textContent = 'Stop';
        updateDisplay();
    }
}

function reset() {
    isRunning = false;
    const startStopButton = document.getElementById('startStop');
    startStopButton.textContent = 'Start';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');

    function pad(n) {
        return n < 10 ? '0' + n : n;
    }

    function formatTime(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        return pad(days) + ':' + pad(hours % 24) + ':' + pad(minutes % 60) + ':' + pad(seconds % 60);
    }

    function update() {
        if (isRunning) {
            const currentTime = new Date().getTime();
            const elapsed = currentTime - startTime;
            display.textContent = formatTime(elapsed);
            requestAnimationFrame(update);
        }
    }

    update();
}
