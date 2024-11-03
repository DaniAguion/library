const myLibrary = [];

// Define books to test the web
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
addBookToLibrary('Moby Dick', 'Herman Melville', 823, false);


// Call function to display the books of the library
displayLibrary();


// Events Listeners
const newBookBtn = document.getElementById("newBookBtn");
const addBookBtn = document.getElementById("addBookBtn");
const cancelBtn = document.getElementById("cancelBtn");

newBookBtn.addEventListener("click",function() {
    newBookDlg.showModal();
});

addBookBtn.addEventListener("click", function(event) {
    event.preventDefault();

    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let pages = document.getElementById("pagesInput").value;
    let read = document.getElementById("readInput").checked;

    // Peding: Add Book to DOM
    addBookToLibrary(title, author, pages, read);

    newBookDlg.close();
})

cancelBtn.addEventListener("click", function() {
    newBookDlg.close();
})



// Function to construct Book objects
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


// Function to add book to the library array
function addBookToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


// Function to display books of the library array in the DOM
function displayBook(book){
    const contElement = document.getElementById("bookContainer");

    const cardElement = document.createElement("div");


    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages + " pages";
    read.textContent = book.read;

    cardElement.classList.add("card");
    title.classList.add("bookTitle");

    cardElement.appendChild(title);
    cardElement.appendChild(author);
    cardElement.appendChild(pages);
    cardElement.appendChild(read);

    contElement.appendChild(cardElement);
}

function displayLibrary(){
    for (let i = 0; i < myLibrary.length; i++){
        displayBook(myLibrary[i]);
    }
}