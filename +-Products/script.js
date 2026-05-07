document.body.style.cssText = `
    background-color:#ddd;
    font-family:Tahoma, Arial;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;`;
    
    let header = document.createElement("header");
    header.className = "website-head";
    header.style.cssText = `
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:17px 30px;
        background: #fefefe;`
    
    let logo = document.createElement("div");
    logo.className = "logo";
    logo.title = "Website Logo"
    logo.textContent = "Oanekrif"
    logo.style.cssText = `
        color:rgb(35,169,110);
        font-weight:bold;
        font-size:26px;`
    header.appendChild(logo);
    
    let nav = document.createElement("nav");
    nav.style.cssText = "color:rgb(119, 119, 119)";
    let home = document.createElement("a");
    home.innerHTML = "Home";
    home.style.cssText = `text-decoration:none;margin-left:20px;font-size: 16px;`;
    let about = document.createElement("a");
    about.innerHTML = "About";
    about.style.cssText = `text-decoration:none;margin-left:20px;font-size: 16px;`;
    let service = document.createElement("a");
    service.innerHTML = "Service";
    service.style.cssText = `text-decoration:none;margin-left:20px;font-size: 16px;`;
    let contact = document.createElement("a");
    contact.innerHTML = "Contact";
    contact.style.cssText = `text-decoration:none;margin-left:20px;font-size: 16px;`;
    
    nav.appendChild(home);
    nav.appendChild(about);
    nav.appendChild(service);
    nav.appendChild(contact);
    header.appendChild(nav);
    
    
    let content = document.createElement("div");
    content.className = "content";
    content.style.cssText = `
        display: flex;
        padding: 15px;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        flex: 1;
        box-sizing: border-box;
        background-color: #ddd;`
    content.style.flex = "1";
    
    let btnDec = document.createElement("span");
    btnDec.textContent = "-";
    btnDec.style.cssText = `
        position: fixed;
        bottom: 90px;
        right: 30px;
        z-index: 9999;
        background-color: rgb(35,169,110);
        color: white;
        border: 1px solid whith;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        cursor: pointer;
        user-select: none;
    `;
    let btnInc = document.createElement("span");
    btnInc.textContent = "+";
    btnInc.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 9999;
        background-color: rgb(35,169,110);
        color: white;
        border: 1px solid white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        cursor: pointer;
        user-select: none;
    `;
    
    let i = 0;
    btnInc.addEventListener("click", event => {
        i++;
    let product = document.createElement("div");
    product.className = "product";
    product.style.cssText = `
        padding:20px;
        background-color:rgb(255,255,255);
        border:1px solidrgb(221,221,211);
        width:calc((100% - 40px) / 3);
        box-sizing:border-box;
        text-align:center;
        color:rgb(136,136,136);
        border-radius:6px;`;
    let myspan = document.createElement("span");
    myspan.innerHTML = `${i}`;
    myspan.style.cssText = `font-size:40px;color:black;display:block;margin-bottom:10px;margin-top:10px;`
    
    product.appendChild(myspan);
    myspan.after("Product");
    window.scrollTo(0, document.body.scrollHeight);
    content.appendChild(product);
})
btnDec.addEventListener("click", event => {
    if (i > 0) {
        i--;
        window.scrollTo(0, document.body.scrollHeight);
        content.lastElementChild.remove();
    }
})


let footer = document.createElement("footer");
footer.className = "footer";
footer.style.cssText = "background-color:rgb(35,169,110);font-size:26px;text-align:center;padding:20px;color:white;";
footer.textContent = "© Copyright 2026";

document.body.append(btnDec, btnInc, header, content, footer);