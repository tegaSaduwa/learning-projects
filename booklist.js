//book constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}
// UI constructor
function UI() {}
UI.prototype.addBookToList = function(book) {
	const list = document.getElementById('book-list');
	//create element
	const row = document.createElement('tr');
	//insert cols inside row
	row.innerHTML = `<td>${book.title}</td>
                     <td>${book.author}</td>
                     <td>${book.isbn}</td>
                     <td><a href="#" class ="delete"> X </a></td> `;
	//append child;
	list.appendChild(row);
};
//show alerts
UI.prototype.showAlert = function(message, className) {
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
};
UI.prototype.deleteBook = function(target) {
	if (target.className === 'delete') {
		target.parentElement.parentElement.remove();
	}
};
UI.prototype.clearFields = function() {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
};

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
	//show message
	ui.showAlert('book removed!', 'success');
});
