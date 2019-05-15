const PubSub = require('../helpers/pub_sub.js')

const SelectView = function (element) {
    this.element = element;
}

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('Country:data_loaded', (event) => {
        this.populate(event.detail)
    })
    this.element.addEventListener('change', (event) => {
        const selectedIndex = event.target.value;
        PubSub.publish('Countries:change', selectedIndex)
    })
}



SelectView.prototype.populate = function (countries) {
    countries.forEach((country, index) => {
        const option = document.createElement('option');
        option.textContent = country.name
        option.value = index;
        this.element.appendChild(option);
    })
   
}













module.exports = SelectView;