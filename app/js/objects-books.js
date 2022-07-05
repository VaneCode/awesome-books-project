// ----------------------VARIABLES----------------//

// Get DOM elements
const booksUl = document.querySelector('#booksUl');
const addBtn = document.querySelector('#addBtn');

// Data storage
let books = [
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

// Create a li element for booksUl
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

// Generate booksUl
const generateBooksUl = () => {
  booksUl.textContent = '';
  books.forEach((book) => {
    booksUl.appendChild(generateBookli(book));
  });
};

// To add a new book to books array
const addNewBook = () => {
  // Get the information from form
  const bookAuthor = document.querySelector('#bookAuthor').value;
  const bookTitle = document.querySelector('#bookTitle').value;

  // Calculate the id
  const lastBook = books[books.length - 1];
  const bookId = lastBook.id + 1;

  // Create a new book object
  const newBook = {};
  newBook.id = bookId;
  newBook.title = bookTitle;
  newBook.author = bookAuthor;

  // Add the new book object to books array
  books.push(newBook);

  // Local storage
  localStorage.setItem('books', JSON.stringify(books));

  // Renderize my booksUl
  generateBooksUl();
};

// To remove a book from the array books
const removeBook = (i) => {
  books = books.filter((book) => Number(book.id) !== Number(i));
  // Local storage
  localStorage.setItem('books', JSON.stringify(books));
  generateBooksUl();
};

// ---------------------EVENTS-----------------------//

addBtn.addEventListener('click', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Call function to add a book
  addNewBook();
});

// Add eventListener to btnRemove
booksUl.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const { id } = e.target;
    removeBook(id);
  }
});

window.addEventListener('load', () => {
  // Local storage
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
  } else {
    localStorage.setItem('books', JSON.stringify(books));
  }

  // Create booksUl
  generateBooksUl();
});
