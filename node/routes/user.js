const express = require('express');
const router = express.Router();


/* PUT uset page. */
router.put('/', function(req, res, next) {
  console.log(req.body)
  res.send('Successful')
});

module.exports = router;