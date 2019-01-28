let form = document.querySelector('#loan-form');

form.addEventListener('submit', calculateResults);

function calculateResults(e) {
	e.preventDefault();
	const amount = document.querySelector('#amount');
	const interest = document.querySelector('#interest');
	const years = document.querySelector('#years');
	const monthlyPayment = document.querySelector('#monthly-payments');
	const totalPayment = document.querySelector('#total-payments');
	const totalInterest = document.querySelector('#total-interests');

	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value) * 12;

	//compute monthly payments
	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = principal * x * calculatedInterest / (x - 1);

	if (isFinite(monthly)) {
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
	} else {
		showErrors('please check your numbers !!!');
	}
}
function showErrors(error) {
	//create div
	const errorDiv = document.createElement('div');
	// get elements
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');
	// add class
	errorDiv.className = 'alert alert-danger';
	// create a textNode and append to div
	errorDiv.appendChild(document.createTextNode(error));
	// insert error above heading
	card.insertBefore(errorDiv, heading);
	//set timeOut for the error div;
	setTimeout(clearError, 3000);
}
function clearError() {
	document.querySelector('.alert').remove();
}
