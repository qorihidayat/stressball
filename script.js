const snake = document.querySelector('.snakePanjang');
const food = document.querySelector('.food');
const karakter = document.querySelector('.karakter');






document.addEventListener('keydown', function (e) {
  console.log(e);

  if (e.key == "w") {
    food.style.backgroundColor = 'yellow';
    food.style.transform = 'translate(0,0)';
    // food.style.marginTop = '0';
  } else if (e.key == 's') {
    food.style.transform = 'translate(1200px,650px)';
  }


});


document.addEventListener('keyup', function (e) {
  console.log(e);
  if (e.key == "w") {
    food.style.backgroundColor = 'red';
    food.style.transform = 'translate(0,650px)';
    // food.style.marginTop = '600px';
    // food.style.marginLeft = '300px';
    food.style.display = 'block';
  } else if (e.key == 's') {
    food.style.transform = 'translate(1200px,0)';
  }


});


karakter.addEventListener('click', function (b) {
  karakter.style.transform = "translate(100px)";
});


function cekmakan2() {

}

function cekmakan() {
  const fTop = food.offsetTop;
  const fLeft = food.offsetLeft;
  const fWidth = food.offsetWidth;
  const fHeight = food.offsetHeight;

  const kTop = karakter.offsetTop;
  const kLeft = karakter.offsetLeft;
  const kWidth = karakter.offsetWidth;
  const kHeight = karakter.offsetHeight;

  console.log(fTop, fLeft, fWidth, fHeight);

  if ((fLeft + fWidth) > kLeft && fLeft < (kLeft + kWidth) && (fTop + fHeight) > kTop && fTop < (kTop + kHeight)) {
    document.body.removeChild(karakter);
  }

}
