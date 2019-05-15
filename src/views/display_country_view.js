const PubSub = require('../helpers/pub_sub.js');

const DisplayCountryView = function (container) {
    this.container = container;
}

DisplayCountryView.prototype.bindEvents = function () {
    PubSub.subscribe('Countries:country-info', (event) => {
        const countryDetails = event.detail;
        this.render(countryDetails);
    });
}

DisplayCountryView.prototype.render = function (country) {
    this.container.innerHTML = '';

    const countryName = this.createElement('h2', country.name);
    this.container.appendChild(countryName);
}

DisplayCountryView.prototype.createElement = function (elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
}


module.exports = DisplayCountryView;