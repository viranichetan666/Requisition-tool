const { body } = require("express-validator");

/**
 * @param {req} method - method
 */
module.exports = (method) => {
  switch (method) {
    case "add_item_request": {
      return [
        body("supplier_name")
          .exists({ checkNull: true })
          .withMessage("Supplier Name is required"),
        body("product_information")
          .exists({ checkNull: true })
          .withMessage("Product Information is required"),
        body("category")
          .exists({ checkNull: true })
          .withMessage("Category is required"),
      ];
    }
    default: {
      return [];
    }
  }
};
