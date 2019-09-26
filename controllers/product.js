const formidable = require('formidable');
const _ = require('lodash');

const Product = require('../models/product');

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Image could not be upload'
      });
    }
    let product = new Product(fields);

    if (files.photo) {
    }
  });
};
