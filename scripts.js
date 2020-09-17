document.addEventListener('DOMContentLoaded', () => {

  // the hambuger function
  function toggleNav() {

    document.querySelector('.hamburger').addEventListener('click', function (e) {
      // variables for the spans
      let span1 = document.querySelector('.one');
      let span2 = document.querySelector('.two');
      let span3 = document.querySelector('.three');

      // toggle the css classes for spans
      span1.classList.toggle('top');
      span2.classList.toggle('hidden');
      span3.classList.toggle('bottom');

    });

  }

  toggleNav();

  const navbar = document.querySelector("#nav");
  const sidebar = document.querySelector("#sidebar");
  const date = document.querySelector("#date");
  // add fixed class to navbar
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 80) {
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
    }
  });

  date.innerHTML = new Date().getFullYear();

  document.getElementById("nav-btn").addEventListener("click", open_close);
  var menuState = 0 // close
  sideNav = document.getElementById('sidenav');
  function open_close() {
    if (menuState === 0) {
      menuState = 1;
      sidebar.classList.add("show-sidebar");
    } else {
      menuState = 0;
      sidebar.classList.remove("show-sidebar");
    }
  }

  let theme = localStorage.getItem('theme');

  if (theme == null) {
      setTheme('light');
  } else {
      setTheme(theme);
  }

  let themeBtn = document.getElementsByClassName('theme-btn');


  for (var i = 0; themeBtn.length > i; i++) {
      themeBtn[i].addEventListener('click', function () {
          let mode = this.dataset.mode;
          setTheme(mode);
      })
  }

  function setTheme(mode) {
      if (mode == 'light') {
          document.getElementById('theme-style').href = 'style.css';
      }

      if (mode == 'dark') {
          document.getElementById('theme-style').href = 'dark.css';
      }

      if (mode == 'sienna') {
          document.getElementById('theme-style').href = 'burnt-sienna.css';
      }

      if (mode == 'purple') {
          document.getElementById('theme-style').href = 'purple.css';
      }
      if (mode == 'brand') {
          document.getElementById('theme-style').href = 'brand.css';
      }

      localStorage.setItem('theme', mode);
  }

  const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}


window.addEventListener('beforeinstallprompt', (event) => {
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container
  divInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  promptEvent.userChoice.then((result) => {
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    divInstall.classList.toggle('hidden', true);
  });
});

});