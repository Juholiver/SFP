import "./RodaPe.css";
export default function RodaPe() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h3>São Francisco Personalizados</h3>
                    <p>O melhor lugar para encontrar o que você precisa com qualidade.</p>
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
                        <a href="/contato" className="contact-button-whatsapp">WhatsApp</a>
                    </div>

                    <div className="contact-instagram">
                        <img src="/insta.jpg" alt="Instagram" className="contact-image" />
                        <a href="https://www.instagram.com/" className="contact-button-instagram">Instagram</a>
                    </div>

                    <div className="contact-facebook">
                        <img src="/face.png" alt="Facebook" className="contact-image" />
                        <a href="https://www.facebook.com/" className="contact-button-facebook">Facebook</a>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 São Francisco Personalizados - Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}