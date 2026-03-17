import Card from "../card/Card";
import styles from "./Protudos.module.css";

export default function ListaProdutos() {
  const produtos = [
    
  { 
    id: 1, 
    title: "Camiseta Preta", 
    description: "Confeccionada em algodão premium, oferece toque macio e durabilidade. Ideal para personalizações exclusivas com acabamento de alta qualidade.", 
    price: 37.00, 
    img: "/Camisetapreta.jpg" 
  },
  { 
    id: 2, 
    title: "Camiseta Branca", 
    description: "Clássica e versátil, em algodão 100%. Superfície otimizada para estamparia, garantindo cores vivas e alta definição na sua personalização.", 
    price: 49.00, 
    img: "/camisetabranca.jpg" 
  },
  { 
    id: 3, 
    title: "Caneca Personalizada", 
    description: "Porcelana de alto brilho com acabamento impecável. Resistente a micro-ondas e lava-louças, perfeita para presentear ou uso corporativo.", 
    price: 36.00, 
    img: "/caneca.jpg" 
  },
  { 
    id: 4, 
    title: "Almofada Decorativa", 
    description: "União de conforto e estilo. Produzida em tecido de algodão macio com enchimento antialérgico, ideal para decorar ambientes com exclusividade.", 
    price: 48.00, 
    img: "/almofada.jpg" 
  },
  { 
    id: 5, 
    title: "Almochaveiro", 
    description: "O brinde perfeito: leve, criativo e marcante. Acabamento reforçado e estampa em alta resolução em ambos os lados.", 
    price: 6.00, 
    img: "/almochaveiro.jpg" 
  },
  { 
    id: 6, 
    title: "Blusa Casual", 
    description: "Modelagem moderna em algodão de alta gramatura. Proporciona excelente caimento e conforto térmico para o dia a dia.", 
    price: 110.00, 
    img: "/blusa.jpg" 
  },
  { 
    id: 7, 
    title: "Camiseta Escolar", 
    description: "Desenvolvida para máxima resistência ao uso diário. Tecido respirável que garante conforto aos estudantes durante todo o período letivo.", 
    price: 36.00, 
    img: "/CamisetaEscolar.jpg" 
  },
  { 
    id: 8, 
    title: "Camiseta de Formatura", 
    description: "Eternize este momento especial com qualidade. Tecido confortável e estampa duradoura para celebrar sua conquista em grande estilo.", 
    price: 49.00, 
    img: "/camisetaFormatura.jpg" 
  },
  { 
    id: 9, 
    title: "Conjunto Pijama Premium", 
    description: "Composto por blusa e calça em algodão soft. Projetado para proporcionar noites de sono tranquilas com máximo bem-estar e suavidade.", 
    price: 80.00, 
    img: "/Conjunto.jpg" 
  },
  { 
    id: 10, 
    title: "Conjunto Feminino Moletom", 
    description: "Design contemporâneo em moletom flanelado. O equilíbrio perfeito entre aquecimento e estilo para dias mais frios.", 
    price: 100.00, 
    img: "/ConjuntoFeminino.jpg" 
  },
  { 
    id: 11, 
    title: "Conjunto Masculino Moletom", 
    description: "Corte estruturado e material de alta resistência. Conforto excepcional com interior macio, ideal para um visual casual e moderno.", 
    price: 100.00, 
    img: "/ConjuntoMasculino.jpg" 
  },
  { 
    id: 12, 
    title: "Naninha Personalizada", 
    description: "Item essencial para o conforto do bebê. Tecido hipoalergênico e toque ultra macio, oferecendo segurança e aconchego na hora de dormir.", 
    price: 35.00, 
    img: "/naninha.jpg" 
  }


  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Produtos</h2>
      <div className={styles.grid}>
        {produtos.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            title={p.title}
            description={p.description}
            price={p.price}
            img={p.img}
          />
        ))}
      </div>
    </div>
  );
}