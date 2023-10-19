let row = 16;
let column = 16;
const grid = document.querySelector('.container');
let colClicks = document.getElementsByClassName('colBoxes');
let rowClicks = document.getElementsByClassName('rowBoxes');

// function color(event) {
//     event.target.style.backgroundColor = 'black';
// }

function appendBoxes() {
    for (let i = 0; i < column; i++) {
        let colDivs = document.createElement('div');
        colDivs.classList.add('colBoxes');
        for (let j = 0; j < row; j++) {
            let rowDivs = document.createElement('div');
            rowDivs.classList.add('rowBoxes');
            colDivs.appendChild(rowDivs);
        }
        grid.appendChild(colDivs);
    }
}
appendBoxes();

colClicks.forEach(clk => clk.addEventListener('mouseover', color));
// rowClicks.forEach(clk => clk.addEventListener('click', color));
// grid.addEventListener('mousedown', event =>)

