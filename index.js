const createGrid = () => {
    const container = document.querySelector('.container');
    for(let i = 0; i < 256; i++) {
        let gridDivs = document.createElement('div');
        gridDivs.className = 'grid-div';
        container.appendChild(gridDivs);
    }
}

createGrid();