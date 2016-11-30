var nameInput = document.getElementById('name');

nameInput.addEventListener('keypress', function (event) {
  if (event.which == 13) {
    console.log('Hello ' + nameInput.value + ', nice to meet ya!');
    event.preventDefault();
  }
})

/*console log with quotes is a string*/

/*nameInput.addEventListener('keypress', function (e){
  console.log(e)
  e.preventDefault();
})*/
