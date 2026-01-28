import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#projects" }, // Renamed from Projects to Experience
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
                }`}
        >
            <div className="container px-6 mx-auto">
                <div className="flex items-center justify-between h-20">
                    {/* Updated Logo to your initials */}
                    <a href="#" className="font-heading text-2xl font-bold text-gradient">SS.</a>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" className="px-5 py-2.5 bg-gradient-hero text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform">
                            Hire Me
                        </a>
                    </div>

                    <button className="md:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden border-t border-border bg-background"
                        >
                            <div className="flex flex-col gap-4 py-6">
                                {navLinks.map((link) => (
                                    <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>
                                        {link.name}
                                    </a>
                                ))}
                                <a href="#contact" className="px-5 py-3 bg-gradient-hero text-primary-foreground font-semibold rounded-lg text-center mt-2" onClick={() => setIsMobileMenuOpen(false)}>
                                    Hire Me
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navigation;