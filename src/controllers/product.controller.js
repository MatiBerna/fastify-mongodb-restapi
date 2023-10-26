'use strict'
import Product from '../models/product.model.js'

export const getProducts = async (req, reply) => {
  const products = await Product.find()
  return products
}

//notar las dos formas de devolver (una con un return comun y otra haciendo uso del parametro reply)

export const getProduct = async (request, reply) => {
  const product = await Product.findById(request.params.id)
  return reply.code(200).send(product)
}

export const createProduct = async (request, reply) => {
  const newProduct = new Product(request.body)
  console.log(newProduct)

  await newProduct.save()

  reply.code(201).send(newProduct)
}

export const deleteProduct = async (request, reply) => {
  await Product.findByIdAndDelete(request.params.id)
  reply.code(204).send()
}

export const updateProduct = async (request, reply) => {
  try {
    const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true })

    if (!product) {
      return reply.code(404).send({ message: 'product not found' })
    }

    return reply.code(200).send(product)
  } catch (err) {
    return reply.code(500).send(err)
  }
}
