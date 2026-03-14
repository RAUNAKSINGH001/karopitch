import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Globe, Users, Target, Rocket, Briefcase, Building2, ShieldCheck, Calendar, Clock } from 'lucide-react'
import { SpotlightCard } from './ui/SpotlightCard'

export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

    const features = [
        {
            icon: <Zap size={20} />,
            title: 'Curated Pitch Events ',
            desc: 'Structured pitch sessions with real investors actively deploying capital',
        },
        {
            icon: <Globe size={20} />,
            title: 'Pan-India Access',
            desc: 'Reaching founders across Bharat — from metros to Tier-2 towns',
        },
        {
            icon: <Users size={20} />,
            title: 'Investor Matching',
            desc: 'Smart matching with investors aligned to your specific sector and stage',
        },
        {
            icon: <Rocket size={20} />,
            title: 'Rapid Scaling',
            desc: 'Get access to strategic guidance and resources to accelerate your growth',
        },
    ]

    const metrics = [
        { icon: <Rocket size={20} />, value: '5+', label: 'Years Ecosystem Exp.' },
        { icon: <Briefcase size={20} />, value: '1,000+', label: 'Founders Connected' },
        { icon: <Target size={20} />, value: 'Tier 2-3', label: 'Primary Focus Area' },
        { icon: <Users size={20} />, value: '50K+', label: 'Active Members' },
    ]

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 40, filter: 'blur(8px)' },
        animate: inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {},
        transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
    })

    return (
        <section className="about" id="about" ref={ref}>
            <div className="container">
                <div className="about-grid" style={{ alignItems: 'stretch' }}>
                    <motion.div className="about-content" {...fadeUp(0)} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div className="section-badge">
                            <Zap /> About Karo Pitch
                        </div>
                        <h2 className="section-title">
                            Bridging the Gap Between{' '}
                            <br /> <span className="highlight">Founders & Investors</span>
                        </h2>
                        <p>
                            Thousands of founders across India are building incredible businesses — from
                            D2C brands to deep-tech startups. Yet, most lack access to investors,
                            mentorship, and visibility.
                        </p>
                        <p>
                            <strong>Karo Pitch</strong> connects these founders with investors through
                            curated pitch events — making fundraising accessible,
                            no matter where you&apos;re building from.
                        </p>

                        <div className="about-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginTop: 'auto', paddingTop: '32px' }}>
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                                    animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                                    transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ height: '100%' }}
                                >
                                    <SpotlightCard className="ks-feature-card" style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div className="icon" style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', color: 'var(--primary-light)', width: 'fit-content' }}>
                                            {f.icon}
                                        </div>
                                        <div style={{ marginTop: '16px' }}>
                                            <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', fontFamily: 'var(--font-primary)' }}>{f.title}</h4>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5, display: 'block' }}>{f.desc}</span>
                                        </div>
                                    </SpotlightCard>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="about-visual" {...fadeUp(0.2)} style={{ width: '100%', maxWidth: '460px', margin: '0 0 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                        <SpotlightCard style={{ padding: '40px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                {metrics.map((m, i) => (
                                    <motion.div
                                        key={i}
                                        style={{ display: 'flex', alignItems: 'center', gap: '24px' }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gradient-main)', color: 'black' }}>
                                            {m.icon}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-primary)' }}>{m.value}</div>
                                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.label}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </SpotlightCard>

                        {/* Bharat First Mini-Card (Aesthetic Fill) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            style={{ marginTop: '16px' }}
                        >
                            <SpotlightCard style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                <div style={{ color: 'var(--primary-light)', padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', flexShrink: 0, border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '4px', fontFamily: 'var(--font-primary)' }}>Bharat First</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                        Empowering founders from Tier-2 and Tier-3 cities with unprecedented access to top-tier institutional capital.
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Application Stats Mini-Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.0, duration: 0.6 }}
                            style={{ marginTop: '16px' }}
                        >
                            <SpotlightCard style={{ padding: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-primary)' }}>Pitch Approval Rate</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--primary-light)', fontWeight: 600 }}>24%</div>
                                </div>
                                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '24%' }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
                                        style={{ height: '100%', background: 'var(--gradient-main)', borderRadius: '4px' }}
                                    />
                                </div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Zap size={10} color="var(--primary-light)" />
                                    Highly selective to ensure investor quality
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Dual Trust Badges (Aesthetic Fill) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            style={{ marginTop: '16px', display: 'flex', gap: '16px' }}
                        >
                            <SpotlightCard style={{ padding: '16px', flex: 1, display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '10px', color: 'var(--primary-light)' }}>
                                    <Building2 size={18} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}>Top VCs</div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Partnered</div>
                                </div>
                            </SpotlightCard>

                            <SpotlightCard style={{ padding: '16px', flex: 1, display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '10px', color: 'var(--primary-light)' }}>
                                    <ShieldCheck size={18} />
                                </div>
                                <div>
                                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}>Verified</div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Investors Only</div>
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Current Cohort Deadline (Aesthetic Fill) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.4, duration: 0.6 }}
                            style={{ marginTop: '16px' }}
                        >
                            <SpotlightCard style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--gradient-card)', border: '1px solid var(--border-primary)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Calendar size={16} color="var(--primary-light)" />
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600, fontFamily: 'var(--font-primary)' }}>Season 1 Cohort</div>
                                    </div>
                                    <div style={{ padding: '4px 10px', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '20px', fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                                        Active
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', background: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                                    <Clock size={16} color="var(--text-secondary)" />
                                    <div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Applications close in</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>14 Days : 08 Hrs</div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
