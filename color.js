
let colorCircle = document.querySelector('div').addEventListener('mousemove', changeColor);

function changeColor(e) {
    let x = document.body.style.backgroundColor = `rgb(${e.offsetX} ,${e.offsetY},20)`;
}
