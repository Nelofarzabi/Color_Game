
let colorCircle = document.querySelector('div').addEventListener('mousemove', changeColor);

function changeColor(e) {
    let x = document.body.style.backgroundColor = `rgb(${e.offsetX} ,${e.offsetY},20)`;
}
let mouseOut = document.querySelector('div').addEventListener('mouseout', unChangeAble);

function unChangeAble(e) {
    let x = document.body.style.backgroundColor = 'white';

}
