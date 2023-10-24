'use strict'
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
    preHandler: validateDuplicate,
    handler: updateProduct,
  },
]

export function productRoutes(fastify, options, done) {
  productsRoutes.forEach((route) => {
    fastify.route(route)
  })
  done()
}
