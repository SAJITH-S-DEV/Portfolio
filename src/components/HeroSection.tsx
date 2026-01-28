import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-200" />

            <div className="container relative z-10 px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-primary font-medium tracking-widest uppercase text-sm mb-6"
                    >
                        Salesforce Developer
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                    >
                        I'm <span className="text-gradient">Sajith S.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Building scalable enterprise solutions on the Salesforce Platform.
                        Expert in Apex, LWC, and complex integrations with a focus on optimizing workflows.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a href="#projects" className="px-8 py-4 bg-gradient-hero text-primary-foreground font-semibold rounded-lg glow-effect hover:scale-105 transition-transform duration-300">
                            View My Work
                        </a>
                        <a href="#contact" className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition-colors duration-300">
                            Get In Touch
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <span className="text-xs tracking-widest uppercase">Scroll</span>
                        <ArrowDown className="w-4 h-4 animate-bounce" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;