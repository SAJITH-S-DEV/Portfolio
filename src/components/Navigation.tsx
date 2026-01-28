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
        { name: "Experience", href: "#projects" },
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

                    {/* LOGO AREA */}
                    <a href="#" className="flex items-center gap-3 group">

                        {/* The Logo Container */}
                        <div className="relative flex items-center justify-center">

                            {/* 1. Cloud Icon (Golden) */}
                            <svg
                                viewBox="0 0 28 24"
                                fill="currentColor"
                                className="w-24 h-24 text-primary transition-transform group-hover:scale-105"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M16.1 5.2c-1.3 0-2.4.6-3.2 1.6-.5-.3-1-.5-1.6-.5-1.6 0-3 1.3-3 3 0 .2 0 .3.1.5-1.7.3-3 1.8-3 3.6 0 2 1.7 3.6 3.7 3.6h9.9c2.2 0 4-1.8 4-4 0-2.1-1.6-3.8-3.7-4-.2-2.1-1.9-3.8-3.2-3.8z" />
                            </svg>

                            {/* 2. The Text Inside (Black, Lowercase, Rounded Font) */}
                            <span
                                className="absolute text-black select-none pt-2"
                                style={{
                                    fontSize: '11px',
                                    fontFamily: '"Arial Rounded MT Bold", "Nunito", sans-serif', // Mimics the OG rounded font
                                    fontWeight: 'bold',
                                    fontStyle: 'italic', // Often the OG logo has a slight lean
                                }}
                            >
                                salesforce
                            </span>
                        </div>

                        {/* Your Initials */}
                        <span className="font-heading text-2xl font-bold text-gradient -ml-2">SS.</span>
                    </a>

                    {/* Desktop Menu */}
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

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-foreground p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
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