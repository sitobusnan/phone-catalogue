const express = require('express');
const router  = express.Router();
const data = require('../phones.json')

/* GET home page */
router.get('/', (req, res, next) => {
  res.json(data);
});

module.exports = router;
