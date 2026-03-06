import "./SobreNos.css";

export default function SobreNos() {
  const steps = [
    {
      number: "01",
      title: "Envie sua Arte",
      description:
        "Escolha o produto e envie sua imagem ou descrição da personalização desejada.",
      icon: "🎨",
    },
    {
      number: "02",
      title: "Nós Personalizamos",
      description:
        "Nossa equipe cria e ajusta sua arte com qualidade e atenção aos detalhes.",
      icon: "🖌️",
    },
    {
      number: "03",
      title: "Receba em Casa",
      description:
        "Produzimos e enviamos rapidamente para o conforto da sua casa.",
      icon: "📦",
    },
  ];

  const reasons = [
    {
      id: 1,
      title: "Qualidade Garantida",
      description:
        "Utilizamos materiais de alta qualidade e técnicas avançadas para garantir que cada produto seja durável e tenha um acabamento impecável.",
      icon: "✅",
    },
    {
        id: 2,
        title: "Entrega Rápida",
        description:
          "Nos comprometemos a entregar seus produtos personalizados no menor tempo possível, sem comprometer a qualidade.",
        icon: "🚀",
       
    },
    {
        id: 3,
        title: "Parcelamos no cartão",
        description:
          "Oferecemos opções de parcelamento flexíveis para facilitar sua compra e tornar nossos produtos acessíveis a todos.",
        icon: "💳",
       
    },
    {
        id: 4,
        title: "Personalizacao exclusiva",
        description:
          "Cada produto é único, criado especialmente para você, garantindo que sua personalização seja verdadeiramente exclusiva.",
        icon: "🌟",
    }
  ];

  return (
    <div className="container">
      <div className="sobre-content">
        <h1>Sobre Nós</h1>
        <p>
          Somos uma empresa dedicada a criar produtos personalizados de alta
          qualidade. Nossa missão é transformar suas ideias em realidade,
          oferecendo uma ampla variedade de itens personalizáveis.
        </p>
      </div>

      <div className="como-comprar">
        <h2>Como Comprar</h2>

        <div className="cards">
          {steps.map((step) => (
            <div className="card" key={step.number}>
              <div className="icon">{step.icon}</div>
              <span className="number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <br/>
        <h2>Porque comprar conosco?</h2>
        <div className="cards">
          {reasons.map((reason) => (
            <div className="card" key={reason.id}>
              <div className="icon">{reason.icon}</div>
              <span className="number">{reason.id}</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}