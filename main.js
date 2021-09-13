/* global data */
/* exported data */

var $entryForm = document.querySelector('form');
var $modalOverlay = document.querySelector('.overlay');
var $addEntryButton = document.querySelector('.add-entry-button');
var $tableNodeList = document.querySelectorAll('table');
var $daySelectorNodeList = document.querySelectorAll('.day-selector');
var $dayTabContainer = document.querySelector('.day-tabs');
// var $submit = document.querySelectorAll('a');
// var $submit = document.querySelector('#submit');

// $submit.addEventListener('click', handleSubmit);

// function handleSubmit(event) {

// }

function formSubmitHandler(event) {
  event.preventDefault();

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

function clickTab(event) {

}

function addEntry(event) {
  $modalOverlay.setAttribute('class', 'overlay center-content');
}

$entryForm.addEventListener('submit', formSubmitHandler);

$addEntryButton.addEventListener('click', addEntry);
$dayTabContainer.addEventListener('click', clickTab);
