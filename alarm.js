function setAlarm() {
    const alarmTime = document.getElementById('alarmTime').value;

    if (!alarmTime) {
      alert('Please set the alarm time.');
      return;
    }

    const now = new Date();
    const alarmDateTime = new Date(now.toDateString() + ' ' + alarmTime);

    const timeDiff = alarmDateTime - now;

    if (timeDiff < 0) {
      alert('Please choose a future time for the alarm.');
      return;
    }

    setTimeout(() => {
      showNotification('Alarm! Time to wake up!');
      playAlarmSound();
    }, timeDiff);
  }

  function playAlarmSound() {
    const audio = new Audio('one.mp3');
    audio.play();
  }

  function showNotification(message) {
    if ('Notification' in window && Notification.permission === 'granted') {
      const notification = new Notification('Alarm', { body: message });
      setTimeout(() => {
        notification.close();
      }, 5000); 
    } else {
      alert(message);
    }
  }