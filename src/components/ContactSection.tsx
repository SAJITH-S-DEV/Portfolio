import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'; // Import EmailJS
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Phone } from "lucide-react";

const ContactSection = () => {
    const ref = useRef(null);
    const formRef = useRef<HTMLFormElement>(null); // specific ref for the form
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // 👇 REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS 👇
        const SERVICE_ID = "service_3y1vmye";
        const TEMPLATE_ID = "template_c37lpr7";
        const PUBLIC_KEY = "YGQEd2-9_f2ZHgDFl";

        if (formRef.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
                .then((result) => {
                    alert("Message Sent! I will get back to you shortly.");
                    console.log(result.text);
                    if (formRef.current) formRef.current.reset(); // Clear form
                }, (error) => {
                    alert("An error occurred, please try again.");
                    console.log(error.text);
                })
                .finally(() => {
                    setIsSubmitting(false);
                });
        }
    };

    const socialLinks = [
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/YOUR-LINKEDIN",
            label: "LinkedIn"
        },
        {
            icon: Github,
            href: "https://github.com/sajith-s",
            label: "GitHub"
        },
        {
            icon: Twitter,
            href: "https://twitter.com/YOUR-TWITTER",
            label: "Twitter"
        },
    ];

    return (
        <section id="contact" className="py-32 relative">
            <div className="container px-6 mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Get In Touch</p>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Let's Work <span className="text-gradient">Together</span></h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Open to relocation and new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="font-heading text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-4">

                                {/* Email */}
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sajith.salesforcedev@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span>sajith.salesforcedev@gmail.com</span>
                                </a>

                                {/* Phone */}
                                <a href="tel:+917025157741" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span>+91 7025157741</span>
                                </a>

                                {/* Location */}
                                <div className="flex items-center gap-4 text-muted-foreground">
                                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span>Trivandrum, Kerala, India</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-semibold mb-4 text-foreground">Follow Me</h4>
                            <div className="flex gap-4">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:scale-110"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Connected to EmailJS */}
                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6 bg-card p-8 rounded-2xl border border-border"
                    >
                        <div>
                            <label htmlFor="user_name" className="block text-sm font-medium mb-2">Name</label>
                            {/* Note: name="user_name" matches EmailJS convention */}
                            <input type="text" name="user_name" required className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="Your name" />
                        </div>

                        <div>
                            <label htmlFor="user_email" className="block text-sm font-medium mb-2">Email</label>
                            {/* Note: name="user_email" matches EmailJS convention */}
                            <input type="email" name="user_email" required className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-muted-foreground" placeholder="your@email.com" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            {/* Note: name="message" matches EmailJS convention */}
                            <textarea name="message" rows={5} required className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-foreground placeholder:text-muted-foreground" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-8 py-4 bg-gradient-hero text-primary-foreground font-semibold rounded-lg glow-effect hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Sending..." : (
                                <>
                                    <Send className="w-4 h-4" /> Send Message
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;