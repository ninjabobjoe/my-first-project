const square = document.getElementById('square');
let squarePos = {
  x: 0,
  y: 0
};
let isDragging = false;

square.style.left = squarePos.x + 'px';
square.style.top = squarePos.y + 'px';

let dragSquare = (mouseX, mouseY) => {
    let offsetX = mouseX - squarePos.x;
    let offsetY = mouseY - squarePos.y;

    let x = mouseX - offsetX;
    let y = mouseY - offsetY;
  
    square.style.left = x + 'px';
    square.style.top = y + 'px';
  
}

square.onclick = () => {
  isDragging = !isDragging;
  console.log(isDragging);
}

square.onmouseup = () => {
  isDragging = !isDragging;
  console.log(isDragging);
}

onmousemove = (e) => {
  if (isDragging) {
    dragSquare(e.clientX, e.clientY);
  }
}
