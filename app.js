const canvasDiv = document.getElementById('canvas');
const widthBtn = document.getElementById('width');
const defaultBtn = document.getElementById('default');
const rainbowBtn = document.getElementById('rainbow');
const eraserBtn = document.getElementById('eraser');
const resetBtn = document.getElementById('reset');

let DEFAULT_WIDTH = 16;
const DEFAULT_COLOR = '#393939';

canvasDiv.style.display = 'grid';
canvasDiv.style.gridTemplateColumns = `repeat(${DEFAULT_WIDTH}, 1fr)`;
canvasDiv.style.gridTemplateRows = `repeat(${DEFAULT_WIDTH}, 1fr)`;



for (i = 0; i < DEFAULT_WIDTH; i++) {
    for (j = 0; j < DEFAULT_WIDTH; j++) {
    const div = document.createElement('div');
    div.id = 'gridCell';
    canvasDiv.appendChild(div);
    }
}
const grid = document.getElementById('gridCell');

defaultBtn.addEventListener('click', () => {
        grid.style.backgroundColor = '#393939';
})


//Clear
resetBtn.addEventListener('click', () => {
    for (i = 0; i < DEFAULT_WIDTH; i++) {
        for (j = 0; j < DEFAULT_WIDTH; j++) {
        const div = document.createElement('div');
        div.addEventListener('mousemove', () => {
        })
        div.style.backgroundColor = 'transparent';
        canvasDiv.appendChild(div);
        }
    }
})

//Eraser
eraserBtn.addEventListener('click', () => {
    div.addEventListener('mousemove', () => {
        div.style.backgroundColor = '#fff';
    })
})