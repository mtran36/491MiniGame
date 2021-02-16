var isPlaying = false;
var speed = 0;
var combo = 0;
var maxCombo = 0;
var score = 0;

var keyPress = {
    a: false,
    w: false,
    d: false,
    j: false,
    i: false,
    l: false
};

var keyHits = {
    perfect: 2,
    great: 1,
    good: 0.5,
    bad: 0.1,
    miss: 0,
    combo: 1.10
}

var menuButton = function () {
    var menuButton = document.querySelector('.btn--start');
    menuButton.addEventListener('click', function () {
        document.querySelector('.instructions').style.opacity = 0;
        canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        document.querySelector('.menu').classList.add(show);
    })
}