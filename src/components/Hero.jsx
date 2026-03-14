import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, BarChart2, ShieldCheck, Zap, ArrowRight } from 'lucide-react'
import { ThreeDCard } from './ui/ThreeDCard'

function AnimatedNumber({ end, duration = 2, prefix = '', suffix = '' }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) setStarted(true)
            },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [started])

    useEffect(() => {
        if (!started) return
        let start = 0
        const increment = end / (duration * 60)
        const timer = setInterval(() => {
            start += increment
            if (start >= end) {
                setCount(end)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 1000 / 60)
        return () => clearInterval(timer)
    }, [started, end, duration])

    return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

export default function Hero() {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 60])

    const staggerObj = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    }

    return (
        <section className="hero" id="hero" ref={heroRef}>
            <div className="container">
                <motion.div
                    className="hero-grid"
                    style={{ y }}
                    variants={staggerObj}
                    initial="hidden"
                    animate="show"
                >
                    {/* Left Column - Typography */}
                    <div className="hero-content" style={{ textAlign: 'left', margin: 0 }}>
                        <motion.div className="section-badge" variants={fadeUp}>
                            <Sparkles size={14} />
                            Season 1 Applications Open
                        </motion.div>

                        <motion.h1 variants={fadeUp}>
                            Pitch Your Startup to <br />
                            <span className="highlight">India&apos;s Investors.</span>
                        </motion.h1>

                        <motion.p className="hero-subtitle" variants={fadeUp} style={{ marginLeft: 0 }}>
                            Karo Pitch is India&apos;s most accessible platform. Founders from Tier-2,
                            Tier-3 cities, and Bharat can pitch directly to investors, raise capital, and scale.
                        </motion.p>

                        <motion.div className="hero-buttons" variants={fadeUp} style={{ justifyContent: 'flex-start' }}>
                            <a href="#cta" className="btn btn-primary btn-lg">
                                Apply to Pitch
                                <ArrowRight size={20} />
                            </a>
                            <a href="#featured-startups" className="btn btn-secondary btn-lg">
                                Explore Startups
                            </a>
                        </motion.div>

                        <motion.div className="hero-stats" variants={staggerObj}>
                            {[
                                { end: 5000, suffix: '+', label: 'Stories' },
                                { end: 500, suffix: '+', label: 'Investors' },
                                { end: 100, prefix: '₹', suffix: 'Cr+', label: 'Funding' },
                            ].map((stat, i) => (
                                <motion.div key={i} className="hero-stat" variants={fadeUp}>
                                    <div className="val">
                                        <AnimatedNumber end={stat.end} duration={2.5} prefix={stat.prefix || ''} suffix="" />
                                        <span style={{ color: 'var(--primary-light)' }}>{stat.suffix}</span>
                                    </div>
                                    <div className="lbl">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column - 3D Glass Object */}
                    <motion.div variants={fadeUp} style={{ width: '100%', maxWidth: '460px', margin: '0 auto', alignSelf: 'flex-start', position: 'relative' }}>


                        <ThreeDCard className="w-full">
                            <div className="hero-glass-card">
                                <div className="glass-mockup-header">
                                    <div className="glass-mockup-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Zap size={24} color="white" />
                                    </div>
                                    <div>
                                        <div className="glass-mockup-title">Founder Workspace</div>
                                        <div className="glass-mockup-sub">Upload Pitch Deck to System</div>
                                    </div>
                                </div>

                                <div className="glass-mockup-body" style={{ flexDirection: 'column', gap: '8px' }}>
                                    <BarChart2 size={32} strokeWidth={1} />
                                    <span>Analyzing Metrics...</span>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                                    <ShieldCheck size={16} color="var(--primary-light)" />
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Verified by top investors</span>
                                </div>
                            </div>
                        </ThreeDCard>

                        {/* Recent Activity Mini-Card (Aesthetic Fill) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            style={{ marginTop: '24px', padding: '16px 20px', borderRadius: 'var(--radius-lg)', background: 'var(--bg-card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '16px' }}
                        >
                            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: '50%' }}>
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: 'var(--primary)', opacity: 0.2 }}
                                />
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', position: 'relative', zIndex: 1 }} />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-primary)' }}>
                                    Platform Activity
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>FinTech Startup raised ₹1.5Cr just now</div>
                            </div>
                        </motion.div>

                        {/* Active Funds/Investors Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.8 }}
                            style={{ width: '100%', marginTop: '16px', display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 20px', borderRadius: 'var(--radius-lg)', background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                        >
                            <div style={{ display: 'flex', marginLeft: '8px' }}>
                                {['#3B82F6', '#EC4899', '#8B5CF6'].map((color, idx) => (
                                    <div key={idx} style={{ width: '28px', height: '28px', borderRadius: '50%', background: color, border: '2px solid var(--bg-primary)', marginLeft: '-8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 600, color: 'white' }}>
                                        {['S', 'V', 'A'][idx]}
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-primary)' }}>120+ Active Funds</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Reviewing pitches right now</div>
                            </div>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}
