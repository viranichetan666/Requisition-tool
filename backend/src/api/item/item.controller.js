const itemService = require('./item.service');

const { validationResult } = require('express-validator');

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 */
module.exports.addItemRequest = async (req, res, next) => {
  try {
    const props = req.body;

    const errors = validationResult(req);
    console.log("errors+++", errors)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const result = await itemService.addItemRequest(props);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
