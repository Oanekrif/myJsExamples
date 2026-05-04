window.prompt("check the checkbox for valid the link...");

// ======= HEAD elements =======
document.title = "Document Test";

// meta viewport & charset (normally in HTML head)
let charset = document.createElement("meta");
charset.setAttribute("charset", "UTF-8");
document.head.prepend(charset);

let viewport = document.createElement("meta");
viewport.name = "viewport";
viewport.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(viewport);

// stylesheet link (<link rel="stylesheet" href...>)
let linkCSS = document.createElement("link");
linkCSS.rel = "stylesheet";
linkCSS.href = "style.css";
document.head.appendChild(linkCSS);


// ======== BODY content ========
let div = document.createElement("div");

let check = document.createElement("input");
check.type = "checkbox";

let a = document.createElement("a");
a.href = "http://google.com";
a.target = "_blank";
a.textContent = "google.com";
a.rel = "noopener noreferrer";

// append elements
div.appendChild(check);
div.appendChild(a);
document.body.appendChild(div);

// ========== logic ==========
a.addEventListener("click", e => {
    if (!check.checked) e.preventDefault();
});


// ======= styles =======
document.body.style.cssText =
    "margin:0;height:100vh;display:flex;justify-content:center;\
    align-items:center;background-color:#FDF2FF;";
div.style.cssText = "text-align:center;font-size:40px;\
    background-color:#E6D2FF;padding:5px;";
check.style.cssText = "width:30px;height:30px;margin-right:10px;";