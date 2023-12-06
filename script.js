const darkBtn = document.getElementById('dark-btn');
const lightBtn = document.getElementById('light-btn');
const container = document.getElementById('container');
const bodyTxt = document.getElementById('text');


darkBtn.classList.remove('dark-btn');

darkBtn.addEventListener('click', function(){
    lightBtn.classList.remove('light-btn');
    darkBtn.classList.add('dark-btn');
    container.classList.remove('light-bg-cont');
    container.classList.add('dark-bg-cont');
    bodyTxt.classList.add('p-text-color');
    document.getElementById('mode-txt').innerHTML = 'light mode';
});

lightBtn.addEventListener('click', function(){
    lightBtn.classList.add('light-btn');
    darkBtn.classList.remove('dark-btn');
    container.classList.add('light-bg-cont');
    container.classList.remove('dark-bg-cont');
    bodyTxt.classList.remove('p-text-color');
    document.getElementById('mode-txt').innerHTML = 'dark mode';
});

