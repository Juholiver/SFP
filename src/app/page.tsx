import ListaProdutos  from "./_components/produtos/ListaProdutos";
import SobreNos from "./_components/sobre/SobreNos";
import Header from "./_components/header/Header";
import Hero from "./_components/hero/Hero";
import RodaPe from "./_components/footer/RodaPe";


export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <div id="produtos"><ListaProdutos /></div>
        <div id="sobre"><SobreNos /></div>
      </div>
      <RodaPe />
    
    </>
    
  )
}
