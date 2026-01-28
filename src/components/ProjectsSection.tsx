import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, Database, Terminal } from "lucide-react";

// Projects based on Resume Experience
const projects = [
    {
        title: "Southern California Edison",
        role: "Project Lead / Developer",
        description: "Led DCB & Workit development for Southern California Edison projects. Developed Apex/LWC solutions that reduced manual data entry by 40% and improved end-user efficiency by 25%.",
        tags: ["Apex", "LWC", "Team Leadership"],
        icon: Code,
    },
    {
        title: "Enterprise Integrations",
        role: "Systems Engineer",
        description: "Managed complex system integrations with SAP, DM, and SharePoint. Successfully diagnosed and resolved critical HTTP 401 errors related to Salesforce certificate updates.",
        tags: ["SAP CPI", "REST API", "Integration"],
        icon: Terminal,
    },
    {
        title: "DevOps & CI/CD Pipeline",
        role: "Release Manager",
        description: "Orchestrated deployment processes across 5 development teams using Jenkins. Decreased deployment time by 35% and reduced post-release defects by 99%.",
        tags: ["Jenkins", "Git", "Deployment"],
        icon: Database,
    },
    {
        title: "Fitch Group ",
        role: "QA Specialist / Dev",
        description: "Executed comprehensive functional testing for 15+ Salesforce scenarios. Collaborated with dev teams to verify fixes, achieving an 85% first-time acceptance rate.",
        tags: ["Testing", "QA", "Regression"],
        icon: Briefcase,
    },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const Icon = project.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 card-shadow flex flex-col"
        >
            <div className="p-8 flex-grow">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm font-mono text-primary mb-4">{project.role}</p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-secondary text-xs font-medium text-muted-foreground rounded border border-border/50">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-32 relative bg-secondary/30">
            <div className="container px-6 mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Experience</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Featured <span className="text-gradient">Work</span></h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Key projects and milestones from my professional career at Tata Consultancy Services.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;