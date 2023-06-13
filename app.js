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

document.addEventListener('DOMContentLoaded', () => {
    for(i = 0; i < DEFAULT_WIDTH; i++) {
        for(j = 0; j < DEFAULT_WIDTH; j++) {
        const gridCell = document.createElement('div');

            defaultBtn.addEventListener('click', () => {
                gridCell.addEventListener('mousemove', () => {
                    gridCell.style.backgroundColor = `${DEFAULT_COLOR}`;
                })
            })


            eraserBtn.addEventListener('click', () => {
                defaultBtn.disabled = true;
                    gridCell.addEventListener('dragover', () => {
                    gridCell.style.backgroundColor = 'transparent';
                })
            })

            resetBtn.addEventListener('click', () => {
                gridCell.style.backgroundColor = 'transparent';
            })


        canvasDiv.appendChild(gridCell);
        }
    }
})