import {Store} from "./Store.js";

export class UI {
    static displayBooks () {

        const books = Store.getBooks();

        books.forEach((book) => {
            UI.addBookToList(book)
        });
    }

    static addBookToList (book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>
                <a href="#" class="btn btn-danger sm delete">
                    X
                </a>
            </td>
        `;
        list.appendChild(row);
    }

    static deleteRow(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const alertMessage = document.createElement('div');
        alertMessage.className = `alert alert-${className}`;
        alertMessage.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(alertMessage, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        },3000);
    }

    static clearFields () {
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }
}