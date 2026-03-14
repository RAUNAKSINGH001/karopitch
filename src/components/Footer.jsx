import {
    Instagram,
    Linkedin,
    Twitter,
    Facebook,
    Youtube,
    ArrowRight
} from 'lucide-react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="navbar-logo" style={{ marginBottom: '16px' }}>
                            <span className="logo-icon">KP</span>
                            <span style={{ color: 'var(--text-primary)' }}><span className="karo">Karo</span>Pitch</span>
                        </a>
                        <p>
                            India's most accessible startup pitch platform — connecting Bharat's founders
                            with investors to build the future.
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.instagram.com/karopitch/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="https://www.linkedin.com/company/karo-startup/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            <a href="https://x.com/karo_startup" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="X (Twitter)"><Twitter size={18} /></a>
                            <a href="https://www.facebook.com/karostartup" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="https://www.youtube.com/@karostartup/videos" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="YouTube"><Youtube size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Platform</h4>
                        <a href="#about">About Karo Pitch</a>
                        <a href="#how-it-works">How It Works</a>
                        <a href="#who-can-apply">Who Can Apply</a>
                        <a href="#featured-startups">Featured Startups</a>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <a href="https://karostartup.com" target="_blank" rel="noopener noreferrer">KaroStartup HQ</a>
                        <a href="https://www.instagram.com/karo_startup_/" target="_blank" rel="noopener noreferrer">Startup Stories</a>
                        <a href="mailto:business@karostartup.com">Partner with Us</a>
                        <a href="mailto:business@karostartup.com">Contact Support</a>
                    </div>

                    <div className="footer-column footer-newsletter">
                        <h4>Stay Updated</h4>
                        <p>Get the latest pitch events and funding news straight to your inbox.</p>
                        <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing! (Demo Mode)") }}>
                            <input type="email" placeholder="founder@startup.com" required />
                            <button type="submit">
                                <ArrowRight size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>
                        © {new Date().getFullYear()} KaroStartup Platforms. <span>All rights reserved.</span>
                    </div>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="https://karostartup.com" target="_blank" rel="noopener noreferrer">A KaroStartup Initiative</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
