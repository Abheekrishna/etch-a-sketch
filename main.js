let color = 'black';
let click = false;

document.addEventListener('DOMContentLoaded', () => {
    createBoard(16)

    document.querySelector("body").addEventListener('click', (e) => {
        if(e.target.tagName != 'BUTTON') {
            click = !click;
            let draw = document.getElementById('message');
            if (click === true) {
                draw.innerText = 'Now you can draw';
            } else {
                draw.innerText = 'You cannot draw';
            }
        }
    })

    const boardWidthBtn = document.getElementById('width');
    boardWidthBtn.addEventListener('click', () => {
        const size = getSize()
        createBoard(size)
    })
})

const createBoard = (size) => {
    const board = document.querySelector('.canvas');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const numberOfDiv = size * size;

    for (i = 0; i < numberOfDiv; i++) {
        const div = document.createElement('div');
        div.classList.add('gridCell');
        div.addEventListener('mouseover', colorDiv)
        board.appendChild(div);
    }
}

const getSize = () => {
    const inputSize = prompt('Enter the size for the canvas.');
    const errorMsg = document.getElementById('errorMsg');
    
    if (inputSize == "") {
        errorMsg.innerText = 'Please provide a number.';
    } else if (inputSize < 0 || inputSize > 100) {
        errorMsg.innerText = 'Please provide number between 1 and 100';
    } else {
        errorMsg.innerText = ' ';
    }
    return inputSize;
}

function colorDiv() {
    if(click) {
        if(color == 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else if (color == 'eraser') {
            this.style.backgroundColor = 'transparent';
        } else {
            this.style.backgroundColor = '#393939';
        }
    }
}

const setColor = (colorChoice) => {
    color = colorChoice;
}


const reset = () => {
    let divs = document.querySelectorAll('.gridCell');
    divs.forEach((div) => div.style.backgroundColor = '#fff')
}