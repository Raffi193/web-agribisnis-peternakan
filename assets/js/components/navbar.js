class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }
                
                .navbar {
                    background-color: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    padding: 1rem 2rem;
                }
                
                .navbar.scrolled {
                    background-color: rgba(255, 255, 255, 0.98);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    padding: 0.5rem 2rem;
                }
                
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #5F8D4E;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }
                
                .logo img {
                    height: 40px;
                    margin-right: 10px;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-link {
                    color: #333;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                    position: relative;
                }
                
                .nav-link:hover {
                    color: #5F8D4E;
                }
                
                .nav-link.active {
                    color: #5F8D4E;
                    font-weight: 600;
                }
                
                .nav-link.active::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #5F8D4E;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #333;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background-color: white;
                        flex-direction: column;
                        align-items: center;
                        padding: 2rem 0;
                        gap: 1.5rem;
                        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                        transform: translateY(-150%);
                        transition: transform 0.3s ease;
                        z-index: 999;
                    }
                    
                    .nav-links.open {
                        transform: translateY(0);
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            
            <nav class="navbar">
                <div class="nav-container">
                    <a href="/" class="logo">
                        <img src="http://static.photos/agriculture/100x100/13" alt="Sapi Moo-dern Ranch Logo">
                        M. Daffa Abhiyasa
                    </a>
                    
                    <button class="mobile-menu-btn" id="mobileMenuBtn">
                        <i data-feather="menu"></i>
                    </button>
                    
                    <div class="nav-links" id="navLinks">
                        <a href="#home" class="nav-link active">Beranda</a>
                        <a href="#about" class="nav-link">Tentang Kami</a>
                        <a href="#owner" class="nav-link">Profil Pemilik</a>
                        <a href="#products" class="nav-link">Produk</a>
                        <a href="#facilities" class="nav-link">Fasilitas</a>
                        <a href="#gallery" class="nav-link">Testimoni</a>
                        <a href="#contact" class="nav-link">Kontak</a>
                    </div>
                </div>
            </nav>
            
            <script>
                feather.replace();
                
                // Mobile menu toggle
                const mobileMenuBtn = this.shadowRoot.getElementById('mobileMenuBtn');
                const navLinks = this.shadowRoot.getElementById('navLinks');
                
                if (mobileMenuBtn && navLinks) {
                    mobileMenuBtn.addEventListener('click', () => {
                        navLinks.classList.toggle('open');
                        mobileMenuBtn.innerHTML = navLinks.classList.contains('open') 
                            ? '<i data-feather="x"></i>' 
                            : '<i data-feather="menu"></i>';
                        feather.replace();
                    });
                }
                
                // Change navbar style on scroll
                const navbar = this.shadowRoot.querySelector('.navbar');
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                });
                
                // Set active link based on current page
                const currentPath = window.location.pathname;
                const navLinksAll = this.shadowRoot.querySelectorAll('.nav-link');
                
                navLinksAll.forEach(link => {
                    const linkPath = new URL(link.href).pathname;
                    if (currentPath === linkPath) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            </script>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);