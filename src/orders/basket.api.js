const Boom = require('boom')
const Baskets = require('./basket.model')
const api = {}

api.list = (request, h, error) => {
  /** Lista dos usuarios do sistema.
  * @param {String} name nome do usuario
  */
  // console.log('----List----')
  // console.log(request.query)
  const { query, page, pagesize, order } = request.query
  // console.log(query)
  
  try {
    // console.log(Ordens)
    return JSON.stringify(Baskets)
  } catch (e) {
    console.log(e)
  }
}

api.show = (request, h, error) => {
  const basketId = request.params.basketId
  // console.log(userId)
  try {
    let busca 
    Baskets.map(basket => {
      if (basket._id === parseInt(basketId)) {
        busca = basket
      }
    })
    return JSON.stringify(busca)
  } catch (e) {
    console.log(e)
    return Boom.badData(e.message)
  }
}

module.exports = api
