import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function SpotlightCard({ children, className = '', ...props }) {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    
    // Smooth 3D tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const localX = e.clientX - rect.left;
        const localY = e.clientY - rect.top;
        setPosition({ x: localX, y: localY });
        
        const width = rect.width;
        const height = rect.height;
        const mouseX = localX / width - 0.5;
        const mouseY = localY / height - 0.5;
        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={handleMouseLeave}
            className={`spotlight-card ${className}`}
            style={{ 
                width: '100%', 
                rotateX, 
                rotateY,
                transformStyle: "preserve-3d",
                ...props.style 
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            {...props}
        >
            <div
                className="spotlight-effect"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />
            <div className="spotlight-content" style={{ transform: "translateZ(20px)" }}>{children}</div>
        </motion.div>
    );
}
