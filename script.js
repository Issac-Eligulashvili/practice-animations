let playerFist = document.querySelector('.fist');
let deltaTime = 100;

function shake() {
    let fistShakeAnim = setInterval(function() {
     // Fist going up
    playerFist.src = "/fist pump animations/6.png";
    setTimeout(function () { playerFist.src = "/fist pump animations/5.png"; }, deltaTime);
    setTimeout(function () { playerFist.src = "/fist pump animations/4.png"; }, deltaTime * 2);
    setTimeout(function () { playerFist.src = "/fist pump animations/3.png"; }, deltaTime * 3);
    setTimeout(function () { playerFist.src = "/fist pump animations/2.png"; }, deltaTime * 4);
    setTimeout(function () { playerFist.src = "/fist pump animations/1.png"; }, deltaTime * 5);
    // Fist going down
    setTimeout(function () { playerFist.src = "/fist pump animations/1.png"; }, deltaTime * 6);
    setTimeout(function () { playerFist.src = "/fist pump animations/2.png"; }, deltaTime * 7);
    setTimeout(function () { playerFist.src = "/fist pump animations/3.png"; }, deltaTime * 7);
    setTimeout(function () { playerFist.src = "/fist pump animations/4.png"; }, deltaTime * 8);
    setTimeout(function () { playerFist.src = "/fist pump animations/5.png"; }, deltaTime * 9);
    }, deltaTime * 11)

    setTimeout(function() {clearInterval(fistShakeAnim)}, deltaTime * 33);
    
    

    setTimeout(function () { playerFist.src = "/fist pump animations/5.png"; }, deltaTime * 45);
    setTimeout(function () { playerFist.src = "/fist pump animations/4.png"; }, deltaTime * 46);
    setTimeout(function () { playerFist.src = "/fist pump animations/3.png"; }, deltaTime * 47);
    setTimeout(function () { playerFist.src = "/fist pump animations/2.png"; }, deltaTime * 48);
    setTimeout(function () { playerFist.src = "/fist pump animations/1.png"; }, deltaTime * 49);
}

function scissors() {
    shake();
    setTimeout(function () { playerFist.src = "/fist pump animations/scissors/scissors-1.png"; }, deltaTime * 50);
    setTimeout(function () { playerFist.src = "/fist pump animations/scissors/scissors-2.png"; }, deltaTime * 51);
    setTimeout(function () { playerFist.src = "/fist pump animations/scissors/scissors-3.png"; }, deltaTime * 52);
    setTimeout(function () { playerFist.src = "/fist pump animations/scissors/scissors-4.png"; }, deltaTime * 53);
    setTimeout(function () { playerFist.src = "/fist pump animations/scissors/scissors-5.png"; }, deltaTime * 54);
}
function rock() {
    shake();
    setTimeout(function () { playerFist.src = "/fist pump animations/1.png"; }, deltaTime * 50);
    setTimeout(function () { playerFist.src = "/fist pump animations/2.png"; }, deltaTime * 51);
    setTimeout(function () { playerFist.src = "/fist pump animations/3.png"; }, deltaTime * 52);
    setTimeout(function () { playerFist.src = "/fist pump animations/4.png"; }, deltaTime * 53);
    setTimeout(function () { playerFist.src = "/fist pump animations/5.png"; }, deltaTime * 54);
}

