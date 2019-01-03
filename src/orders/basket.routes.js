const api = require('./basket.api.js')
const schema = require('./basket.schema')

const Joi = require('joi')

let rotas = [
  {
    path: '/basketApi/v1/Basket',
    method: 'GET',
    handler: api.list,
    options: {
      description: 'List orders',
      notes: 'Acesso a lista de orders',
      tags: ['api', 'Basket']
    }
  },
  {
    path: '/basketApi/v1/Basket/{basketId}',
    method: 'GET',
    handler: api.show,
    options: {
      description: 'Busca ordens',
      notes: 'Localiza ordens pelo Id',
      tags: ['api', 'Basket'],
      validate: {
        params: {
          basketId: Joi.string().required()
        }
      }
    }
  }
]
module.exports = rotas
