🛍️ São Francisco Personalizados - E-commerce
O São Francisco Personalizados é uma plataforma de e-commerce completa, focada em produtos customizados. O projeto foi construído utilizando as tecnologias mais modernas do ecossistema React, garantindo performance, SEO e uma arquitetura escalável.

🛠️ Tecnologias de Ponta
Frontend: Next.js 15+ (App Router)

Linguagem: TypeScript para tipagem estática e segurança.

Banco de Dados: MongoDB Atlas com modelagem via Mongoose.

Estado Global: Zustand com middleware persist para manter o carrinho no navegador.

Segurança: Autenticação via JWT com armazenamento em Cookies httpOnly.

🏗️ Arquitetura do Sistema
O projeto preza pela Separação de Responsabilidades (SoC), facilitando a manutenção e testes:

📂 Estrutura de Pastas
/app (Routes): Gerencia o roteamento do sistema.

/api: Backend isolado com rotas para Login, Logout, Produtos e Carrinho.

/carrinho: Página dedicada ao gerenciamento de itens selecionados.

/components: Componentes de interface reutilizáveis (Header, Footer, LogoutButton, Card de Produto).

/models: Definição dos Schemas do Mongoose para usuários e carrinhos.

/lib: Configurações centrais, como a conexão única com o banco de dados.

/store: Lógica de negócio do carrinho (adicionar, remover, limpar) via Zustand.

middleware.ts: Guardião das rotas, validando o token JWT antes do acesso a páginas sensíveis.

🔒 Fluxo de Autenticação e Cookies
Implementamos um fluxo de segurança de nível profissional:

Geração de Token: Ao logar, um JWT é gerado no servidor.

Cookies Seguros: O token é enviado via Set-Cookie com a flag httpOnly, protegendo-o contra ataques de script (XSS).

Middleware de Proteção: O middleware.ts intercepta requisições para /carrinho ou /api/cart, redirecionando usuários não autenticados para /login.

Logout Total: Ao clicar em Sair, o cookie é deletado no servidor e o estado do Zustand é resetado no cliente.

🚀 Como Rodar o Projeto
1. Requisitos
Node.js instalado.

Conta no MongoDB Atlas.

2. Variáveis de Ambiente
Crie um arquivo .env.local na raiz e preencha:

Snippet de código
MONGODB_URI=sua_url_do_mongodb_atlas
JWT_SECRET=sua_chave_secreta_para_token
NEXT_PUBLIC_WHATSAPP_NUMBER=5515999999999
3. Instalação e Execução
Bash
# Instalar dependências
npm install

# Iniciar em modo de desenvolvimento
npm run dev
🌟 Diferenciais do Projeto
✅ Carrinho Persistente: O usuário não perde os itens ao fechar a aba.

✅ Menu Responsivo: Experiência mobile nativa com menu hambúrguer customizado.

✅ Checkout Conciso: Integração direta com o WhatsApp do vendedor para fechamento de pedido.

✅ SEO Otimizado: Uso de Metadata do Next.js para melhor ranqueamento.

👨‍💻 Contribuição
Faça um Fork do projeto.

Crie uma Branch para sua feature (git checkout -b feature/NovaFuncionalidade).

Dê um Commit nas suas mudanças (git commit -m 'Adicionando nova feature').

Dê um Push na Branch (git push origin feature/NovaFuncionalidade).

Abra um Pull Request.

Desenvolvido com foco em qualidade por José Mario