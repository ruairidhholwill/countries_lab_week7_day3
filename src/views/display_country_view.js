const PubSub = require('../helpers/pub_sub.js');

const DisplayCountryView = function (container) {
    this.container = container;
}

DisplayCountryView.prototype.bindEvents = function () {
    PubSub.subscribe('Countries:country-info'), (event) => {
        this.render(event.detail);
    }
}


// rendner function


module.exports = DisplayCountryView;