/* eslint-disable max-classes-per-file */

//----------------VARIABLE DECLARAIONS------------------//

// Get DOM elements
const booksUl = document.querySelector('#booksUl');
const addBtn = document.querySelector('#addBtn');

//----------------CLASSES-------------------------------//
class bookCls {

    //Method to create a new book   
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}

class booksDataCls {

    //Method to create an empty array that will contain the books
    constructor() {
        return [];
    }

    // Method to add a new book to books array
    addNewBook() {
        // Get the information from form
        const bookAuthor = document.querySelector('#bookAuthor').value;
        const bookTitle = document.querySelector('#bookTitle').value;

        // Calculate the id
        const lastBook = this[this.length - 1];
        const bookId = lastBook.id + 1;

        // Create a new book object
        const newBook = new bookCls(bookId, bookTitle, bookAuthor);

        // Add the new book object to books array
        this.push(newBook);

        // Local storage
        localStorage.setItem('books', JSON.stringify(books));

        // Renderize my booksUl
        //generateBooksUl();
    }

    //Method to remove a book from the array books
    removeBook(i) {
        this = this.filter((book) => Number(book.id) !== Number(i));
        // Local storage
        localStorage.setItem('books', JSON.stringify(this));
        //generateBooksUl();
    }
}

let books = new booksDataCls();

class bookDisplay {

    //Method to create a li element for booksUl
    generateBookli(book) {
        // Create DOM elements
        const li = document.createElement('li');
        const div = document.createElement('div');
        const pTitle = document.createElement('p');
        const pAuthor = document.createElement('p');
        const removeBtn = document.createElement('button');
        const hr = document.createElement('hr');

        // Add text
        pTitle.textContent = `${book.title}`;
        pAuthor.textContent = `${book.author}`;
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('id', `${book.id}`);

        // Build li
        div.appendChild(pTitle);
        div.appendChild(pAuthor);
        div.appendChild(removeBtn);
        div.appendChild(hr);
        li.appendChild(div);

        return li;
    }

    //Method to generate booksUl
    generateBooksUl(){
        booksUl.textContent = '';
        books.forEach((book) => {
            booksUl.appendChild(generateBookli(book));
        });
    }

}

//-----------------EVENTS--------------------------------//