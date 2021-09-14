/* global data */
/* exported data */

var $entryForm = document.querySelector('form');
var $modalOverlay = document.querySelector('.overlay');
var $addEntryButton = document.querySelector('.add-entry-button');
var $tableNodeList = document.querySelectorAll('table');
var $daySelectorNodeList = document.querySelectorAll('.day-selector');
var $dayTabContainer = document.querySelector('.day-tabs');
var $tableTitle = document.querySelector('h4');
var $tbodyNodeList = document.querySelectorAll('tbody');
// var $submit = document.querySelectorAll('a');
// var $submit = document.querySelector('#submit');

// $submit.addEventListener('click', handleSubmit);

// function handleSubmit(event) {

// }

function formSubmitHandler(event) {
  event.preventDefault();

  var entry = {
    day: $entryForm.elements.day.value,
    time: $entryForm.elements.time.value,
    description: $entryForm.elements.description.value
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
  if (event.target.matches('.day-selector')) {
    $tableTitle.textContent = `Scheduled Events for ${capitalizeDay(event.target.getAttribute('data-view'))}`;
    for (var i = 0; i < $tableNodeList.length; i++) {
      if (event.target.getAttribute('data-view') === $tableNodeList[i].getAttribute('data-view')) {
        $tableNodeList[i].setAttribute('class', 'column-full');
      } else {
        $tableNodeList[i].setAttribute('class', 'hidden');
      }
    }
    // for (var day in data) {
    //   if (day === event.target.getAttribute('data-view')) {
    //     for (var j = 0; j < $tbodyNodeList.length; j++) {
    //       if ($tbodyNodeList[j].getAttribute('class') === event.target.getAttribute('data-view')) {
    //         for ()
    //       }
    //     }
    //   }
    // }
  }
}

function capitalizeDay(day) {
  var capitalizeDay = day[0].toUpperCase();
  for (var i = 1; i < day.length; i++) {
    capitalizeDay += day[i];
  }
  return capitalizeDay;
}

function addEntry(event) {
  $modalOverlay.setAttribute('class', 'overlay center-content');
}

$entryForm.addEventListener('submit', formSubmitHandler);

$addEntryButton.addEventListener('click', addEntry);
$dayTabContainer.addEventListener('click', clickTab);

function contentLoaded(event) {
  for (var i = 0; i < $tbodyNodeList.length; i++) {
    var dataEntryDay = data[$tbodyNodeList[i].getAttribute('class')];
    for (var j = 0; j < dataEntryDay.length; j++) {
      $tbodyNodeList[i].append(renderEntry(dataEntryDay[j]));
    }
  }
}

window.addEventListener('DOMContentLoaded', contentLoaded);

function renderEntry(entry) {
  var $tr = document.createElement('tr');
  var $tdTime = document.createElement('td');
  var $tdDescription = document.createElement('td');

  $tr.append($tdTime, $tdDescription);
  console.log('$tr', $tr);

  $tdTime.textContent = entry.time;

  $tdDescription.textContent = entry.description;

  return $tr;
}

// function generateEntriesList()
