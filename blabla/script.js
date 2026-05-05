if (localStorage.length === 1)
    document.querySelector(".name").value = localStorage.name;

document.querySelector(".name").onblur = function () {
    localStorage.setItem("name", this.value);
}