let form = document.querySelector('form');
let ul = document.querySelector('ul');
let addBtn = document.querySelector('#addBtn');
let clearBtn = document.querySelector('#clear');
let inputNew = document.querySelector('#newTask');
let inputFilter = document.querySelector('#filter');
//DOM load event so we can be able to see data that is already persisted in localstorage
document.addEventListener('DOMContentLoaded', getTasks);
form.addEventListener('submit', addTask);
ul.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTasks);
inputFilter.addEventListener('keyup', filter);

// get task from LS
function getTasks() {
	//initialize task
	let tasks;
	//check if a data is there; if there isnt set it to an empty array
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
		// if there is set it to anything that is there
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	//now we gonna loop through the tasks
	tasks.forEach(function(task) {
		let li = document.createElement('li');
		li.className = 'New';
		//append input.value to li
		li.appendChild(document.createTextNode(task)); //because there is no task input from val here(i.einputnew)
		//create a span element to delete
		let DelLink = document.createElement('span');
		DelLink.className = 'delete';
		// add textcontent to span
		DelLink.textContent = 'x';
		li.appendChild(DelLink);
		//append li to ul
		ul.appendChild(li);
	});
}

function addTask(e) {
	// prevent default
	e.preventDefault();

	if (inputNew === '') {
		alert('add a task');
	}
	//create an li
	let li = document.createElement('li');
	li.className = 'New';
	//append input.value to li
	li.appendChild(document.createTextNode(inputNew.value));
	//create a span element to delete
	let DelLink = document.createElement('span');
	DelLink.className = 'delete';
	// add textcontent to span
	DelLink.textContent = 'x';
	li.appendChild(DelLink);
	//append li to ul
	ul.appendChild(li);
	// store task in local storage
	storeTask(inputNew.value);

	// clear input
	inputNew.value = '';
}

function storeTask(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
	//select the element that contains the classlist odf the item to be deleted
	if (e.target.classList.contains('delete')) {
		//now remove the parentelement of the deleted item
		e.target.parentElement.remove();
		// remove target from local storage
		removeTaskFromls(e.target.parentElement);
	}
}

function removeTaskFromls(taskItem) {
	//initialize task
	let tasks;
	//check if a data is there; if there isnt set it to an empty array
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
		// if there is set it to anything that is ther
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	//loop through the task
	tasks.forEach(function(task, index) {
		// get textcontent of the list-item and check if it maTCHES THE TASK, IF IT DOES SPLICE EACH
		if (li.textContent === task) {
			tasks.splice(index, 1);
		}
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(e) {
	ul.innerHTML = '';
	clearTasksFromLs();
}

function clearTasksFromLs() {
	localStorage.clear();
}

function filter(e) {
	//target the input and put in a variable
	let text = e.target.value.toLowerCase();
	//loop through the lis using a queryselector all because it returns a nodelist
	document.querySelectorAll('li').forEach(function(task) {
		//get the textcontent of each task
		const item = task.firstChild.textContent;
		//now get the indexOf of the value of the filter and set the condition to negative -1(i.e not present)
		if (item.toLowerCase().indexOf(text) != -1) {
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}
	});
}
