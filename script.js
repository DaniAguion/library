const myLibrary = [];

// Define books for the inital test
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'Read');
addBookToLibrary('Moby Dick', 'Herman Melville', 823, 'Not Read');


// Call function to display the books of the library
displayLibrary();



// Events Listeners
const newBookBtn = document.getElementById("newBookBtn");
const addBookBtn = document.getElementById("addBookBtn");
const cancelBtn = document.getElementById("cancelBtn");
const newBookDlg = document.getElementById("newBookDlg");


// Event to show the dialog to enter the add the new book
newBookBtn.addEventListener("click",function() {
    newBookDlg.showModal();
});


// Event to add the new book to the array and to the DOM
addBookBtn.addEventListener("click", function(event) {
    event.preventDefault();

    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let pages = document.getElementById("pagesInput").value;
    let readCheck = document.getElementById("readInput").checked;
    let read;
    
    if (readCheck){
        read = "Read";
    }
    else{
        read = "Not Read";
    }

    addBookToLibrary(title, author, pages, read);
    displayLibrary();
    newBookDlg.close();
})


// Event to avoid adding the new book
cancelBtn.addEventListener("click", function() {
    newBookDlg.close();
})


// Event to read deleteBtn PENDING
for (let i of allDeleteBtn){

}



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


// Function to display one book in the DOM
function displayBook(book, index){
    const contElement = document.getElementById("bookContainer");

    const cardElement = document.createElement("div");

    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages + " pages";
    read.textContent = book.read;

    cardElement.classList.add("card");
    title.classList.add("bookTitle");
    deleteBtn.classList.add("deleteBtn");

    cardElement.appendChild(deleteBtn);
    cardElement.appendChild(title);
    cardElement.appendChild(author);
    cardElement.appendChild(pages);
    cardElement.appendChild(read);
    contElement.appendChild(cardElement);

    //  Create an event for the delete button
    deleteBtn.addEventListener("click",function() {
        myLibrary.splice(index, 1);
        displayLibrary();
    });
}


// Function to display all the books in the array "myLibrary"
function displayLibrary(){
    const contElement = document.getElementById("bookContainer");
    contElement.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++){
        displayBook(myLibrary[i], i);
    }
}