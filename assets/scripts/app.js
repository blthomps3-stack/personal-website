'use strict';

info = document.getElementById('info');
about = document.getElementById('about');
contact = document.getElementById('contact');

about.addEventListener('click', function() {
    info.innerText = "About";
});

contact.addEventListener('click', function() {
    info.innerText = "I can be reached at blthomps3@gmail.com.";
});