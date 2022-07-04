// ----------------------VARIABLES----------------//

// Get DOM elements
const booksUl = document.querySelector('#booksUl');
const addBtn = document.querySelector('#addBtn');

// Data storage
const books = [
  {
    id: 1,
    title: 'Lorem ipsum',
    author: 'Testorro Testy',
  },
  {
    id: 2,
    title: 'Second Book',
    author: 'Testorro Testy',
  },
];

// --------------------FUNCTIONS-------------------//

//Create a li element for booksUl
const generateBookli = (book) => {
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
};

//Generate booksUl 
const generateBooksUl = () => {
  booksUl.textContent = '';
  books.forEach((book) => {
    booksUl.appendChild(generateBookli(book));
  });
};

//To add a new book to books array
const addNewBook = () => {
  //Get the information from form
  const bookAuthor = document.querySelector('#bookAuthor').value;
  const bookTitle = document.querySelector('#bookTitle').value;
  console.log(bookAuthor);
  console.log(bookTitle);
  //Calculate the id
  const bookId = books.length + 1;
  console.log(bookId);

  //Create a new book object 
  const newBook = {};
  newBook.id = bookId;
  newBook.title = bookTitle;
  newBook.author = bookAuthor;

  console.log(newBook);

  //Add the new book object to books array
  books.push(newBook);
  console.log(books);

  //Renderize my booksUl
  generateBooksUl();
};




// ---------------------EVENTS-----------------------//
addBtn.addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Call function to add a book
  addNewBook();
});

window.onload = () => {
  generateBooksUl();
};
