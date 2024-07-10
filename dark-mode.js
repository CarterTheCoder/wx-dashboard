const body = document.body;
const modeButton = document.getElementById('modeButton');
let modeCookie = document.cookie;

document.addEventListener("DOMContentLoaded", function() { // Ensure DOM content is loaded before executing any Javascript

  function changeMode(modeArg) { // Function to change dark/light modes, reduces boilerplate code
  
    if (modeArg == 'dark') {
      document.cookie = 'mode=dark';
      body.style.backgroundColor = 'black';
      $('h2').css('color', 'white');
      $('div').css('border-color', 'white');
      modeButton.innerText = 'Switch to Light Mode';
    } else {
      document.cookie = 'mode=light';
      body.style.backgroundColor = 'white';
      $('h2').css('color', 'black');
      $('div').css('border-color', 'black');
      modeButton.innerText = 'Switch to Dark Mode';
    }

  }

  modeButton.addEventListener('click', function() { // Light mode button
      
      if (body.style.backgroundColor === 'white') {
        changeMode('dark');
      } else {
        changeMode('light');
      }
  });

  if (modeCookie == 'mode=dark') { // Check what the user last set their light/dark mode to
    changeMode('dark');
    modeButton.innerText = 'Switch to Light Mode';
  } else {
    changeMode('light');
    modeButton.innerText = 'Switch to Dark Mode';
  }
});