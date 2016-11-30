var nameInput = document.getElementById('name');
var form = document.querySelector('form');
var p = document.createElement('p');

nameInput.addEventListener('keypress', function (event) {
  if (event.which == 13) {
    p.innerHTML = 'Hello ' + nameInput.value + ', nice to meet ya!';
    console.log(p);
    form.appendChild(p);
    event.preventDefault();
  }
})

/*console log with quotes is a string*/

/*nameInput.addEventListener('keypress', function (e){
  console.log(e)
  e.preventDefault();
})*/
