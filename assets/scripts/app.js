'use strict';

info = document.getElementById('info');
about = document.getElementById('about');
contact = document.getElementById('contact');

about.addEventListener('click', function() {
    info.innerText = "My name is Blake Thompson, I'm a student programmer currently taking a college course on software development. \nLanguages known: \nPython, Java, HTML, CSS, Javascript \nCurrently learning: CLI \nLooking to teach myself C++";
});

contact.addEventListener('click', function() {
    info.innerText = "I can be reached at blthomps3@gmail.com. It shouldn't take more than a day for me to respond.";
});