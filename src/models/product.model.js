import { Schema, model } from 'mongoose'

const productSchema = new Schema(
  {
    title: String,
    price: Number,
    image: String,
    description: String,
    quantity: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model('Product', productSchema)
