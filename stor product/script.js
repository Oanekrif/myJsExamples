const displayForm = _ => {
    document.querySelector('#form').style.display = 'block';
    document.querySelector('#tableau').style.display = 'none';
}

const closeForm = _ => {
    document.querySelector('#form').style.display = 'none';
    document.querySelector('#tableau').style.display = 'block';
}

document.querySelector('#closeBTN').addEventListener('click', _ => closeForm());
document.querySelector('#btnForm').addEventListener('click', _ => displayForm());

document.querySelector('#addBTN').addEventListener('click', e => {
    e.preventDefault();
    const form = document.querySelector('form');
    const produit = Object.fromEntries(new FormData(form));
    
    form.reset();
    closeForm();
    addToTable(produit);
    if (isValidProduit(produit)) {
        addToLocalStorage(produit);
    }
})

const addToTable = produit => {
    const tableData = document.querySelector('#tableData');
    const row = tableData.insertRow();
    for (const [key, value] of Object.entries(produit)) {
        const cell = row.insertCell();
        cell.textContent = value;
    }
    const cell = row.insertCell();
    cell.innerHTML = '<img src="https://files.softicons.com/download/toolbar-icons/vista-base-software-icons-2-by-icons-land/ico/DeleteRed.ico" alt="delete" class="delete">';
    cell.querySelector('.delete').addEventListener('click', e => {
        e.target.parentElement.parentElement.remove();
        localStorage.removeItem(produit.id);
    });
}

const addToLocalStorage = produit => {
    localStorage.setItem(produit.id, JSON.stringify(produit));
}

const isValidProduit = produit => {
    return produit.id;
};

document.addEventListener('DOMContentLoaded', _ => {
    let produits = [];

    for (let i = 0; i < localStorage.length; i++) {
        const produit = JSON.parse(localStorage.getItem(localStorage.key(i)));
        produits.push(produit);
    }

    // sort by id (or any field)
    produits.sort((a, b) => a.id - b.id);

    produits.forEach(addToTable);
})