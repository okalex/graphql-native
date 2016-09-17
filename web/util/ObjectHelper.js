'use strict'

const values = (obj) => {
  return Object.keys(obj).map((k) => obj[k]);
};

module.exports = { values };
