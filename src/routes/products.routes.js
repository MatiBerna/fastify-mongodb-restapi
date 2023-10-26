'use strict'
/**
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 *@param {Object} options
 */
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/product.controller.js'
import { validateDuplicate } from '../hooks/validateDuplicated.js'

const productsRoutes = [
  {
    url: '/products',
    method: 'GET',
    handler: getProducts,
  },
  {
    url: '/products/:id',
    method: 'GET',
    handler: getProduct,
  },
  {
    url: '/products',
    method: 'POST',
    handler: createProduct,
  },
  {
    url: '/products/:id',
    method: 'DELETE',
    handler: deleteProduct,
  },
  {
    url: '/products/:id',
    method: 'PUT',
    handler: updateProduct,
  },
]

export async function productRoutes(fastify, options, done) {
  fastify.register(async (fastify, options, done) => {
    fastify.decorate('validateDuplicated', validateDuplicate)

    fastify.addHook('preHandler', (request, reply, done) => {
      fastify.validateDuplicated(request, reply, done)
    })
    productsRoutes.forEach((route) => {
      fastify.route(route)
    })
    done()
  })
}
