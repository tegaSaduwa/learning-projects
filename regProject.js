document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(e) {
  e.preventDefault();
  const name = document.getElementById('name');
  let re = /^[a-zA-Z]{2,25}$/;
  if (!re.test(name.value)) {
    name.classList.add('is-invalid');

  }else{
    name.classList.remove('is-invalid');

  }
  
}
function validateZip(e) {
  e.preventDefault();
  const zip= document.getElementById('zip');
  let re = /^[0-9]{6}$/;
  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');

  }else{
    zip.classList.remove('is-invalid');

  }
  
}
function validateEmail(e) {
  e.preventDefault();
  const email = document.getElementById('email');
  let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]{2,5})$/;
  if (!re.test(email.value)) {
    email.classList.add('is-invalid');

  }else{
    email.classList.remove('is-invalid');  
}
}

function validatePhone(e) {
  e.preventDefault();
  const phone= document.getElementById('phone');
  let re = /^(\+\d{3})?([0-9]{11,14})$/;
  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');

  }else{
    phone.classList.remove('is-invalid');

  }
}

