const Footer = () => {
    return (
        <footer className="py-8 border-t border-border bg-background">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Updated Name to Sajith S. */}
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Sajith S. All rights reserved.
                    </p>

                    <p className="text-muted-foreground text-sm">
                        Built<span className="text-primary"></span> using React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;