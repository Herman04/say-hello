var nameInput = document.querySelector('input');
var form = document.querySelector('form');
var p = document.createElement('p');

nameInput.addEventListener('keypress', function (event) {
  if (event.which == 13) {
    if (nameInput.value.length == 0) {
      var message = 'Oops looks like the text field is empty!'
      writeToDocument(message);
    } else {
      message = 'Hello ' + nameInput.value + ', nice to meet you!';
      writeToDocument(message);
    }
  }
})

function writeToDocument (message) {
  p.innerHTML = message;
  form.appendChild(p);
  event.preventDefault();

}
/*console log with quotes is a string*/

/*nameInput.addEventListener('keypress', function (e){
  console.log(e)
  e.preventDefault();
})*/
