	const github = new Github;
	//init UI
	const ui = new UI;
	//search input
	const searchUser = document.getElementById('searchUser');
	//get the value of the user
	searchUser.addEventListener('keyup', (e) => {
	//Get input text
	const userText = e.target.value;

	 if (userText !== ''){

	 //make http call
	 github.getUser(userText)
	 .then(data => {
	 	if(data.profile.message === 'Not Found') {
	 		//show alert
	 		ui.showAlert('user not found', 'alert alert-danger');
         
	 	}else {
	 		// Show Profile 
	 		ui.showProfile(data.profile);
	 		ui.showRepos(data.repos);
	 	}
	 })
	}else {
		//clear profile
		ui.clearProfile();
	}
	});