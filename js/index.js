function toggle() {
    let body = document.querySelector('body');
    body.classList.toggle('light');
}

const deg = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    // Analog clock
    let day = new Date();
    let h = day.getHours() * 30;
    let m = day.getMinutes() * deg;
    let s = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(h) + (m / 12)}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s}deg)`;

    // Digital clock
    let hours = document.getElementById('hor');
    let minutes = document.getElementById('mn');
    let seconds = document.getElementById('sc');
    let ampm = document.getElementById('ap');

    let hor = new Date().getHours();
    let mn = new Date().getMinutes();
    let sc = new Date().getSeconds();
    let ap = hor >= 12 ? "PM" : "AM";

    if (hor > 12) {
        hor = hor - 12;
    }

    hor = (hor < 10) ? "0" + hor : hor;
    mn = (mn < 10) ? "0" + mn : mn;
    sc = (sc < 10) ? "0" + sc : sc;

    hours.innerHTML = hor;
    minutes.innerHTML = mn;
    seconds.innerHTML = sc;
    ampm.innerHTML = ap;
})