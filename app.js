/* Written : 2021-08-12 13:31  /*
   v2 Author : KhalidObaide    /*

/* NOTE: app.js set to use the DOM as the refrence inside queries */
const circleDOM = document.querySelector('div');
const body = document.body;
let selectedOffset = Math.random()*255;

circleDOM.addEventListener("mousemove", e=>{
    circleDOM.addEventListener("click", ()=>{
        selectedOffset = Math.random()*255;
        body.style.backgroundColor = `rgb(${e.offsetX*2} ,${e.offsetY*2}, ${selectedOffset})`;
    });
    body.style.backgroundColor = `rgb(${e.offsetX} ,${e.offsetY}, ${selectedOffset})`;
});

circleDOM.addEventListener("mouseout", e=>{
    body.style.backgroundColor = 'white';
});
/* Hello sweet
