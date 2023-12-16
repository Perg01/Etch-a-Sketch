let row = 16;
let column = 16;
const grid = document.querySelector('.container');


function color(e) {
    e.target.setAttribute('style', 'background-color: black;');
    // e.target.style.cssText = "background-color: black;";
}

function appendBoxes() {
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

appendBoxes();

