import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Newspaper, Film, Mic, Sparkles } from 'lucide-react'
import { SpotlightCard } from './ui/SpotlightCard'

function AnimatedStat({ end, suffix = '', duration = 2.5 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started) setStarted(true)
        }, { threshold: 0.3 })
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

    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const features = [
    { icon: <Newspaper size={20} />, title: 'Startup Media Platform', desc: "One of India's largest startup storytelling platforms." },
    { icon: <Film size={20} />, title: 'Video Content', desc: 'Engaging video interviews reaching millions of aspiring entrepreneurs.' },
    { icon: <Mic size={20} />, title: 'Community Events', desc: 'Regular meetups, webinars, and networking events.' },
    { icon: <Heart size={20} />, title: 'Founder First', desc: 'Every initiative is designed to empower founders.' },
]

const stats = [
    { value: 5000, suffix: '+', label: 'Stories' },
    { value: 5, suffix: '+ Years', label: 'In Ecosystem' },
    { value: 100, suffix: 'K+', label: 'Social Reach' },
    { value: 50, suffix: 'K+', label: 'Community' },
    { value: 200, suffix: '+', label: 'Events Hosted' },
    { value: 25, suffix: '+', label: 'Cities Reached' },
]

export default function AboutKaroStartup() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

    return (
        <section className="about-karostartup" id="about-karostartup" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: 'center', marginBottom: '64px' }}
                >
                    <div className="section-badge" style={{ margin: '0 auto 24px' }}>
                        <Heart size={14} /> Backed by the Best
                    </div>
                    <h2 className="section-title">
                        Powered by <span className="highlight">KaroStartup</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Over 5 years, KaroStartup has built one of India&apos;s largest platforms,
                        sharing founder journeys and organizing massive networking events across Bharat.
                    </p>
                </motion.div>

                <div className="about-ks-grid">
                    <motion.div
                        className="about-ks-content"
                        initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
                        animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="about-ks-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            {stats.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                                >
                                    <SpotlightCard className="ks-stat" style={{ padding: '24px' }}>
                                        <div className="stat-value" style={{ color: 'var(--primary-light)' }}>
                                            <AnimatedStat end={s.value} suffix={s.suffix} />
                                        </div>
                                        <div className="stat-label">{s.label}</div>
                                    </SpotlightCard>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-ks-visual"
                        initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
                        animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}
                    >
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.35 + i * 0.1, duration: 0.6 }}
                                style={{ height: '100%' }}
                            >
                                <SpotlightCard className="ks-feature-card" style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', color: 'var(--primary-light)', width: 'fit-content', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '16px' }}>
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.05rem', marginBottom: '8px' }}>{f.title}</h4>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{f.desc}</p>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
