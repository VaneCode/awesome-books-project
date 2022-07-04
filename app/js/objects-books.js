// ----------------------VARIABLES----------------//

// Get DOM elements
const booksUl = document.querySelector('#booksUl');
const addBtn = document.querySelector('#addBtn');
const bookFrm = document.querySelector('#bookFrm');
const bookAuthor = document.querySelector('#bookAuthor');
const bookTitle = document.querySelector('#bookTitle');

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


// ---------------------EVENTS-----------------------//
window.onload = () => {
  books.forEach((book) => {
    booksUl.appendChild(generateBookli(book));
  });
};


bookFrm.addEventListener('click', () =>{
  preventDefault();
  
  const newBook = {};

})