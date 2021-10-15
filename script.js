 //create a container element and save it as a child of the body element
 let newContainer = document.createElement("container");
 newContainer.classList.add("container");
 document.body.appendChild(newContainer);

function createDiv (i) {
    const container = document.querySelector("container");
    const element = document.createElement("div");
    element.textContent = i
    container.appendChild(element);
};

function addColor (e) {
    this.classList.add("hover");
};

const button = document.querySelector('#resetBtn');
button.addEventListener('click', resetGrid)

function resetGrid () {
    do {
        var sides = prompt("Please enter the number of squares per side (max 100):");
    } 
    while (!(sides >0 && sides <=100));

    //delete old container
    const container = document.querySelector("container");
    container.parentNode.removeChild(container);

    //create a container element and save it as a child of the body element
    let newContainer = document.createElement("container");
    newContainer.classList.add("container");
    document.body.appendChild(newContainer);


    for (let i = 0; i< sides*sides; i++) {
        createDiv(i);
    };
    const divs = document.querySelectorAll('div');
    divs.forEach(item => item.addEventListener('mouseover', addColor));
};