'use client'
import { useRouter } from "next/navigation";
import { useCartStore } from "../../store/cartStore";

export default function LogoutButton() {
  const router = useRouter();
  const clearCart = useCartStore((state : any) => state.clearCart);

  const handleLogout = async () => {
    try {
      // 1. Chama a API para deletar o Cookie
      const res = await fetch("/api/auth/logout", { method: "POST" });

      if (res.ok) {
        // 2. Limpa o carrinho local (Zustand)
        clearCart();

        // 3. Redireciona para a home ou login
        router.push("/login");
        router.refresh(); // Força o Next.js a revalidar o Middleware
      }
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Sair
    </button>
  );
}