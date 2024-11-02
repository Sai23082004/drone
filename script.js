// Get references to the buttons and status text
const centralButton = document.getElementById('centralButton');
const takeoffButton = document.getElementById('takeoff');
const flyButton = document.getElementById('fly');
const stopButton = document.getElementById('stop');
const takedownButton = document.getElementById('takedown');
const statusText = document.getElementById('status');

// Central button click event
centralButton.addEventListener('click', () => {
  statusText.textContent = 'Status: Central control activated!';
});

// Update status based on button clicks
takeoffButton.addEventListener('click', () => {
  statusText.textContent = 'Status: Drone is taking off...';
});

flyButton.addEventListener('click', () => {
  statusText.textContent = 'Status: Drone is flying...';
});

stopButton.addEventListener('click', () => {
  statusText.textContent = 'Status: Drone stopped.';
});

takedownButton.addEventListener('click', () => {
  statusText.textContent = 'Status: Drone is landing...';
});
