import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShoppingBag, Laptop, Factory, CloudUpload, Hammer, Globe2 } from 'lucide-react'
import { SpotlightCard } from './ui/SpotlightCard'

const categories = [
    { icon: <ShoppingBag size={24} />, title: 'D2C Brands', desc: 'Disrupting traditional retail with digital-first, brand-led models.' },
    { icon: <Laptop size={24} />, title: 'Consumer Tech', desc: 'Innovative consumer-facing products solving everyday problems.' },
    { icon: <Factory size={24} />, title: 'MSMEs', desc: 'Modernizing manufacturing and the services backbone of India.' },
    { icon: <CloudUpload size={24} />, title: 'SaaS Solutions', desc: 'Software-as-a-service companies building scalable B2B/B2C cloud tools.' },
    { icon: <Hammer size={24} />, title: 'Hardware', desc: 'Manufacturing businesses innovating with technology and automation.' },
    { icon: <Globe2 size={24} />, title: 'Bharat-Focused', desc: 'Startups solving real grassroots problems for Tier-2/3 & rural India.' },
]

export default function WhoCanApply() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section className="who-can-apply" id="who-can-apply" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                    animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="section-badge">
                        <Globe2 size={14} /> Eligibility Checklist
                    </div>
                    <h2 className="section-title">
                        Who Can <span className="highlight">Apply</span>?
                    </h2>
                    <p className="section-subtitle">
                        If you're an ambitious founder building something real—whether in a metro
                        or a small town—Karo Pitch is for you.
                    </p>
                </motion.div>

                <div className="categories-grid">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <SpotlightCard className="category-card h-full">
                                <div className="category-icon" style={{ color: 'var(--primary-light)' }}>{cat.icon}</div>
                                <h3>{cat.title}</h3>
                                <p>{cat.desc}</p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
