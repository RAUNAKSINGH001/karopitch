import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Send } from 'lucide-react'
import { SpotlightCard } from './ui/SpotlightCard'

export default function CTA() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 })

    return (
        <section className="cta-section" id="cta" ref={ref} style={{ padding: 'var(--section-padding) 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(10px)' }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <SpotlightCard className="cta-inner" style={{ background: 'var(--gradient-card)', border: '1px solid var(--border-primary)', position: 'relative', overflow: 'hidden' }}>


                        <motion.div className="section-badge" style={{ position: 'relative', zIndex: 1, margin: '0 auto 24px' }}>
                            <Send size={14} /> Submit Application
                        </motion.div>

                        <motion.h2
                            style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--font-primary)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Ready to Pitch Your{' '}
                            <br /><span className="highlight">Startup</span>?
                        </motion.h2>
                        <motion.p
                            style={{ position: 'relative', zIndex: 1, color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 40px' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.35, duration: 0.6 }}
                        >
                            Join hundreds of founders taking the stage, telling their story,
                            and raising capital through Karo Pitch.
                        </motion.p>
                        <motion.div
                            style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '16px', justifyContent: 'center' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert("Karo Pitch Application Form will open here! (Demo Mode)");
                                }}
                                className="btn btn-primary btn-lg"
                            >
                                Apply Now
                                <ArrowRight size={18} />
                            </a>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert("Partner Connect Form will open here! (Demo Mode)");
                                }}
                                className="btn btn-secondary btn-lg"
                            >
                                Partner With Us
                            </a>
                        </motion.div>
                    </SpotlightCard>
                </motion.div>
            </div>
        </section>
    )
}
