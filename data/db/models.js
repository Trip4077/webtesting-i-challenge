const db = require('./dbConfig');

module.exports = {
    getItemList: () => {
       return db('items');
    }
}