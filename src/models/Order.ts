import mongoose from "mongoose"

interface IOrder {
  userId: string
  produtos: Array<{ id: number; quantidade: number }>
  total: number
  createdAt?: Date
}

const OrderSchema = new mongoose.Schema<IOrder>({
  userId: { type: String, required: true },
  produtos: [{
    id: { type: Number, required: true },
    quantidade: { type: Number, required: true }
  }],
  total: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema)