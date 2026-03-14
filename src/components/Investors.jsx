import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Building2, Landmark, Trophy } from 'lucide-react'
import { SpotlightCard } from './ui/SpotlightCard'

const investors = [
    { icon: <Landmark size={24} />, name: 'Rajesh Mehta', role: 'Angel Investor', focus: 'D2C & Consumer Tech' },
    { icon: <Building2 size={24} />, name: 'Ananya Sharma', role: 'Venture Partner', focus: 'SaaS & Deep Tech' },
    { icon: <Trophy size={24} />, name: 'Vikram Singh', role: 'Fund Manager', focus: 'MSMEs & Hardware' },
    { icon: <Users size={24} />, name: 'Priya Patel', role: 'Angel Network Lead', focus: 'Bharat & AgriTech' },
]

export default function Investors() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

    return (
        <section className="investors" id="investors" ref={ref} style={{ padding: 'var(--section-padding) 0' }}>
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '64px' }}
                    initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                    animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="section-badge" style={{ margin: '0 auto 24px' }}>
                        <Users size={14} /> Global Capital
                    </div>
                    <h2 className="section-title">
                        Network with <span className="highlight">Top Tier Capital</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Prominent angel investors, VCs, and family offices actively attend
                        Karo Pitch sessions looking to deploy capital.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                    {investors.map((inv, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40, scale: 0.92 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            style={{ height: '100%' }}
                        >
                            <SpotlightCard style={{ padding: '32px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--text-primary)', border: '1px solid var(--border)' }}>
                                    {inv.icon}
                                </div>
                                <h4 style={{ fontFamily: 'var(--font-primary)', fontSize: '1.2rem', marginBottom: '4px' }}>{inv.name}</h4>
                                <div style={{ fontSize: '0.85rem', color: 'var(--primary-light)', marginBottom: '12px', flexGrow: 1 }}>{inv.role}</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', borderTop: '1px solid var(--border)', paddingTop: '16px', width: '100%' }}>{inv.focus}</div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
