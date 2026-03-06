import mongoose from "mongoose"

const CartSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  produtos: [
    {
      productId: String,
      nome: String,
      preco: Number,
      quantidade: Number
    }
  ],

  updatedAt: {
    type: Date,
    default: Date.now
  }

})

export default mongoose.models.Cart || mongoose.model("Cart", CartSchema)