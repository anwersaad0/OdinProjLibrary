let myLibrary = [];

//HTML imports
const bookDirectory = document.getElementById("bookdirectorydiv");
const addButton = document.getElementById("addbook");
const bookModal = document.getElementById("bookmodal");

const bookNameInput = document.getElementById("bookname");
const authorInput = document.getElementById("author");
const pageCountInput = document.getElementById("pagecount");
const ifReadBox = document.getElementById("ifread");
const submitBtn = document.getElementById("submitbtn");
//end of imports

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function deleteBook(div, selectedBook) {
    bookDirectory.removeChild(div);
    for (var i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i] == selectedBook) {
            myLibrary.splice(i, i + 1);
        }
    }
    console.log(myLibrary.length);
}

function changeRead(button) {
    if (button.textContent == "Not Read") {
        button.textContent = "Have Read";
        button.style.background = "#63d168";
        button.style.border = "4px solid #4fb354";
        button.style.borderRadius = "8px";
    } else {
        button.textContent = "Not Read";
        button.style.background = "#e44141";
        button.style.border = "4px solid #cc3636";
        button.style.borderRadius = "8px";
    }
}

function AddBook() {
    const newBook = new Book(bookNameInput.value, authorInput.value, pageCountInput.value);

    let newBookDiv = document.createElement("div");
    newBookDiv.setAttribute("id", "bookdiv");
    bookDirectory.appendChild(newBookDiv);

    let newBookName = document.createElement("p");
    newBookName.textContent = "Title: " + bookNameInput.value;
    let newAuthor = document.createElement("p");
    newAuthor.textContent = "Author: " + authorInput.value;
    let newPageCount = document.createElement("p");
    newPageCount.textContent = "Pages: " + pageCountInput.value;

    let ifReadBtn = document.createElement("button");
    ifReadBtn.setAttribute("id", "ifreadbtn");
    if (ifReadBox.checked) {
        ifReadBtn.textContent = "Have Read";
        ifReadBtn.style.background = "#63d168";
        ifReadBtn.style.border = "4px solid #4fb354";
        ifReadBtn.style.borderRadius = "8px";
    } else {
        ifReadBtn.textContent = "Not Read";
        ifReadBtn.style.background = "#e44141";
        ifReadBtn.style.border = "4px solid #cc3636";
        ifReadBtn.style.borderRadius = "8px";
    }
    ifReadBtn.onclick = function(){changeRead(ifReadBtn)};

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "deletebtn");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function(){deleteBook(newBookDiv, newBook)};

    newBookDiv.appendChild(newBookName);
    newBookDiv.appendChild(newAuthor);
    newBookDiv.appendChild(newPageCount);
    newBookDiv.appendChild(ifReadBtn);
    newBookDiv.appendChild(deleteBtn);
    

    myLibrary.push(newBook);
    console.log(ifReadBox.checked);
}

addButton.addEventListener('click', function(e) {
    bookModal.style.display = "block";
});

window.addEventListener('click', function(e) {
    if (e.target == bookModal) {
        bookModal.style.display = "none";
    }
});

submitBtn.addEventListener('click', function(e) {
    
    if (bookNameInput.value != "" && authorInput.value != "" && pageCountInput.value != "") {
        AddBook();
        console.log(myLibrary.length);
        bookModal.style.display = "none";

        bookNameInput.value = "";
        authorInput.value = "";
        pageCountInput.value = "";
        ifReadBox.checked = false;
    }
});