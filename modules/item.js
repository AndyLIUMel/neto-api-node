const sharedModule = require('../shared');
const filterModule = require('./filter');


const getItem = (body) => {
    if (body) return sharedModule.postApi({action: 'GetItem', reqBody: body});
    else return {
        filter: filterModule
    };
};


module.exports = {
    getItem: getItem
};