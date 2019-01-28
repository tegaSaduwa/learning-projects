// const http = new easyHTTP;
// // get users
// const users= http.get('http://jsonplaceholder.typicode.com/users')
// .then(data => console.log (data))
// .catch(err=> console.log (err));


//create data
 const data = {
	name:'Tega Peter',
	username: 'tegaPeter',
	email: 'tegapeter8@gmail.com'
}
// const http = new easyHTTP;

// // post user
// const users= http.post('http://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log (data))
// .catch(err=> console.log (err));

// const http = new easyHTTP;

// // put user: update post
// const users= http.put('http://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log (data))
// .catch(err=> console.log (err));

const http = new easyHTTP;

// DELETE USER 
const users= http.delete('http://jsonplaceholder.typicode.com/users/2')
.then(data => console.log (data))
.catch(err=> console.log (err));
