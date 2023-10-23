import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/product.controller.js'
import { validateDucplicate } from '../middlewares/validateDuplicated.js'

export const productsRoutes = [
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
    preHandler: validateDucplicate,
    handler: updateProduct,
  },
]
