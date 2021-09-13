var $entryForm = document.querySelector('form');
// var $submit = document.querySelectorAll('a');
var $submit = document.querySelector('#submit');

// $submit.addEventListener('click', handleSubmit);

// function handleSubmit(event) {

// }

function formSubmitHandler(event) {
  console.log('form submit');
  var entry = {
    day: $entryForm.elements.day.value,
    time: $entryForm.elements.day.value,
    description: $entryForm.elements.day.value
  };
  console.log('entry', entry);
  // if (!event.target.matches('#submit')) {
  //   return
  // }
}

$entryForm.addEventListener('submit', formSubmitHandler);
