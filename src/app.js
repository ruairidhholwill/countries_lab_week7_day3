const SelectView = require('./views/select_view.js')
const DisplayCountryView = require('./views/display_country_view.js')
const Country = require('./models/countries.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const country = new Country();
  country.getData();

  const selectView = new SelectView();
  selectView.bindEvents();

  const displayCountryView = new DisplayCountryView();
  displayCountryView.bindEvents();
  
});
