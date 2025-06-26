const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img figure");

let idx = 0;

function carrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 100}vw)`;
}

setInterval(carrossel, 3000);
