var isPlaying = false;
var maxCombo = 0;
var score = 0;
var animation = 'moveDown';
var keyContainer;
var songContainer;
var keyPress;

var keyHolding = {
    a: false,
    w: false,
    d: false,
    j: false,
    i: false,
    l: false
};

var keyHits = { perfect: 0, great: 0, good: 0, bad: 0, miss: 0 };

var keyMultiple = {
    perfect: 2,
    great: 1,
    good: 0.5,
    bad: 0.1,
    miss: 0,
    combo: 1.10
}

var menuButton = function () {
    var menuButton = document.querySelector('.btn--start');
    menuButton.removeEventListener('click', function () {
        isPlaying = true;
        displayResults();
        document.querySelector('.menu').style.opacity = 0;
    })
}

var keySetUp = function () {
    var keyIndex;
    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "KeyA":
                keyHolding.a = true;
                keyIndex = 0;
                break;
            case "KeyW":
                keyHolding.w = true;
                keyIndex = 1;
                break;
            case "KeyD":
                keyHolding.d = true;
                keyIndex = 2;
                break;
            case "KeyJ":
                keyHolding.j = true;
                keyIndex = 3;
                break;
            case "KeyI":
                keyHolding.i = true;
                keyIndex = 4;
                break;
            case "KeyL":
                keyHolding.l = true;
                keyIndex = 5;
                break;
        }
        //keyPress[keyIndex].style.display = 'block';
    }, false);

    document.addEventListener("keyup", function (event) {
        switch (event.key) {
            case "KeyA":
                keyHolding.a = false;
                keyIndex = 0;
                break;
            case "KeyW":
                keyHolding.w = false;
                keyIndex = 1;
                break;
            case "KeyD":
                keyHolding.d = false;
                keyIndex = 2;
                break;
            case "KeyJ":
                keyHolding.j = false;
                keyIndex = 3;
                break;
            case "KeyI":
                keyHolding.i = false;
                keyIndex = 4;
                break;
            case "KeyL":
                keyHolding.l = false;
                keyIndex = 5;
                break;
        }
        //keyPress[keyIndex].style.display = 'none';
    }, false);
}

var displayResults = function () {
    document.querySelector('.perfect_total').innerHTML = keyHits.perfect;
    document.querySelector('.great_total').innerHTML = keyHits.great;
    document.querySelector('.good_total').innerHTML = keyHits.good;
    document.querySelector('.bad_total').innerHTML = keyHits.bad;
    document.querySelector('.miss_total').innerHTML = keyHits.miss;
    document.querySelector('.combo_total').innerHTML = maxCombo;
    document.querySelector('.score_total').innerHTML = score;
}