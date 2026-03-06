import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import { userSchema } from "@/schemas/userSchema"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("Dados recebidos no backend:", body)

    const result = userSchema.safeParse(body)
    if (!result.success) {
      console.log("Erro de validação Zod:", result.error.issues)
      return NextResponse.json(
        { erro: "Dados inválidos", detalhes: result.error.issues },
        { status: 400 }
      )
    }

    await connectDB()
    console.log("Conectado ao MongoDB com sucesso")

    const userExists = await User.findOne({ email: body.email })
    if (userExists) {
      console.log("Email já cadastrado:", body.email)
      return NextResponse.json({ erro: "Email já existe" }, { status: 409 })
    }

    const senhaHash = await bcrypt.hash(body.senha, 10)

    const user = await User.create({
      nome: body.nome,
      email: body.email,
      cep: body.cep,
      numeroCasa: body.numeroCasa,
      senha: senhaHash
    })

    console.log("Usuário criado com sucesso:", user.email)

    return NextResponse.json(
      {
        message: "Usuário criado com sucesso",
        user: { id: user._id, nome: user.nome, email: user.email }
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("Erro no cadastro:", error.message)
    return NextResponse.json(
      { erro: error.message || "Erro ao criar usuário" },
      { status: 500 }
    )
  }
}