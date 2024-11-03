const myLibrary = [];

// Define books to test the web
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'read');
addBookToLibrary('Moby Dick', 'Herman Melville', 823, 'not read yet');

// Call function to display the books of the library
displayLibrary();

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBook(book){
    const contElement = document.getElementById("book_container");

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages + " pages.";
    read.textContent = book.read;

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