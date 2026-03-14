import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, CheckCircle2, MonitorPlay, TrendingUp } from 'lucide-react'
import { SpotlightCard } from './ui/SpotlightCard'

const steps = [
    {
        icon: <FileText size={28} />,
        title: 'Apply with Pitch Deck',
        desc: 'Submit your startup profile and pitch deck through our secure application portal.',
    },
    {
        icon: <CheckCircle2 size={28} />,
        title: 'Get Shortlisted',
        desc: 'Our analyst team reviews applications and shortlists the most promising startups.',
    },
    {
        icon: <MonitorPlay size={28} />,
        title: 'Live Pitching Session',
        desc: 'Present your business in a structured virtual or physical room directly to investors.',
    },
    {
        icon: <TrendingUp size={28} />,
        title: 'Raise & Scale',
        desc: 'Secure term sheets, gain strategic mentorship, and accelerate your growth.',
    },
]

export default function HowItWorks() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

    return (
        <section className="how-it-works" id="how-it-works" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                    animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="section-badge">
                        <MonitorPlay size={14} /> The Process
                    </div>
                    <h2 className="section-title">
                        How <span className="highlight">Karo Pitch</span> Works
                    </h2>
                    <p className="section-subtitle">
                        A streamlined 4-step pipeline designed to connect serious founders
                        with serious capital. Simple, transparent, and built for speed.
                    </p>
                </motion.div>

                <div className="steps-grid">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ delay: 0.25 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <SpotlightCard className="step-card h-full">
                                <div className="step-number" style={{ position: 'relative' }}>
                                    <div style={{ color: 'var(--primary-light)' }}>{step.icon}</div>
                                    <div style={{ position: 'absolute', top: -8, right: -8, width: 24, height: 24, borderRadius: '50%', background: 'var(--gradient-main)', color: 'black', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {i + 1}
                                    </div>
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
