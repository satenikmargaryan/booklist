import {UI} from '../UI.js';
import {Book} from '../Book.js';
import {Store} from "../Store.js";

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {

    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title, author, isbn);

    if(title === '' || author === '' || isbn === '') {
        UI.showAlert('Please Fill All Fields', 'danger');
    } else {
        UI.addBookToList(book);
        Store.addBook(book);
        UI.showAlert('Book Was Created Successfully', 'success');
        UI.clearFields();
    }

});

document.querySelector('#book-list').addEventListener('click', (e) => {
   UI.deleteRow(e.target);
   Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    UI.showAlert('Book Was Removed Successfully', 'success');
});