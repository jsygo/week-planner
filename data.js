/* exported data */

// var data = [{
//   day: 'Monday',
//   description: null,
//   time: null,
//   nextEntryId: 1,
//   editing: null
// },
// {
//   day: 'Tuesday',
//   description: null,
//   time: null,
//   nextEntryId: 1,
//   editing: null
// },
// {
//   day: 'Wednesday',
//   description: null,
//   time: null,
//   nextEntryId: 1,
//   editing: null
// },
// {
//   day: 'Thursday',
//   description: null,
//   time: null,
//   nextEntryId: 1,
//   editing: null
// },
// {
//   day: 'Friday',
//   description: null,
//   time: null,
//   nextEntryId: 1,
//   editing: null
// },
// {
//   day: 'Saturday',
//   description: null,
//   time: null,
//   nextEntryId: 1,
//   editing: null
// },
// {
//   day: 'Sunday',
//   description: null,
//   time: null,
//   nextEntryId: 1,
//   editing: null
// }];

var data = {
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('previous-data');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
window.addEventListener('beforeunload', function () {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('previous-data', dataJSON);
})
;
