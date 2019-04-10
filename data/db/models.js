const knex = require('knex');
const knexConfig = require('../../knexfile'); 

const db = knex(knexConfig.development);

module.exports = {
    getItemList: res => {
        return db.select('*')
                .from('items')
                .then(items => {
                    res.status(200).json(items);
                })
                .catch(err => {
                    console.log(err);
                    res.status(404).json({ error: err, message: "Could not get Items" })
                })
    }
}