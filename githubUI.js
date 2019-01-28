class UI {
	constructor () {
		this.profile = document.getElementById('profile');
	}

	showProfile (user) {
		console.log(user);
		this.profile.innerHTML = 
		`<div class = "card  card-body  mb-3">
		   <div class= "row">
		    <div class = "col-md-3">
		    <img class = "img-fluid mb-2" src = ${user.avatar_url}">
		      <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">
		      view profile </a>
			     </div>
			    <div class = "col-md-9">
			     <span class="badge badge-primary">
			     Public Repos: ${user.public_repos}
			    </span>
			    <span class="badge badge-secondary">
			     Public Gists: ${user.public_gists}
			    </span>
			    <span class="badge badge-success">
			     followers: ${user.followers}
			    </span>
			    <span class="badge badge-info">
			     Following: ${user.following}
			    </span>
		    <br>
		    <ul class="list-group">
		    <li class="list-group-item"> Company: ${user.company}</li>
		    <li class="list-group-item"> Website/blog: ${user.blog}</li>
		    <li class="list-group-item"> Location: ${user.location}</li>
		    <li class="list-group-item"> Member: ${user.created_at}</li>
		    </ul>
		   </div>
		 </div>
		</div>
		<h3 class="page-heading mb-3">Latest Repos</h3>
		<div id="repos">
		`;

	}

	showRepos (repos) {
		let output = '';
		repos.forEach(function(repo){
			output += `
			<div class = "card  card-body  mb-2">
		        <div class= "row">
		             <div class = "col-md-6">
		             <a href="${repos.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">
		                       ${repos.name} </a>
			              </div>

			    <div class = "col-md-6">
		        <span class="badge badge-primary">
			     Stars: ${repos.stargazers_count}
			    </span>
			    <span class="badge badge-secondary">
			     Watchers: ${repos.watchers_count}
			    </span>
			    <span class="badge badge-success">
			     Forks: ${user.form_count}
			    </span>
			      </div>
			    </div>
			 </div>
			`;
		});
		// Output repos
		document.getElementById('repos').innerHTML = output;
	}

	showAlert (msg, className){
		//clear any remaining alerts
		this.clearAlerts();
		//create a div
		const div = document.createElement('div');
		div.className = className;
		//add text
		div.appendChild(document.createTextNode(msg));
		//get parent to insert
		const container = document.querySelector('.searchContainer');
		const search = document.querySelector('.search');
		//insert alert
		container.insertBefore(div,search);
		// timeOut after 3secs
		setTimeout (()=> {
		this.clearAlerts();
		}, 3000);
		}

    clearAlerts() {
    	//get the div
    	const currentAlert = document.querySelector('.alert');
    	// clear it
    	if (currentAlert) {
    		currentAlert.remove();
    	}
    }
	clearProfile () {
		this.profile.innerHTML = ''; }


}

	