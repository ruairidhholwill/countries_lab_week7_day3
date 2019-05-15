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

    const countryName = this.createElement('h1', country.name);
    this.container.appendChild(countryName);

    const countryFlag = new Image(200, 100);
    countryFlag.src = country.flag;
    this.container.appendChild(countryFlag)

    const countryRegionHeader = this.createElement('h2', 'Region: ')
    this.container.appendChild(countryRegionHeader);

    const countryRegion = this.createElement('h3', `${country.region}`)
    this.container.appendChild(countryRegion)

    const countryLanguage = this.createElement('h3', `Languages: `)
    this.container.appendChild(countryLanguage);

    const countryList = this.createLanguagesList(country.languages);
    this.container.appendChild(countryList);


 
}

DisplayCountryView.prototype.createElement = function (elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
}

DisplayCountryView.prototype.createLanguagesList = function (languages) {
    const list = document.createElement('ul');

    languages.forEach((language) => {
        const listItem = document.createElement('li')
        listItem.textContent = language.name;
        list.appendChild(listItem);
    })

    return list;
}


 

module.exports = DisplayCountryView;