var date = new Date();
let day = date.getDate();
// getMonth is 0 based so we need to add 1
let month = date.getMonth()+1;
let year = date.getFullYear();

document.getElementById("date").innerHTML = `${day}.${month}.${year}`;

var nav_item_1 = document.querySelector('#nav-item-1');
var nav_item_2 = document.querySelector('#nav-item-2');
var nav_item_3 = document.querySelector('#nav-item-3');

var about_sec = document.querySelector('#about-section');
var legacy_sec = document.querySelector('#leg-hits-section');
var Latest_hits_sec = document.querySelector('#latest-hits-section');


nav_item_1.addEventListener('click', (e)=>{
    window.scroll({
        top: about_sec.getBoundingClientRect().top,
        left:0,
        behavior:"smooth",
    });
});

nav_item_2.addEventListener('click', (e)=>{
    window.scroll({
        top: legacy_sec.getBoundingClientRect().top,
        left:0,
        behavior:"smooth",
    });
});

nav_item_3.addEventListener('click', (e)=>{
    window.scroll({
        top: Latest_hits_sec.getBoundingClientRect().top,
        left:0,
        behavior:"smooth",
    });
});
