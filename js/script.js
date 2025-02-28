// website loaded?
console.log("👍 Okay");

// --- Dynamic Calendar ---
function renderCalendar() {
    const calendarEl = document.getElementById('calendar');
    const now = new Date();
    const currentDay = now.getDate();
    let calendarHTML = '';
    // For demonstration, we display a fixed 31-day month.
    for (let day = 1; day <= 31; day++) {
      calendarHTML += `<span class="day${day === currentDay ? ' today' : ''}">${day}</span>`;
    }
    calendarEl.innerHTML = calendarHTML;
  }
  renderCalendar();
  
  // --- Dynamic Clock ---
  function updateClock() {
    const clockEl = document.getElementById('clock');
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString();
  }
  setInterval(updateClock, 1000);
  updateClock();
  
  // --- Graduation Countdown ---
  function updateCountdown() {
    const countdownEl = document.getElementById('countdown');
    const graduationDate = new Date('2025-06-13T00:00:00');
    const now = new Date();
    const diff = graduationDate - now;
    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      countdownEl.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    } else {
      countdownEl.textContent = "Congratulations! You've graduated!";
    }
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();
  
  // --- Inspirational Quote ---
  const quotes = [
    "Believe you can and you're halfway there.",
    "Every moment is a fresh beginning.",
    "Turn your wounds into wisdom.",
    "Dream big and dare to fail.",
    "The only limit is your mind."
  ];
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  document.getElementById('quote').textContent = getRandomQuote();
  
  // --- Random Image ---
  // const images = [
  //   'https://anthony-ievlev-RZk2SjAGhZw-unsplash.jpg',
  //   'https://chris-lawton-5IHz5WhosQE-unsplash.jpg',
  //   'https://johannes-plenio-RwHv7LgeC7s-unsplash.jpg',
  //   'https://mark-tegethoff-NbgQfUvKFE0-unsplash.jpg',
  //   'https://olivia-hutcherson-rN3m7aTH3io-unsplash.jpg',
  //   'https://priscilla-du-preez-Sce52e91snA-unsplash.jpg',
  //   'https://sergey-n-wKFXCOWdcjQ-unsplash.jpg',
  // ];
  // function getRandomImage() {
  //   return images[Math.floor(Math.random() * images.length)];
  // }
  // document.getElementById('randomImage').src = getRandomImage();


    const colors = [
    "#45462A",
    "#606C38",
    "#BC6C25",
    "#D4A373",
    "#EFDCAC",
  ];
  
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  const randomColorElement = document.getElementById('randomColor'); // Updated ID
  const randomColor = getRandomColor();
  
  console.log('Selected color:', randomColor); // Log the selected color
  
  randomColorElement.style.backgroundColor = randomColor;
  randomColorElement.style.width = '100%';
  randomColorElement.style.height = '145px'; // Adjust the height as needed
  randomColorElement.style.opacity = "70%"; // Optional: Add transparency
  randomColorElement.style.borderRadius = '8px'; // Optional: Add rounded corners
