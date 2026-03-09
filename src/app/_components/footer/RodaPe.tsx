'use client'
import React from "react";
import "./RodaPe.css";
export default function RodaPe() {

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const handleCheckout = () => {
    // Cria uma mensagem simples
    const message = encodeURIComponent(`Olá! Gostaria de fazer meu pedido.`);
    
    // Abre o WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };


    return (

        
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h3>São Francisco Personalizados</h3>
                    <h4>Endereço</h4>
                    <p>Rua: Vicente Rodrigues Furtado, N: 361, Jardim Casa Grande, Itapetininga</p>
                </div>

                <div className="footer-section">
                    <h4>Links</h4>
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="#produtos">Produtos</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Fale Conosco</h4>
                    <div className="contact-whatsapp">
                        <img src="/whatsapp.jpg" alt="WhatsApp" className="contact-image" />
                        <button onClick={handleCheckout} className="contact-button-whatsapp">WhatsApp</button>
                    </div>

                    <div className="contact-instagram">
                        <img src="/insta.jpg" alt="Instagram" className="contact-image" />
                        <a href="https://www.instagram.com/p/C_lmYXUuH2m/" className="contact-button-instagram">Instagram</a>
                    </div>

                    <div className="contact-facebook">
                        <img src="/face.png" alt="Facebook" className="contact-image" />
                        <a href="https://www.facebook.com/sfranciscopersonalizados/" className="contact-button-facebook">Facebook</a>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 São Francisco Personalizados - Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}