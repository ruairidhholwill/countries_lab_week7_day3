const PubSub = require('../helpers/pub_sub.js')

const SelectView = function (container) {
    this.container = container;
}

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('Country:data_loaded', (event) => {
        // this.render(event.detail)
        console.log(event.detail)
    })
}

// render funciton













module.exports = SelectView;