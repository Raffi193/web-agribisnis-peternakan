class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #2C3E2A;
                    color: white;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 3rem 2rem;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                }
                
                .footer-logo img {
                    height: 40px;
                    margin-right: 10px;
                }
                
                .footer-about p {
                    margin-bottom: 1rem;
                    color: #E5D9B6;
                    line-height: 1.6;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    transition: background-color 0.3s;
                }
                
                .social-link:hover {
                    background-color: #5F8D4E;
                }
                
                .footer-heading {
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    position: relative;
                    padding-bottom: 0.5rem;
                }
                
                .footer-heading::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 50px;
                    height: 2px;
                    background-color: #5F8D4E;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-link-item {
                    margin-bottom: 0.8rem;
                }
                
                .footer-link {
                    color: #E5D9B6;
                    text-decoration: none;
                    transition: color 0.3s;
                    display: flex;
                    align-items: center;
                }
                
                .footer-link:hover {
                    color: white;
                }
                
                .footer-link i {
                    margin-right: 0.5rem;
                    width: 16px;
                }
                
                .contact-info {
                    margin-bottom: 0.8rem;
                    display: flex;
                    align-items: flex-start;
                }
                
                .contact-info i {
                    margin-right: 0.8rem;
                    margin-top: 0.2rem;
                }
                
                .contact-text {
                    color: #E5D9B6;
                    line-height: 1.6;
                }
                
                .footer-bottom {
                    background-color: #1E2A1C;
                    padding: 1.5rem 2rem;
                    text-align: center;
                    color: #E5D9B6;
                    font-size: 0.9rem;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <footer>
                <div class="footer-container">
                    <div class="footer-about">
                        <a href="/" class="footer-logo">
                            <img src="http://static.photos/agriculture/100x100/13" alt="Sapi Moo-dern Ranch Logo">
                            Sapi Pak Budi
                        </a>
                        <p>Peternakan sapi modern dengan standar kualitas terbaik di Indonesia. Berkomitmen untuk menyediakan sapi sehat dan berkualitas untuk kebutuhan Anda.</p>
                        <div class="social-links">
                            <a href="#" class="social-link"><i data-feather="facebook"></i></a>
                            <a href="#" class="social-link"><i data-feather="instagram"></i></a>
                            <a href="#" class="social-link"><i data-feather="twitter"></i></a>
                            <a href="#" class="social-link"><i data-feather="youtube"></i></a>
                        </div>
                    </div>
                    
                    <div class="footer-links">
                        <h3 class="footer-heading">Tautan Cepat</h3>
                        <ul class="footer-links">
                            <li class="footer-link-item">
                                <a href="#home" class="footer-link">
                                    <i data-feather="home"></i> Beranda
                                </a>
                            </li>
                            <li class="footer-link-item">
                                <a href="#about" class="footer-link">
                                    <i data-feather="info"></i> Tentang Kami
                                </a>
                            </li>
                            <li class="footer-link-item">
                                <a href="#products" class="footer-link">
                                    <i data-feather="shopping-bag"></i> Produk
                                </a>
                            </li>
                            <li class="footer-link-item">
                                <a href="#facilities" class="footer-link">
                                    <i data-feather="layers"></i> Fasilitas
                                </a>
                            </li>
                            <li class="footer-link-item">
                                <a href="#contact" class="footer-link">
                                    <i data-feather="mail"></i> Kontak
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="footer-contact">
                        <h3 class="footer-heading">Kontak Kami</h3>
                        <div class="contact-info">
                            <i data-feather="map-pin"></i>
                            <p class="contact-text">Plaju Darat, Kec. Plaju, Kota Palembang, Sumatera Selatan</p>
                        </div>
                        <div class="contact-info">
                            <i data-feather="phone"></i>
                            <p class="contact-text">081273174525</p>
                        </div>
                        <div class="contact-info">
                            <i data-feather="mail"></i>
                            <p class="contact-text">info@sapipakbudi@gmail.com</p>
                        </div>
                    </div>
                    
                    <div class="footer-newsletter">
                        <h3 class="footer-heading">Newsletter</h3>
                        <p class="contact-text">Berlangganan newsletter kami untuk mendapatkan informasi terbaru tentang peternakan dan penawaran spesial.</p>
                        <form class="mt-4">
                            <input type="email" placeholder="Alamat Email Anda" class="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white mb-2">
                            <button type="submit" class="w-full bg-primary hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                                Berlangganan
                            </button>
                        </form>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} Sapi Moo-dern Ranch. All Rights Reserved.</p>
                </div>
            </footer>
            
            <script>
                feather.replace();
            </script>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);