const mongoose = require("mongoose");

const itemRequestSchema = mongoose.Schema(
  {
    supplier_name: {
      type: String,
      required: true,
    },
    product_information: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1
    },
    timeline: {
      type: Date
    },
    location: {
      type: String
    },
    required_for: {
      type: String
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

module.exports = mongoose.model("ItemRequest", itemRequestSchema);
