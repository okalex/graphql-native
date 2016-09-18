'use strict'

const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const client = new Lokka({
  transport: new Transport('http://localhost:3000/api')
});

const getUser = (id) => {
  return client.query(`
    {
      user(id: {id}) {
        id
        name
      }
    }
  `);
};



module.exports = {
  client,
  getUser
};
