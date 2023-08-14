let row = 16;
let column = 16;
const grid = document.querySelector('.container');

function appendBoxes() {
    for (let i = 0; i < column; i++) {
        const colDivs = document.createElement('div');
        colDivs.classList.add('colBoxes');
        for (let j = 0; j < row; j++) {
            const rowDivs = document.createElement('div');
            rowDivs.classList.add('rowBoxes');
            colDivs.appendChild(rowDivs);
        }
        grid.appendChild(colDivs);
    }

}
appendBoxes();