import { connectDB } from "@/lib/mongodb"
import Order from "@/models/Order"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value

    if (!token) {
      return Response.json(
        { erro: "Token não encontrado" },
        { status: 401 }
      )
    }

    let decoded: any
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET!)
    } catch {
      return Response.json(
        { erro: "Token inválido ou expirado" },
        { status: 401 }
      )
    }

    const body = await req.json()

    if (!body.produtos || !Array.isArray(body.produtos) || body.produtos.length === 0) {
      return Response.json(
        { erro: "Produtos são obrigatórios" },
        { status: 400 }
      )
    }

    if (!body.total || body.total <= 0) {
      return Response.json(
        { erro: "Total deve ser maior que zero" },
        { status: 400 }
      )
    }

    await connectDB()

    const pedido = await Order.create({
      userId: decoded.id,
      produtos: body.produtos,
      total: body.total
    })

    return Response.json(
      { message: "Pedido criado com sucesso", pedido },
      { status: 201 }
    )
  } catch (error) {
    console.error("Erro ao criar pedido:", error)
    return Response.json(
      { erro: "Erro ao criar pedido" },
      { status: 500 }
    )
  }
}

