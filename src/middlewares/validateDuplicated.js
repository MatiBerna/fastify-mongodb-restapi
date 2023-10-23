import Product from '../models/product.model.js'

export const validateDucplicate = async (request, reply, done) => {
  const title = request.body.title
  const repeatedProduct = await Product.findOne({ title })

  if (repeatedProduct !== undefined) {
    return reply.code(400).send({ message: 'Producto repetido' })
  }
  done()
}
