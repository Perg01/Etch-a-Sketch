let row = 16;
let column = 16;
const grid = document.querySelector('.container');
let sizeBtn = document.querySelector('.grid-btn');

function color(e) {
    e.target.setAttribute('style', 'background-color: black;');
}

function gridSizing() {
    let size = prompt("Set a custom grid size(1 <= size <= 100):", "16");
    if (size >= 1 && size <= 100) {
        resetColor();
        resetGrid();
        row = size;
        column = size;
        appendBoxes(row, column);
    }
    else {
        alert("Sorry, grid size must be between 1 and 100. Please try again.")
    }
}

function resetColor() {
    let selectAllDivs = document.querySelectorAll('.rowBoxes');
    selectAllDivs.forEach(div => {
        div.setAttribute('style', 'background-color: white;');
    });
}

function resetGrid() {
    let selectAllDivs = document.querySelectorAll('.rowBoxes');
    selectAllDivs.forEach(div => {
        div.classList.remove('rowBoxes');
    });
}

function appendBoxes(row, column) {
    for (let i = 0; i < column; i++) {
        let colDivs = document.createElement('div');
        colDivs.classList.add('colBoxes');
        for (let j = 0; j < row; j++) {
            let rowDivs = document.createElement('div');
            rowDivs.classList.add('rowBoxes');
            rowDivs.addEventListener('click', color);
            colDivs.appendChild(rowDivs);
        }
        grid.appendChild(colDivs);
    }
}

sizeBtn.addEventListener('click', gridSizing);

appendBoxes();

