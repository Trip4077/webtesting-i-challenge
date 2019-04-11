const express = require('express');
const router = express.Router();

const db = require('../data/db/models');

router.get('/items', (req, res) => {
    db.getItemList(res);
});

module.exports = router;