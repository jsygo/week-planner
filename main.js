/* global data */
/* exported data */

var $entryForm = document.querySelector('form');
var $modalOverlay = document.querySelector('.overlay');
var $addEntryButton = document.querySelector('.add-entry-button');
// var $submit = document.querySelectorAll('a');
// var $submit = document.querySelector('#submit');

// $submit.addEventListener('click', handleSubmit);

// function handleSubmit(event) {

// }

function formSubmitHandler(event) {
  event.preventDefault();
  console.log('form submit');
  var entry = {
    day: $entryForm.elements.day.value,
    time: $entryForm.elements.day.value,
    description: $entryForm.elements.day.value
    // entryId: data.nextEntryId
  };

  entry.entryId = data.nextEntryId;
  data.nextEntryId++;
  $entryForm.reset();

  for (var day in data) {
    // debugger;
    if (day === entry.day) {
      data[day].unshift(entry);
    }
  }

  $modalOverlay.setAttribute('class', 'hidden');
  console.log('data:', data);

  console.log('entry', entry);
  // if (!event.target.matches('#submit')) {
  //   return
  // }
}

function addEntry(event) {
  $modalOverlay.setAttribute('class', 'overlay center-content');
}

$entryForm.addEventListener('submit', formSubmitHandler);

$addEntryButton.addEventListener('click', addEntry);
