let boxes = document.getElementsByClassName('box');
for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener('mouseover', ()=>{
       boxes[i].style.backgroundColor = `rgb(${parseInt(Math.random()*256)},${parseInt(Math.random()*256)},${parseInt(Math.random()*256)})`;
       setTimeout(() => {
        boxes[i].style.backgroundColor = `rgb(43, 38, 38)`;
        
       }, 2000);
    })
}