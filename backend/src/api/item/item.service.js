/* global Format */
const itemDao = require("./item.dao");
const { Format } = require("../../utils/format");
const Logger = require("../../config/logger");
const logger = new Logger("media.service.js");

/**
 * Add new Item request
 *
 * @param {props} props - Item request data
 */
 module.exports.addItemRequest = async (props) => {
  try {
    logger.log("[ItemService addItemRequest()] is called");
    const result = await itemDao.addItemRequest(props);
    return Format.success(result, 'Success');
  } catch (error) {
    logger.error(`[ ItemService addItemRequest()] ${error}`);
    throw error;
  }
};
