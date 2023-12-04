function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    document.getElementById('hour-box').textContent = hours;
    document.getElementById('minute-box').textContent = minutes;
    document.getElementById('second-box').textContent = seconds;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();
  