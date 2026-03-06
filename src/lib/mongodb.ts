// src/lib/mongodb.ts
import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI não está definida no .env.local")
}

// Cria cache global para evitar múltiplas conexões no hot reload
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectDB() {
  if (cached.conn) {
    // Se já existe conexão, retorna
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // evita que comandos fiquem enfileirados antes da conexão
    }

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then(() => cached)
      .catch((err) => {
        cached.promise = null
        throw err
      })
  }

  try {
    cached.conn = await cached.promise
    return cached.conn
  } catch (error) {
    throw error
  }
}

// Declara o tipo global para cache no Node.js
declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
  }
}