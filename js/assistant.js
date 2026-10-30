/* Greeting timestamp shows the visitor's current time */

const greetTime = document.getElementById('greetTime');

if (greetTime) {
  const now = new Date();
  greetTime.dateTime = now.toISOString();
  greetTime.textContent = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}
