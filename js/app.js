const square = document.getElementById('square');
let squarePos = {
  x: 300,
  y: 300
}
let sideLength = 100;
let isDragging = false;

square.style.left = squarePos.x + 'px';
square.style.top = squarePos.y + 'px';

let bodyWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

let bodyHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

square.onmousedown = (e) => {
  isDragging = true;
  let mx = e.clientX - squarePos.x;
  let my = e.clientY - squarePos.y;
  square.style.cursor = '-webkit-grabbing';

  onmousemove = (e) => {
    if (isDragging) {
      let x = e.clientX - mx;
      let y = e.clientY - my;

      squarePos.x = x;
      squarePos.y = y;

      if (x < 0) {
        squarePos.x = 0;
      }
      else if (x > bodyWidth() - sideLength) {
        squarePos.x = bodyWidth() - sideLength;
      }
      if (y < 0) {
        squarePos.y = 0;
      }
      else if (y > bodyHeight() - sideLength) {
        squarePos.y = bodyHeight() - sideLength;
      }

      square.style.left = squarePos.x + 'px';
      square.style.top = squarePos.y + 'px';
    }
  }
}

document.body.onmouseup = () => {
  isDragging = false;
  square.style.cursor = '-webkit-grab';
}

square.onmouseover = () => {
  square.style.cursor = '-webkit-grab';
  if (isDragging) {
    square.style.cursor = '-webkit-grabbing';
  }
}
