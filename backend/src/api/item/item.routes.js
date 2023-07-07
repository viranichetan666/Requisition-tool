const router = require('express').Router();

const { addItemRequest } = require('./item.controller');

const validate = require('./item.validation');


router.route('/').post(validate('add_item_request'), addItemRequest);

module.exports = router;


