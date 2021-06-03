document.addEventListener("DOMContentLoaded", function() {});

const listPanel = document.getElementById('list-panel');
const list = document.getElementById('list');
const showPanel = document.getElementById('show-panel');

const booksURL = 'http://localhost:3000/books';

function getBooks() {
    return fetch(booksURL)
        .then(response => response.json())
        .then(data => renderBooks(data));
}

function renderBooks(data) {
    data.map(bookObj => console.log(bookObj));
}
