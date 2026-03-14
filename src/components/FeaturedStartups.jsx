import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Sprout, BookOpen, Brush, CreditCard, Battery, Scissors } from 'lucide-react'
import { SpotlightCard } from './ui/SpotlightCard'

const startups = [
    { name: 'FreshBasket', category: 'D2C', desc: 'Farm-to-door organic produce delivery for Tier-2 cities.', icon: <Sprout size={24} />, color: 'var(--gradient-main)', tags: ['AgriTech', 'D2C', 'Tier-2'], raised: '₹50L', stage: 'Seed', city: 'Jaipur' },
    { name: 'LearnBharat', category: 'EdTech', desc: 'Vernacular language skill-building platform. Upskilling millions.', icon: <BookOpen size={24} />, color: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', tags: ['EdTech', 'Bharat', 'SaaS'], raised: '₹1.2Cr', stage: 'Pre-Series A', city: 'Lucknow' },
    { name: 'CraftKari', category: 'Manufacturing', desc: "Digitizing India's artisan economy – connecting 10k craftspeople globally.", icon: <Brush size={24} />, color: 'linear-gradient(135deg, #F59E0B, #D97706)', tags: ['Marketplace', 'Artisan', 'Export'], raised: '₹75L', stage: 'Seed', city: 'Varanasi' },
    { name: 'PaySetu', category: 'FinTech', desc: 'UPI-based micro-lending platform for street vendors and small merchants.', icon: <CreditCard size={24} />, color: 'linear-gradient(135deg, #8B5CF6, #6D28D9)', tags: ['FinTech', 'Lending', 'UPI'], raised: '₹2Cr', stage: 'Series A', city: 'Indore' },
    { name: 'GreenMiles', category: 'CleanTech', desc: 'EV logistics fleet for last-mile delivery, reducing footprint by 30%.', icon: <Battery size={24} />, color: 'linear-gradient(135deg, #22C55E, #15803D)', tags: ['EV', 'Logistics', 'CleanTech'], raised: '₹3Cr', stage: 'Series A', city: 'Pune' },
    { name: 'DesiWear', category: 'D2C Fashion', desc: 'Sustainable ethnic fashion brand using handloom fabrics.', icon: <Scissors size={24} />, color: 'linear-gradient(135deg, #EC4899, #BE185D)', tags: ['Fashion', 'D2C', 'Sustainable'], raised: '₹40L', stage: 'Pre-Seed', city: 'Surat' },
]

export default function FeaturedStartups() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

    return (
        <section className="featured-startups" id="featured-startups" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                    animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="section-badge">
                        <Sparkles size={14} /> Spotlight
                    </div>
                    <h2 className="section-title">
                        <span className="highlight">Featured</span> Startups
                    </h2>
                    <p className="section-subtitle">
                        Discover innovative companies building the future —
                        from small town origins to massive valuations.
                    </p>
                </motion.div>

                <div className="startups-grid">
                    {startups.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ delay: 0.15 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            style={{ height: '100%' }}
                        >
                            <SpotlightCard className="startup-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div className="startup-card-header">
                                    <div className="startup-logo" style={{ background: s.color, color: 'white' }}>
                                        {s.icon}
                                    </div>
                                    <div className="startup-info">
                                        <h3>{s.name}</h3>
                                        <span className="startup-category">{s.category}</span>
                                    </div>
                                </div>
                                <div className="startup-card-body" style={{ flexGrow: 1 }}>
                                    <p>{s.desc}</p>
                                    <div className="startup-tags">
                                        {s.tags.map((tag, j) => (
                                            <span key={j} className="startup-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: '16px 24px', borderTop: '1px solid var(--border)', background: 'var(--bg-primary)' }}>
                                    <div><div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{s.raised}</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Raised</div></div>
                                    <div><div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{s.stage}</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Stage</div></div>
                                    <div><div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{s.city}</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>HQ</div></div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
