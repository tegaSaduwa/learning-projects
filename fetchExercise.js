document.getElementById('button2').addEventListener('click', getExternal);

function getExternal(){
	fetch('https://api.github.com/users')
	.then(res => res.json())
	.then(data => {
		console.log(data);
		let output = '';
		 data.forEach (user => {
			output+=`<li>${user.login}</li>` ;
		});
		document.querySelector('.output').innerHTML = output;
	})
	.catch(err => console.log(err));
}