import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Skills extracted from Resume [cite: 8-12]
    const skills = [
        "Apex & Triggers",
        "Lightning Web Components",
        "Agentforce AI",
        "Jenkins CI/CD",
        "REST/SOAP APIs",
        "Sales/Service Cloud",
        "SOQL/SOSL",
        "Visualforce"
    ];

    return (
        <section id="about" className="py-32 relative">
            <div className="container px-6 mx-auto">
                <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="aspect-square relative rounded-2xl overflow-hidden card-shadow bg-secondary/30">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-hero opacity-80 blur-3xl" />
                                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-card border-4 border-primary/30 flex items-center justify-center z-10">
                                    <span className="font-heading text-4xl md:text-6xl font-bold text-gradient">SS</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
                        <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl -z-10" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">About Me</p>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                            Driving business efficiency with <span className="text-gradient">Salesforce</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            With 4 years of experience as a Systems Engineer at <strong>Tata Consultancy Services</strong>, I specialize in building scalable solutions that solve real business problems. I have a proven track record of co-leading development projects and optimizing complex workflows.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                            My expertise spans the full development lifecycle—from writing efficient Apex code to orchestrating CI/CD pipelines with Jenkins. I am passionate about reducing manual data entry and improving end-user efficiency.
                        </p>

                        {/* Skills Grid */}
                        <div className="flex flex-wrap gap-3 mt-8">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    className="px-4 py-2 bg-secondary text-foreground text-sm font-medium rounded-lg border border-border hover:border-primary/50 transition-colors"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;