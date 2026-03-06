import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export async function POST(req: Request) {
  try {
    const { email, senha } = await req.json()

    if (!email || !senha) {
      return Response.json(
        { erro: "Email e senha são obrigatórios" },
        { status: 400 }
      )
    }

    await connectDB()

    const user = await User.findOne({ email })

    if (!user) {
      return Response.json(
        { erro: "Usuário não encontrado" },
        { status: 401 }
      )
    }

    const senhaValida = await bcrypt.compare(senha, user.senha)

    if (!senhaValida) {
      return Response.json(
        { erro: "Senha inválida" },
        { status: 401 }
      )
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    )

    const cookieStore = await cookies()

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7
    })

    return Response.json(
      {
        message: "Login realizado com sucesso",
        user: {
          id: user._id,
          nome: user.nome,
          email: user.email
        }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error("Erro no login:", error)

    return Response.json(
      { erro: "Erro ao fazer login" },
      { status: 500 }
    )
  }
}