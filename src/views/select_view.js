const PubSub = require('../helpers/pub_sub.js')

const SelectView = function (element) {
    this.element = element;
}

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('Country:data_loaded', (event) => {
        this.populate(event.detail)
    })
}

SelectView.prototype.populate = function (countries) {
    countries.forEach((country, index) => {
        const option = document.createElement('option');
        console.log(country.name)
        option.textContent = country.name
        option.value = index;
        this.element.appendChild(option);
    })
   
}













module.exports = SelectView;