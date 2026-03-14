import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const [isDark, setIsDark] = useState(true)

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'light')
            setIsDark(false)
        } else {
            document.documentElement.removeAttribute('data-theme')
            setIsDark(true)
        }
    }

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Categories', href: '#who-can-apply' },
        { label: 'Startups', href: '#featured-startups' },
    ]

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
                <div className="navbar-inner">
                    <a href="#" className="navbar-logo">
                        <span className="logo-icon">KP</span>
                        <span><span className="karo">Karo</span>Pitch</span>
                    </a>

                    <div className="navbar-links">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </div>

                    <div className="navbar-cta" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <motion.a
                            href="#cta"
                            className="btn btn-primary"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Apply to Pitch
                        </motion.a>
                    </div>

                    <div className="mobile-menu-btn">
                        <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex' }}>
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setMenuOpen(true)}
                            aria-label="Open menu"
                            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex' }}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="mobile-menu open"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            className="mobile-close"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#cta"
                            className="btn btn-primary btn-lg"
                            onClick={() => setMenuOpen(false)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        >
                            Apply to Pitch
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
