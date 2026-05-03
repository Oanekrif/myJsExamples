let elements = [];
let i = 1;

function createP() {
    let p = document.createElement("p");
    p.innerHTML = `Hello World ${i}!`;
    p.style.cssText = `
        font-size: 30px;
        margin: 10px;
        padding: 10px;
        border-radius: 100px;
        background-color: #eee;
    `
    
    window.onclick = () => {
        if (elements.length === 0) {
            elements.push(p);
            document.body.appendChild(p);
        } else {
            let copy = createP();     // create new element with handler
            elements.push(copy);
            document.body.appendChild(copy);
        }
    };
    
    i++;
    return p;
}

document.body.style.cssText = `
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    cursor: pointer;
    user-select: none;
    // overflow: hidden;
    background-color: #422875;
`;
createP();