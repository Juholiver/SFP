import Cart from "@/models/Cart"
import { connectDB } from "@/lib/mongodb"
import { cookies } from "next/headers"
import { jwtVerify } from "jose"

export async function POST(req: Request) {

  await connectDB()

  const cookieStore = await cookies()
  const token = cookieStore.get("token")?.value

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  const { payload } = await jwtVerify(token!, secret)

  const { produto } = await req.json()

  let cart = await Cart.findOne({ userId: payload.id })

  if (!cart) {

    cart = await Cart.create({
      userId: payload.id,
      produtos: [produto]
    })

  } else {

    cart.produtos.push(produto)
    await cart.save()

  }

  return Response.json(cart)
}