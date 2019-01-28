const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Boston MA',
    image: 'http://randomuser.me/api/portraits/men/82.jpg'
  },

    {
      name: 'joana',
      age: 22,
      gender: 'female',
      lookingFor: 'male',
      location: 'California CA',
      image: 'http://randomuser.me/api/portraits/women/82.jpg'
  
  
    },

    {
      name: 'Jason Mark',
      age: 33,
      gender: 'male',
      lookingFor: 'female',
      location: 'Boston MA',
      image: 'http://randomuser.me/api/portraits/men/82.jpg'
  
  
    }


]



const profiles = profileInterator(data);
// next event
document.querySelector('#next').addEventListener('click', nextProfile);

 function nextProfile() {

  let current = profiles.next().value;

  document.getElementById('profileDisplay').innerHTML =
  `
  <ul class = "list-group">
  <li class="list-group-item"> Name: ${current.name}</li>
  <li class="list-group-item"> Age: ${current.age}</li> 
  <li class="list-group-item"> Gender: ${current.gender}</li> 
  <li class="list-group-item"> Looking For: ${current.lookingFor}</li>
  <li class="list-group-item">Location: ${current.location}</li>
  </ul>
  `;
  document.getElementById('imageDisplay').innerHTML =`
  <img src="${current.image}">`; 
  

} 
// interator
function profileInterator (profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length ? {value : profiles[nextIndex++], done: false} :
      {done : true}
    }
  };
 
 } 

























