const Item = require('./item.model')

const buildSaveMediaJson = (props) => {
  const { supplier_name, product_information, category, quantity, timeline, location, required_for } = props;
  const json = {};
  json.supplier_name = supplier_name;
  json.product_information = product_information;
  json.category =  category;
  json.quantity = quantity || 1;
  json.timeline = timeline;
  json.location = location;
  json.required_for = required_for
  return json;
};

module.exports.addItemRequest = async (props) => {
  try {
    const media = new Item(buildSaveMediaJson(props));
    const result = media.save();
    return result;
  } catch (error) {
    logger.error(`[ itemDao addItemRequest()] ${error}`);
    throw error;
  }
};

