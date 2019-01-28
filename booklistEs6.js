class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

class UI {
	addBookToList(book) {
		const list = document.getElementById('book-list');
		//create element
		const row = document.createElement('tr');
		//insert cols inside row
		row.innerHTML = `<td>${book.title}</td>
                         <td>${book.author}</td>
                         <td>${book.isbn}</td>
                         <td><a href="#" class ="delete">X</a></td> `;
		//append child;
		list.appendChild(row);
	}
	//show alerts
	showAlert(message, className) {
		//create div
		const div = document.createElement('div');
		div.className = ` alert ${className}`;
		//add textNODE
		div.appendChild(document.createTextNode(message));
		//get parent
		const container = document.querySelector('.container');
		//get form
		const form = document.querySelector('#book-form');
		//insert alert
		container.insertBefore(div, form);
		//time out after 3secs
		setTimeout(function() {
			document.querySelector('.alert').remove();
		}, 3000);
	}
	deleteBook(target) {
		if (target.className === 'delete') {
			target.parentElement.parentElement.remove();
		}
	}
	clearFields() {
		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value = '';
	}
}
class Store {
	static getBooks() {
		let books;
		if (localStorage.getItem('books') === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
		}
		return books;
	}
	static displayBooks() {
		const books = Store.getBooks();
		books.forEach(function(book) {
			const ui = new UI();
			//add book to UI;
			ui.addBookToList(book);
		});
	}
	static addBooks(book) {
		const books = Store.getBooks();
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}
	static removeBooks(isbn) {
		//get books from ls
		const books = Store.getBooks();
		//loop through
		books.forEach(function(book, index) {
			if (book.isbn === isbn) {
				books.splice(index, 1);
			}
		});
		localStorage.setItem('books', JSON.stringify(books));
	}
}
//DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);
// event listeners for adding book
const form = document.getElementById('book-form');
form.addEventListener('submit', function(e) {
	e.preventDefault();
	// get form values
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;
	// instantiate book obj
	const book = new Book(title, author, isbn);
	// instantiate a ui bbj
	const ui = new UI();
	console.log(ui);
	if (title === '' || author === '' || isbn === '') {
		//error alert
		ui.showAlert('Please fill in fields', 'error');
	} else {
		// add book to list
		ui.addBookToList(book);
		//add to ls
		Store.addBooks(book);
		// show success
		ui.showAlert('Book Added!', 'success');
		//clear fields
		ui.clearFields();
	}
});
// event listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {
	e.preventDefault();
	const ui = new UI();
	//delete book
	ui.deleteBook(e.target);
	//remove from ls
	Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);

	//show message
	ui.showAlert('book removed!', 'success');
});
