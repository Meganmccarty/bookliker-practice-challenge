document.addEventListener("DOMContentLoaded", getBooks);

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
    data.map(bookObj => {
        const li = document.createElement('li');
        li.innerText = bookObj.title;
        list.append(li);
        li.addEventListener('click', () => showBookDetails(bookObj));
        return list;
    });
}

function showBookDetails(bookObj) {
    showPanel.innerHTML = '';

    const title = document.createElement('h1');
    const subtitle = document.createElement('h2');
    const img = document.createElement('img');
    const author = document.createElement('h3');
    const desc = document.createElement('p');
    const users = document.createElement('ul');

    bookObj.users.map(user => {
        const userLi = document.createElement('li');
        userLi.innerText = user.username;
        users.append(userLi);
        return users;
    });

    title.innerText = bookObj.title;
    subtitle.innerText = bookObj.subtitle;
    img.src = bookObj.img_url;
    author.innerText = bookObj.author;
    desc.innerText = bookObj.description;

    showPanel.append(img, title, subtitle, author, desc, users);
}