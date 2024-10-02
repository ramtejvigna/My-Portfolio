import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: JSX.Element;
    width?: 'fit-content' | '100%';
}

export const Reveal = ({ children, width = '100%' }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </div>
    );
};
