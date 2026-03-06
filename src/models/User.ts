import mongoose from "mongoose"

interface IUser {
  nome: string
  email: string
  cep: string
  numeroCasa: string
  senha: string
  createdAt?: Date
}

const UserSchema = new mongoose.Schema<IUser>({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cep: { type: String, required: true },
  numeroCasa: { type: String, required: true },
  senha: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema)
