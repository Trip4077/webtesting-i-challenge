const express = require('express');
const router = express.Router();

const db = require('../data/db/models');

router.get('/items', (req, res) => {
    db.getItemList()
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
})

module.exports = router;