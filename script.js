let dimensions = 16;
let isMouseDown = false;
let eraserON = false;
let rgbON = false;

let grid = document.querySelector('.container');
const sizeBtn = document.querySelector('.grid-btn');
const resetColorBtn = document.querySelector('.resetcolorbtn');
let eraserBtn = document.querySelector('.eraser');
let rgbBtn = document.querySelector('.rainbow-color');
let blackBtn = document.querySelector('.black-color');
const buttons = document.querySelectorAll('.btn-container button');

function appendBoxes(dimensions) {
    const divsDimensions = 500 / dimensions;

    for (let i = 0; i < dimensions * dimensions; i++) {
        let smallDivs = document.createElement('div');
        smallDivs.classList.add('smallBoxes');
        smallDivs.style.width = `${divsDimensions}px`;
        smallDivs.style.height = `${divsDimensions}px`;
        smallDivs.addEventListener('click', color);
        grid.appendChild(smallDivs);
    }

}

function color(e) {
    if (isMouseDown || e.type === 'mousedown') {
        if (eraserON) {
            e.target.style.backgroundColor = `#9C9B8B`;
        }
        else if (rgbON && !e.target.classList.contains('container')) {
            rgbColors = generateRGBValues();
            e.target.style.backgroundColor = rgbColors;
        }
        else if (!e.target.classList.contains('container')) {
            const borderWidth = window.getComputedStyle(e.target).borderWidth;
            e.target.style.backgroundColor = 'black';
            e.target.style.borderColor = 'black';
            e.target.style.borderWidth = borderWidth;
        }
    }
}

function rng() {
    return Math.floor(Math.random() * 256);
}

function generateRGBValues() {
    return `rgb(${rng()},${rng()},${rng()})`;
}

function toggleBlack() {
    eraserON = false;
    rgbON = false;
}

function toggleEraser() {
    eraserON = true;
    rgbON = false;
}
function toggleRGB() {
    rgbON = true;
    eraserON = false;
}

function resetColor() {
    let selectSmallDivs = document.querySelectorAll('.smallBoxes');
    selectSmallDivs.forEach(div => {
        div.style.backgroundColor = `#9C9B8B`;
    });
}

function resetGrid() {
    grid.innerHTML = '';
}

function sizeButton() {
    let size = prompt("Set a custom grid size(1 <= size <= 100):", "16");
    if (size >= 1 && size <= 100) {
        resetColor();
        resetGrid();
        dimensions = size;
        appendBoxes(dimensions);
    }
    else {
        alert("Sorry, grid size must be between 1 and 100. Please try again.")
    }
}

grid.addEventListener('mousedown', function (e) {
    isMouseDown = true;
    color(e);
});

grid.addEventListener('mouseup', function () {
    isMouseDown = false;
});

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

blackBtn.addEventListener('click', toggleBlack);
rgbBtn.addEventListener('click', toggleRGB);
eraserBtn.addEventListener('click', toggleEraser);
grid.addEventListener('mouseover', color);
resetColorBtn.addEventListener('click', resetColor);
sizeBtn.addEventListener('click', sizeButton);
appendBoxes(dimensions);