"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./login.module.css"

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")
  const [carregando, setCarregando] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setCarregando(true)
    setErro("")

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      })

      const data = await response.json()

      if (!response.ok) {
        setErro(data.erro || "Erro ao fazer login")
        return
      }

      // Login bem-sucedido
      router.push("/")
    } catch (err) {
      setErro("Erro ao conectar com o servidor")
      console.error(err)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles["login-form"]}>
        <h1 className={styles["login-title"]}>
          São Francisco Personalizados
        </h1>

        <p className={styles["login-subtitle"]}>
          Bem-vindo de volta! Por favor, faça login para acessar sua conta.
        </p>

        {erro && (
          <div style={{ color: "red", marginBottom: "15px", textAlign: "center" }}>
            {erro}
          </div>
        )}

        <form className={styles["login-form-content"]} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className={styles["login-label"]}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles["login-input"]}
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="senha" className={styles["login-label"]}>
              Senha
            </label>
            <input
              type="password"
              id="senha"
              className={styles["login-input"]}
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={styles["login-button"]}
            disabled={carregando}
          >
            {carregando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className={styles["login-footer"]}>
          Não tem conta?{" "}
          <a href="/cadastro" className={styles["login-register-link"]}>
            Cadastre-se
          </a>
        </p>
        <p className={styles["login-footer"]}>
          Quer continuar navegando?{" "}
          <a href="/" className={styles["login-register-link"]}>
            Clique aqui
          </a>
        </p>
      </div>
    </div>
  )
}