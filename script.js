let playerFist = document.querySelector('.fist');

function shake() {
    const fistShakeAnim = setInterval(function() {
     // Fist going down
    playerFist.src = "/fist pump animations/1.png";
    setTimeout(function () { playerFist.src = "/fist pump animations/2.png"; }, 160);
    setTimeout(function () { playerFist.src = "/fist pump animations/3.png"; }, 320);
    setTimeout(function () { playerFist.src = "/fist pump animations/4.png"; }, 480);
    setTimeout(function () { playerFist.src = "/fist pump animations/5.png"; }, 640);
    setTimeout(function () { playerFist.src = "/fist pump animations/7.png"; }, 960);

     // Fist going up
    setTimeout(function () { playerFist.src = "/fist pump animations/5.png"; }, 1120);
    setTimeout(function () { playerFist.src = "/fist pump animations/4.png"; }, 1280);
    setTimeout(function () { playerFist.src = "/fist pump animations/3.png"; }, 1440);
    setTimeout(function () { playerFist.src = "/fist pump animations/2.png"; }, 1600);
    setTimeout(function () { playerFist.src = "/fist pump animations/1.png"; }, 1760);
    }, 1760)

    setTimeout(function() {clearInterval(fistShakeAnim)}, 5280)
}

