'use strict'
import Product from '../models/product.model.js'

export const validateDuplicate = async (request, reply, done) => {
  if (request.body) {
    const title = request.body.title
    const repeatedProduct = await Product.findOne({ title })

    if (repeatedProduct) {
      return reply.code(400).send({ message: 'Producto repetido' })
    }
  }
  console.log('HOOK PARA PRODUCTOS EJECUTADO')
  done()
}
