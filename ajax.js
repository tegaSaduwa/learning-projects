const button1 = document.getElementById('button1');
button1.addEventListener('click', loadCustomer);
	
 function loadCustomer(e){
	const xhr = new XMLHttpRequest();
	xhr.open('GET','customer.json', true);
	// // xhr.onreadystatechange = function () {
	// // 	if(this.status === 200 && this.readyState === 4) {
	// // 		console.log(this.responseText);
	// 	}
	// }
	 xhr.onload = function (){
 	if(this.status === 200) {
 	   const customer = JSON.parse(this.responseText);
		console.log(this.responseText);
		const output = `
		<ul>
		<li> id: ${customer.id}</li>
        <li>name:${customer.name}</li>
        <li>company:${customer.company}</li>
	    <li> phone:${customer.phone}</li>
        </ul>`;   
	document.getElementById('customer').innerHTML = output;
	
		}
	}
	xhr.send();
};
	