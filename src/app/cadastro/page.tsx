"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "./cadastro.module.css"

// 1. Definição do Schema de Validação
const cadastroSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Digite um email válido"),
  cep: z.string().regex(/^\d{5}-?\d{3}$/, "CEP inválido (ex: 00000-000)"),
  numeroCasa: z.string().min(1, "O número da casa é obrigatório"),
  senha: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  confirmarSenha: z.string()
}).refine((data) => data.senha === data.confirmarSenha, {
  message: "As senhas não coincidem",
  path: ["confirmarSenha"],
})

export default function CadastroPage() {
  const [erroGeral, setErroGeral] = useState("")
  const [carregando, setCarregando] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(cadastroSchema),
  })

  const onSubmit = async (data: any) => {
    setCarregando(true)
    setErroGeral("")

    try {
      const response = await fetch("/api/auth/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: data.nome,
          email: data.email,
          cep: data.cep,
          numeroCasa: data.numeroCasa,
          senha: data.senha
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        setErroGeral(result.erro || "Erro ao criar conta")
        return
      }

      // Cadastro bem-sucedido, redirecionar para login
      router.push("/login")
    } catch (err) {
      setErroGeral("Erro ao conectar com o servidor")
      console.error(err)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles["cadastro-card"]}>
        <div className={styles["cadastro-header"]}>
          <h1>Cadastro</h1>
          <p>Crie sua conta para começar.</p>
        </div>

        {erroGeral && (
          <div style={{ color: "red", marginBottom: "15px", textAlign: "center" }}>
            {erroGeral}
          </div>
        )}

        <form className={styles["cadastro-form-content"]} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="nome" className={styles["login-label"]}>Nome</label>
            <input 
              {...register("nome")} 
              type="text" 
              className={styles["login-input"]} 
              placeholder="Digite seu nome" 
            />
            {errors.nome && <span className={styles.error}>{errors.nome.message}</span>}
          </div>

          <div>
            <label htmlFor="email" className={styles["login-label"]}>Email</label>
            <input 
              {...register("email")} 
              type="email" 
              className={styles["login-input"]} 
              placeholder="Digite seu email" 
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>

          <div>
            <label htmlFor="cep" className={styles["login-label"]}>CEP</label>
            <input 
              {...register("cep")} 
              type="text" 
              className={styles["login-input"]} 
              placeholder="00000-000" 
            />
            {errors.cep && <span className={styles.error}>{errors.cep.message}</span>}
          </div>

          <div>
            <label htmlFor="numeroCasa" className={styles["login-label"]}>Número da Casa</label>
            <input 
              {...register("numeroCasa")} 
              type="text" 
              className={styles["login-input"]} 
              placeholder="Número da casa" 
            />
            {errors.numeroCasa && <span className={styles.error}>{errors.numeroCasa.message}</span>}
          </div>

          <div>
            <label htmlFor="senha" className={styles["login-label"]}>Senha</label>
            <input 
              {...register("senha")} 
              type="password" 
              className={styles["login-input"]} 
              placeholder="Digite sua senha" 
            />
            {errors.senha && <span className={styles.error}>{errors.senha.message}</span>}
          </div>

          <div>
            <label htmlFor="confirmarSenha" className={styles["login-label"]}>Confirmar Senha</label>
            <input 
              {...register("confirmarSenha")} 
              type="password" 
              className={styles["login-input"]} 
              placeholder="Confirme sua senha" 
            />
            {errors.confirmarSenha && <span className={styles.error}>{errors.confirmarSenha.message}</span>}
          </div>

          <button type="submit" className={styles["login-button"]} disabled={carregando}>
            {carregando ? "Cadastrando..." : "Cadastrar"}
          </button>

          <div className={styles["cadastro-footer"]}>
            <p>Já tem uma conta? <a href="/login" className={styles["login-register-link"]}>Faça login</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}